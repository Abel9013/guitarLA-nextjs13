import Layout from "@/components/layout"
import Guitarra from "@/components/guitarra"
import styles from "../styles/grid.module.css"

export default function Tienda({guitarras}) {
  return (
    <Layout title={"Tienda virtual"} description='Tienda virtual, venta de guitarras, accesorios, instrumentos, GuitarLA, tienda de música'>
      <main className={`contenedor`}>
        <h1 className="heading">Nuestra coleccion</h1>
        <div className={styles.grid}>
          {guitarras?.map(guitarra => (<Guitarra guitarra={guitarra.attributes} key={guitarra.id} /> ))}
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
  const {data:guitarras} = await respuesta.json()
  return {
    props:{
      guitarras
    }
  }
}




// export async function getStaticProps() {
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)
//   const {data:guitarras} = await respuesta.json()
//   return {
//     props:{
//       guitarras
//     }
//   }
// }




