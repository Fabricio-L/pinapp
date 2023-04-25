import { useState, useEffect } from 'react'
import { getDocs } from 'firebase/firestore'

const useClients = clientsRef => {
  const [clients, setClients] = useState([])

  const getClients = async () => {
    try {
      const data = await getDocs(clientsRef)
      const formatData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))

      setClients(formatData)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getClients()
    // eslint-disable-next-line
  }, [])

  return {
    clients,
    getClients,
  }
}

export default useClients
