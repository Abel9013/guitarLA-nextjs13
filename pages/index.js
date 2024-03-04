import Layout from "../components/layout"
export default function Home() {
  return (
    <>     
      <Layout 
        title={"Nosotros"}
        description='Blog de música, venta de guitarras y más' >
        <h1>Hola Mundo</h1>
      </Layout>
    </>
  )
}

export async function getStaticProps(){
  const urlGuitarras = `${process.env.API_URL}/guitarras?populate=imagen`
  const urlPosts = `${process.env.API_URL}/posts?populate=imagen`
  const [resGuitarras,resPosts] = await Promise.all([
    fetch(urlGuitarras),
    fetch(urlPosts)
  ])
  const [{data:guitarras}, {data:posts}] = await Promise.all([
    resGuitarras.json(),
    resPosts.json()
  ])
  console.log(guitarras);
  console.log(posts);
  return{
    props:{

    }
  }
}