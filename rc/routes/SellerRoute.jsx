import ProtectedRoute from './ProtectedRoute'

const SellerRoute = ({ children }) => {
  return (
    <ProtectedRoute allowedRoles={['seller', 'admin']}>
      {children}
    </ProtectedRoute>
  )
}

export default SellerRoute
