import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-header-blue border-t-2 border-gold mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gold rounded-lg flex items-center justify-center">
                <span className="text-primary-blue font-bold text-xl">س</span>
              </div>
              <span className="text-gold font-bold text-2xl">سوقنا</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              سوق إلكتروني متعدد البائعين يجمع بين البائعين والمشترين في منصة واحدة موثوقة.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold font-bold mb-4">روابط سريعة</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-text-secondary hover:text-gold transition-colors text-sm">الرئيسية</Link></li>
              <li><Link to="/search" className="text-text-secondary hover:text-gold transition-colors text-sm">البحث</Link></li>
              <li><Link to="/about" className="text-text-secondary hover:text-gold transition-colors text-sm">من نحن</Link></li>
              <li><Link to="/contact" className="text-text-secondary hover:text-gold transition-colors text-sm">اتصل بنا</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-gold font-bold mb-4">الأقسام</h3>
            <ul className="space-y-2">
              <li><Link to="/category/electronics" className="text-text-secondary hover:text-gold transition-colors text-sm">الإلكترونيات</Link></li>
              <li><Link to="/category/fashion" className="text-text-secondary hover:text-gold transition-colors text-sm">الأزياء</Link></li>
              <li><Link to="/category/home" className="text-text-secondary hover:text-gold transition-colors text-sm">البيت والمطبخ</Link></li>
              <li><Link to="/category/beauty" className="text-text-secondary hover:text-gold transition-colors text-sm">الجمال</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-gold font-bold mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-text-secondary text-sm">
                <Phone className="w-4 h-4 text-gold" />
                <span>+966 50 000 0000</span>
              </li>
              <li className="flex items-center gap-2 text-text-secondary text-sm">
                <Mail className="w-4 h-4 text-gold" />
                <span>support@souqna.com</span>
              </li>
              <li className="flex items-center gap-2 text-text-secondary text-sm">
                <MapPin className="w-4 h-4 text-gold" />
                <span>المملكة العربية السعودية</span>
              </li>
            </ul>
            <div className="flex items-center gap-3 mt-4">
              <a href="#" className="p-2 bg-secondary-blue rounded-lg hover:bg-gold hover:text-primary-blue transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-secondary-blue rounded-lg hover:bg-gold hover:text-primary-blue transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="p-2 bg-secondary-blue rounded-lg hover:bg-gold hover:text-primary-blue transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-secondary-blue mt-8 pt-8 text-center">
          <p className="text-text-secondary text-sm">
            © 2024 سوقنا - Souqna. جميع الحقوق محفوظة.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
