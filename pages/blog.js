import Layout from "@/components/layout"

export default function blog() {
  return (
    <Layout title={"Blog"} description='Blog de música, venta de guitarras, consejos, GuitarLA'>

        <div>blog</div>
    </Layout>
  )
}



export async function getStaticProps() {
  const respuesta = await fetch(`${process.env.API_URL}/posts?populate=imagen`)
  const {data:posts} = await respuesta.json()
  return {
    props:{
      posts
    }
  }
}


