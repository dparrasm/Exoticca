import './App.css'
import Header from './components/header/Header'
import TripList from './pages/tripList/TripList'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <TripList />
    </QueryClientProvider>
  )
}

export default App
