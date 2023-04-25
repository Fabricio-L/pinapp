import { Link, Outlet } from 'react-router-dom'
import { IconUsers } from '@tabler/icons-react'
import Layout from './components/Layout'
import styles from './App.module.css'

function App() {
  return (
    <div className={styles.App}>
      <header className={styles.AppHeader}>
        <Link className={styles.link} to={`/`}>
          <IconUsers color="white" />
          <h3>Clients</h3>
        </Link>
      </header>
      <Layout>
        <Outlet />
      </Layout>
    </div>
  )
}

export default App
