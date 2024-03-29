import Guitarra from "@/components/guitarra";
import Curso from "@/components/curso";
import Post from "@/components/post";
import Layout from "../components/layout"
import styles from "../styles/grid.module.css"

export default function Home({guitarras,posts,curso}) {
  return (
    <>     
      <Layout 
        title={"Nosotros"}
        description='Blog de música, venta de guitarras y más' >
      <main className="contendor">
        <h1 className="heading">Nuestra Coleccion</h1>
        <div className={styles.grid}>
          {guitarras?.map(guitarra => (<Guitarra guitarra={guitarra.attributes} key={guitarra.id} /> ))}
        </div>
      </main>

      <Curso curso={curso} />

      <section className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.grid}>
            {posts?.map( post => (<Post key={post.id} post={post.attributes} />))}
        </div>
      </section>
      </Layout>
    </>
  )
}

export async function getStaticProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const urlCurso = `${process.env.API_URL}/curso?populate=imagen`
  const [resGuitarras,resPosts, resCurso] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts),
    fetch(urlCurso)
  ])
  const [{data:guitarras}, {data:posts}, {data:curso}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json(),
    resCurso.json()
  ])

  return{
    props:{
      guitarras,
      posts,
      curso
    }
  }
}