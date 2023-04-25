import styles from './Stats.module.css'

const Stats = ({ clients }) => {
  const standardDeviation = data => {
    const n = data.length
    const mean = data.reduce((acc, val) => acc + val.age, 0) / n
    const variance =
      data.reduce((acc, val) => acc + Math.pow(val.age - mean, 2), 0) / (n - 1)

    const stdDeviation = Math.sqrt(variance)

    return stdDeviation
  }

  return (
    <div className={styles.container}>
      {clients && <h2>Standard Deviation: {standardDeviation(clients)}</h2>}
    </div>
  )
}

export default Stats
