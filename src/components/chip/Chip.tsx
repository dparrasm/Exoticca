import styles from './Chip.module.css'

interface ChipProps {
  text: string
  color: string
}

export default function Chip({ text, color }: ChipProps): JSX.Element {
  const chipStyle = { backgroundColor: color }

  return (
    <button className={styles.chip} style={chipStyle}>
      <div className="chip__text">{text}</div>
    </button>
  )
}
