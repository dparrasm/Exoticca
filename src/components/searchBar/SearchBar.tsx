import { useState } from 'react'
import styles from './SearchBar.module.css'

interface SearchBarProps {
  onSearch: (searchTerm: string) => void
}
const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form className={styles.searchForm} onSubmit={handleSubmit}>
      <input
        type="text"
        className={styles.searchInput}
        placeholder="Buscar..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className={styles.searchButton}>
        Buscar
      </button>
    </form>
  )
}

export default SearchBar
