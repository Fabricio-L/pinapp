import { useState, useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { addDoc, getDocs, collection } from 'firebase/firestore'
import { clientSchema } from '../../schemas'
import { db } from '../../config/firebase'
import { differenceInYears } from 'date-fns'
import styles from './FormClient.module.css'
import Table from '../../components/Table'
import Stats from '../../components/Stats'

const Error = ({ children }) => {
  return <p className={styles.error}>{children}</p>
}

const getAge = birth => {
  var today = new Date()
  var age = differenceInYears(today, new Date(birth))
  return age
}

const FormClient = () => {
  const [clients, setClients] = useState([])
  const clientsRef = collection(db, 'clients')

  const addClient = async values => {
    await addDoc(clientsRef, values)
  }

  const getClients = async () => {
    try {
      const data = await getDocs(clientsRef)
      const formatData = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))

      setClients(formatData)
    } catch (error) {
      console.error(error)
    }
  }

  const onSubmit = (values, actions) => {
    values.age = getAge(values.birthDate)

    addClient(values)
    actions.resetForm()
    getClients()
  }

  useEffect(() => {
    getClients()
    // eslint-disable-next-line
  }, [])

  return (
    <main className={styles.main}>
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          birthDate: '',
          age: 1,
        }}
        validationSchema={clientSchema}
        onSubmit={onSubmit}
      >
        {({ errors }) => (
          <Form className={styles.form}>
            <label className={styles.label} htmlFor="firstName">
              First Name
            </label>
            <Field
              className={styles.field}
              id="firstName"
              name="firstName"
              placeholder="First Name"
            />
            <ErrorMessage component={Error} name="firstName" />

            <label className={styles.label} htmlFor="lastName">
              Last Name
            </label>
            <Field
              className={styles.field}
              id="lastName"
              name="lastName"
              placeholder="Last Name"
            />
            <ErrorMessage component={Error} name="lastName" />

            <label className={styles.label} htmlFor="birthDate">
              Bith Date
            </label>
            <Field
              className={styles.field}
              id="birthDate"
              name="birthDate"
              placeholder="Date"
              type="date"
            />
            <ErrorMessage component={Error} name="birthDate" />

            <button className={styles.submit} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>

      <section className={styles.container}>
        <Table clients={clients} />
        <Stats clients={clients} />
      </section>
    </main>
  )
}

export default FormClient
