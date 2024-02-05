import { Trip } from '../../domain/trip'
import Chip from '../chip/Chip'
import styles from './TripCard.module.css'

interface TripCardProps {
  trip: Trip
}

export default function TripCard({ trip }: TripCardProps) {
  const { title, days, destination, highlights, includes, images, tags } = trip

  return (
    <>
      <article className={styles.cardContainer}>
        <div className={styles.card}>
          <figure>
            <img src={images[0].desktop} />
          </figure>
          <section>
            <div className={styles.details}>
              <header>
                <h1>
                  {title} {days}
                </h1>
                <p className="card-subtitle">{destination}</p>
              </header>
              <main>
                <div className={styles.cardSpecificationsList}>
                  <ul className={styles.list}>
                    {highlights.slice(0, 4).map((h, index) => (
                      <li key={index}>{h.title}</li>
                    ))}
                    {highlights.length > 4 && (
                      <li>+{includes.length - 4} más</li>
                    )}
                  </ul>

                  <ul className={styles.list}>
                    {includes.map((h) => (
                      <li>{h}</li>
                    ))}
                  </ul>
                </div>
              </main>
            </div>
            <aside>
              <div className={styles.priceContainer}>
                <div className={styles.discount}>
                  <span>-40%</span>
                </div>
                <div className={styles.priceDetails}>
                  <div className={styles.originalPrice}>
                    <span>From</span>
                    <span style={{ textDecoration: 'line-through' }}>
                      $6,349
                    </span>
                  </div>
                  <strong>$3,799</strong>
                  <span className={styles.perNight}>Per night: $271</span>
                </div>
              </div>
            </aside>
            <div className={styles.tagListContainer}>
              <ul className={styles.tagList}>
                {tags.map((t) => (
                  <li>
                    <Chip text={t.name} color="rgb(229, 229, 229)" />
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.buttonContainer}>
              <a href="link_to_trip" className="btn-see-trip">
                See trip
              </a>
            </div>
          </section>
        </div>
      </article>
    </>
  )
}
