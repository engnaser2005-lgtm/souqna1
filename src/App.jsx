import { Toaster } from 'react-hot-toast'
import AppRoutes from './routes/AppRoutes'

function App() {
  return (
    <>
      <AppRoutes />
      <Toaster
        position="top-left"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#06264D',
            color: '#fff',
            border: '1px solid #D4AF37',
          },
        }}
      />
    </>
  )
}

export default App
