import { useQueryClient } from '@tanstack/react-query'
import SearchBar from '../searchBar/SearchBar'
import styles from './Header.module.css'
import { searchTripsByTitle } from '../../application/searchTripsByTitle'
import { useLocation, useNavigate } from 'react-router-dom'

export default function Header() {
  const queryClient = useQueryClient()
  const data = queryClient.getQueryData(['destinations']) || {}
  const location = useLocation()
  const navigate = useNavigate()

  const handleSearch = (searchTerm: string) => {
    const flatMap = Object.values(data).flatMap((item) => item)
    const trips = searchTripsByTitle(flatMap, searchTerm)
    queryClient.setQueryData(['searchResults'], trips)
    console.log(trips)
    console.log(location)
    navigate(`/search/${searchTerm || location.search}`)
  }
  return (
    <header className={styles.header}>
      <SearchBar onSearch={handleSearch} />
    </header>
  )
}
