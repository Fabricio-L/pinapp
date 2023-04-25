import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getDoc, doc } from 'firebase/firestore'
import { db } from '../../config/firebase'
import styles from './Client.module.css'

const Client = () => {
  const { id } = useParams()
  const [client, setClient] = useState(null)

  const getClient = async id => {
    const clientRef = doc(db, 'clients', id)
    const docSnapshot = await getDoc(clientRef)
    setClient(docSnapshot.data())
  }

  function lifeExpectancy(age) {
    const lifeExpectancy = 80 // Esperanza de vida promedio en años

    if (age >= lifeExpectancy) {
      return 0
    } else {
      return lifeExpectancy - age
    }
  }

  useEffect(() => {
    getClient(id)
    // eslint-disable-next-line
  }, [])

  return (
    <div className={styles.card}>
      {client && (
        <>
          <h1>Client</h1>
          <h2>First Name: {client.firstName}</h2>
          <h2>Last Name: {client.lastName}</h2>
          <h2>Brith: {client.birthDate}</h2>
          <h2>Age: {client.age}</h2>
          <h2>Life Expectancy: {lifeExpectancy(client.age)}</h2>
        </>
      )}
    </div>
  )
}

export default Client
