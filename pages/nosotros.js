import Image from "next/image"
import Layout from "@/components/layout"
import styles from "../styles/nosotros.module.css"

function Nosotros() {
  return (
    <>
        <Layout title="nosotros" description='Sobre nosotros, GuitarLA, tienda de música'>
          <main className="contenedor">
            <h1 className="heading">Nosotros</h1>
            <div className={styles.contenido}>
              <Image src="/img/nosotros.jpg" width={1000} height={800} alt="Imagen sobre nosotros" />
              <div>
                  <p>
                Bienvenidos a GuitarLA, una empresa dedicada a proveer a nuestros clientes las mejores guitarras eléctricas del mercado. Desde nuestros inicios, nuestro objetivo ha sido brindar instrumentos de alta calidad y el mejor servicio al cliente.
                </p>
                <p>
                Nuestro compromiso con la excelencia no se limita a nuestros productos. En GuitarLA, entendemos la importancia de un servicio al cliente excepcional, y nuestro equipo de expertos está siempre a disposición para ayudar en cualquier consulta que pueda tener. Nos aseguramos de que cada cliente se sienta apoyado y cuidado durante todo el proceso de compra.
                </p>
                <p>
                En resumen, en GuitarLA estamos comprometidos con proporcionar a nuestros clientes las mejores guitarras eléctricas del mercado, junto con un servicio al cliente excepcional. No dude en contactarnos para obtener más información o para programar una visita a nuestra tienda. ¡Esperamos ser su tienda de música de confianza!  
                </p>
              </div>
            </div>
          </main>
        </Layout>

    </>
    
  )
}

export default Nosotros