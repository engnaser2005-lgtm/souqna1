import { Navigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import toast from 'react-hot-toast'

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const { user, profile, isLoading } = useAuth()

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-primary-blue">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-gold"></div>
      </div>
    )
  }

  if (!user) {
    toast.error('يجب تسجيل الدخول أولاً')
    return <Navigate to="/login" replace />
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(profile?.account_type)) {
    toast.error('ليس لديك صلاحية الوصول لهذه الصفحة')
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
