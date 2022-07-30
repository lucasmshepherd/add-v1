import Container from './container.js'

import styles from './footer.module.sass'

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <Container>
          <span className="glitchee">LET ANARCHY REIGN</span>
        </Container>
      </footer>
    </>
  )
}