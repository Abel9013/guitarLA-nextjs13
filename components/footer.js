import Link from "next/link"
import styles from "../styles/footer.module.css"

export default function Footer() {

  return (
    <footer className={styles.footer}>
      <div className={`contenedor ${styles.contenido}`}>
        {/* <nav className={styles.navegacion}> */}
        <nav className={styles.navegacion}>
            <Link className={""} href="/">Inicio</Link>
            <Link className={""} href="/nosotros">Nosotros</Link>
            <Link className={""} href="/tienda">Tienda</Link>
            <Link className={""} href="/blog">Blog</Link>
            <Link className={""} href="/aprendizaje">Aprendizaje</Link>
        </nav>      
        <p className={styles.copyright}>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
