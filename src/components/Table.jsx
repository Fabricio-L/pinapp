import { Link } from 'react-router-dom'
import { IconTrash, IconExternalLink } from '@tabler/icons-react'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase'
import styles from './Table.module.css'

const Table = ({ clients }) => {
  const deleteClient = async id => {
    if (clients.length === 1) return alert('Can not delete last record')
    const client = doc(db, 'clients', id)
    await deleteDoc(client)
    window.location.reload()
  }

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Birth</th>
          <th>Age</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {clients?.map(client => (
          <tr key={client.id}>
            <td>{client.firstName}</td>
            <td>{client.lastName}</td>
            <td>{client.birthDate}</td>
            <td>{client.age}</td>
            <td>
              <button
                className={styles.button}
                onClick={() => deleteClient(client.id)}
              >
                <IconTrash color="#eb4d4d" size={24} />
              </button>
            </td>
            <td>
              <Link to={`/client/${client.id}`}>
                <IconExternalLink color="#c7e800" size={24} />
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table
