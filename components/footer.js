import Link from "next/link"
import { useRouter } from "next/router"

export default function Footer() {
  const router = useRouter()

  return (
    <footer>
      <div className="contenedor">
        {/* <nav className={styles.navegacion}> */}
        <nav>
            <Link className={""} href="/">Inicio</Link>
            <Link className={""} href="/nosotros">Nosotros</Link>
            <Link className={""} href="/tienda">Tienda</Link>
            <Link className={""} href="/blog">Blog</Link>
            <Link className={""} href="/aprendizaje">Aprendizaje</Link>
        </nav>      
        <p>Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
