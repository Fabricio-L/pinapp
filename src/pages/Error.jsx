import { useRouteError } from 'react-router-dom'
import styles from './Error.module.css'

const Error = () => {
  const error = useRouteError()

  return (
    <div className={styles.message}>
      <h1>Oops!</h1>
      <p>{error.status}</p>
      <p>{error.statusText}</p>
      <p>{error.error.message}</p>
    </div>
  )
}

export default Error
