import { useQuery } from '@tanstack/react-query'
import { Trip } from '../../domain/trip'
import TripCard from '../../components/tripCard/TripCard'
import { TripService } from '../../services/exoticca/Trip'
import styles from './TripList.module.css'
import { useEffect } from 'react'

export default function TripList() {
  const { data, error, isLoading, isError } = useQuery<Trip, Error>({
    queryKey: ['destinations'],
    queryFn: TripService.getTrips
  })

  useEffect(() => {
    console.log('data', data)
  }, [data])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (isError) {
    return <p>Error: {error.message}</p>
  }

  return (
    <div className={styles.tripListContainer}>
      <h1 className={styles.sectionTitle}>
        Our recommendation to visit Botswana and neighboring countries
      </h1>
      <ul className={styles.tripList}>
        {data.featuredMultiMarket.map((f) => (
          <li>
            <TripCard trip={f} />
          </li>
        ))}
      </ul>
      <h1 className={styles.sectionTitle}>
        Multi country vacation packages including Botswana
      </h1>
      <ul className={styles.tripList}>
        {data.multiMarket.map((f) => (
          <li>
            <TripCard trip={f} />
          </li>
        ))}
      </ul>
    </div>
  )
}
