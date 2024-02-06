import { useQueryClient } from '@tanstack/react-query'
import TripCard from '../../components/tripCard/TripCard'
import { Trip } from '../../domain/trip'
import styles from './SearchResults.module.css'
import { useLocation } from 'react-router-dom'

export default function SearchResults() {
  const location = useLocation()
  const queryClient = useQueryClient()
  const searchResults: Trip[] | undefined = queryClient.getQueryData([
    'searchResults'
  ])

  return (
    <div key={location.pathname} className={styles.tripListContainer}>
      <ul className={styles.tripList}>
        {searchResults?.map((f) => (
          <li>
            <TripCard trip={f} />
          </li>
        ))}
      </ul>
    </div>
  )
}
