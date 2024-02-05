import SearchBar from '../searchBar/SearchBar'
import styles from './Header.module.css'

export default function Header() {
  const handleSearch = (searchTerm: string) => {
    console.log(searchTerm)
  }
  return (
    <header className={styles.header}>
      <SearchBar onSearch={handleSearch} />
    </header>
  )
}
