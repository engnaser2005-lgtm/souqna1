import { useState, useRef, useEffect } from 'react'
import { Bell } from 'lucide-react'
import { useNotifications } from '../../contexts/NotificationContext'
import { Link } from 'react-router-dom'

const NotificationBell = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { notifications, unreadCount, markAsRead, markAllAsRead } = useNotifications()
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const recentNotifications = notifications.slice(0, 5)

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 hover:bg-secondary-blue rounded-lg transition-colors relative"
      >
        <Bell className="w-5 h-5 text-text-secondary hover:text-gold" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-danger text-white text-xs 
                         w-5 h-5 rounded-full flex items-center justify-center font-bold animate-pulse">
            {unreadCount > 9 ? '9+' : unreadCount}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-2 w-80 bg-card-blue border border-gold 
                      rounded-xl shadow-2xl z-50 overflow-hidden">
          <div className="p-3 border-b border-secondary-blue flex items-center justify-between">
            <h3 className="font-bold text-gold">الإشعارات</h3>
            {unreadCount > 0 && (
              <button
                onClick={markAllAsRead}
                className="text-xs text-text-secondary hover:text-gold transition-colors"
              >
                تعليم الكل كمقروء
              </button>
            )}
          </div>
          
          <div className="max-h-80 overflow-y-auto">
            {recentNotifications.length === 0 ? (
              <div className="p-4 text-center text-text-secondary text-sm">
                لا توجد إشعارات
              </div>
            ) : (
              recentNotifications.map((notification) => (
                <div
                  key={notification.id}
                  onClick={() => {
                    markAsRead(notification.id)
                    setIsOpen(false)
                  }}
                  className={`p-3 border-b border-secondary-blue cursor-pointer hover:bg-secondary-blue transition-colors ${
                    !notification.is_read ? 'bg-secondary-blue/50' : ''
                  }`}
                >
                  <Link to={notification.link || '#'}>
                    <p className="text-sm text-white mb-1">{notification.title}</p>
                    <p className="text-xs text-text-secondary">{notification.message}</p>
                    <p className="text-xs text-gold mt-1">
                      {new Date(notification.created_at).toLocaleDateString('ar-SA')}
                    </p>
                  </Link>
                </div>
              ))
            )}
          </div>
          
          {notifications.length > 5 && (
            <div className="p-2 border-t border-secondary-blue text-center">
              <Link to="/notifications" className="text-sm text-gold hover:underline">
                عرض الكل
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export default NotificationBell
