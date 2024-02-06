import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import TripCard from './TripCard'

const mockTrip = {
  id: '1',
  title: 'Amazing Trip',
  days: 10,
  destination: 'Destination Example',
  highlights: [
    { title: 'Highlight 1' },
    { title: 'Highlight 2' },
    { title: 'Highlight 3' }
  ],
  includes: ['Include 1', 'Include 2'],
  images: ['image_url.jpg'],
  tags: [{ name: 'Tag1' }, { name: 'Tag2' }],
  priceDetails: {
    fromPrice: 3799,
    fromPriceBeautify: '$3,799',
    discountSaved: 2550,
    oldPriceBeautify: '$6,349',
    pricingPercentage: 40,
    pricePerNight: '$271',
    oldPrice: 6349
  }
}

describe('TripCard', () => {
  it('renders TripCard component with provided trip details', () => {
    render(<TripCard trip={mockTrip} />)
    expect(
      screen.getByText(`${mockTrip.title} ${mockTrip.days}`)
    ).toBeInTheDocument()
    expect(screen.getByText(mockTrip.destination)).toBeInTheDocument()
  })
})
