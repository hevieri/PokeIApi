import styles from './MovesPanel.module.css'

export default function MovesPanel({ moves, type }) {
  return (
    <section className={styles.movesSection}>
      <div className={styles.movesHeader}>
        <span className={styles.subtitle}>Poderes</span>
        <span className={styles.typeLabel}>{type}</span>
      </div>
      <div className={styles.movesGrid}>
        {moves.map((move) => (
          <span key={move} className={styles.moveChip}>
            {move}
          </span>
        ))}
      </div>
    </section>
  )
}
