import { Trip } from '../../domain/trip'

export const TripService = {
  getTrips
}

async function getTrips(): Promise<Trip> {
  const response = await fetch(
    'https://api-us.exoticca.com/api/landing/v2/country/botswana'
  )
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  const data = await response.json()
  return data.destinations
}
