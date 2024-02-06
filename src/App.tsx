import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import TripList from './pages/tripList/TripList'
import Layout from './components/layout/Layout'
import SearchResults from './pages/searchResults/searchResults'

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<TripList />} />
            <Route path="/search/*" element={<SearchResults />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  )
}

export default App
