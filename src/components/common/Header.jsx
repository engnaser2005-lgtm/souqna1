import { Link } from 'react-router-dom'
import { Search, ShoppingCart, Heart, User, Menu, X, Bell, Sun, Moon } from 'lucide-react'
import { useState } from 'react'
import { useAuthContext } from '../../contexts/AuthContext'
import { useTheme } from '../../contexts/ThemeContext'
import NotificationBell from './NotificationBell'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { user, profile, isAuthenticated, isSeller } = useAuthContext()
  const { theme, toggleTheme, isDark } = useTheme()

  const categories = [
    { name: 'الإلكترونيات', slug: 'electronics' },
    { name: 'الأزياء', slug: 'fashion' },
    { name: 'الجمال', slug: 'beauty' },
    { name: 'السيارات', slug: 'vehicles' },
    { name: 'البيت والمطبخ', slug: 'home' },
    { name: 'الأم والطفل', slug: 'baby' },
    { name: 'السوبر ماركت', slug: 'grocery' },
    { name: 'الكتب', slug: 'books' },
    { name: 'الحيوانات', slug: 'pets' },
  ]

  return (
    <header className="bg-header-blue border-b-2 border-gold sticky top-0 z-50">
      {/* Top bar */}
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
              <span className="text-primary-blue font-bold text-xl">س</span>
            </div>
            <span className="text-gold font-bold text-2xl hidden sm:block">سوقنا</span>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl relative">
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              className="w-full bg-secondary-blue border border-secondary-blue rounded-lg pl-12 pr-4 py-2.5 
                       text-white placeholder-text-secondary focus:border-gold focus:outline-none 
                       transition-colors duration-200"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-text-secondary w-5 h-5" />
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-secondary-blue rounded-lg transition-colors"
              title={isDark ? 'الوضع النهاري' : 'الوضع الليلي'}
            >
              {isDark ? <Sun className="w-5 h-5 text-gold" /> : <Moon className="w-5 h-5 text-gold" />}
            </button>

            {isAuthenticated ? (
              <>
                <NotificationBell />
                <Link to="/wishlist" className="p-2 hover:bg-secondary-blue rounded-lg transition-colors relative">
                  <Heart className="w-5 h-5 text-text-secondary hover:text-gold" />
                </Link>
                <Link to="/cart" className="p-2 hover:bg-secondary-blue rounded-lg transition-colors relative">
                  <ShoppingCart className="w-5 h-5 text-text-secondary hover:text-gold" />
                </Link>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-text-secondary hidden md:block">{profile?.username || user?.email}</span>
                  <div className="w-8 h-8 bg-gold rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-primary-blue" />
                  </div>
                </div>
              </>
            ) : (
              <div className="flex items-center gap-2">
                <Link to="/login" className="btn-secondary text-sm py-1.5 px-4">تسجيل الدخول</Link>
                <Link to="/register" className="btn-primary text-sm py-1.5 px-4">إنشاء حساب</Link>
              </div>
            )}

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 hover:bg-secondary-blue rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Categories */}
      <nav className="hidden lg:block border-t border-secondary-blue">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-1 py-2 overflow-x-auto">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                className="px-4 py-1.5 text-sm text-text-secondary hover:text-gold 
                         hover:bg-secondary-blue rounded-lg transition-all duration-200 whitespace-nowrap"
              >
                {cat.name}
              </Link>
            ))}
            {isSeller && (
              <Link
                to="/seller/dashboard"
                className="px-4 py-1.5 text-sm text-gold hover:bg-secondary-blue 
                         rounded-lg transition-all duration-200 whitespace-nowrap font-bold"
              >
                لوحة البائع
              </Link>
            )}
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-card-blue border-t border-secondary-blue">
          <div className="container mx-auto px-4 py-4 space-y-2">
            {categories.map((cat) => (
              <Link
                key={cat.slug}
                to={`/category/${cat.slug}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-text-secondary hover:text-gold hover:bg-secondary-blue rounded-lg"
              >
                {cat.name}
              </Link>
            ))}
            {isSeller && (
              <Link
                to="/seller/dashboard"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-2 text-gold hover:bg-secondary-blue rounded-lg font-bold"
              >
                لوحة البائع
              </Link>
            )}
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
