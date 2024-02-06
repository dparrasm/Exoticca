import { Outlet } from 'react-router-dom'
import Header from '../header/Header'

export default function Layout() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Header />
      <Outlet />
    </div>
  )
}
