import { Trip } from '../domain/trip'

export const searchTripsByTitle = (
  data: Trip[],
  searchTerm: string
): Trip[] => {
  if (!data) return []
  return data.filter((trip: Trip) =>
    trip.title.toLowerCase().includes(searchTerm.toLowerCase())
  )
}
