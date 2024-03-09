import Layout from "@/components/layout"

export default function aprendizaje() {
  return (
     <Layout title={"Aprendizaje"} description='Proyecto educativo, aprendizaje del mismo'>
      <div className="contenedor">
        <h3>Algo de lo que aprendi durante este proyecto de CodigoConJuan</h3>
        <ul>
          <li>Importa un componente llamado Head para agregar informacion meta, a diferencia de remix donde exportabamos la funcion de meta.</li>
          <li> NextJS tiene un componente de imagenes para hacerlas mas ligeras y mejorar su performance. Podemos agregar los title de c/pagina mandando la prop title hacia el layout por cada pagina, lo mismo con description.</li>
          <li>A diferencia de remix que hacia falta importar un componente para que haga el refresco, next lo hace automaticamente
          Componente Head para cargar fuentes</li>
          <li> Sistema Basado en rutas de Next JS(nombre de archivos en minusculas, pero en mayusculas la f. y el export ). En Next usamos el componente Link con href dentro, a diferencia de react-router-dom que es que es Link con to.</li>
          <li> Sintaxis hojas de estilo, (header.module.css) y su sintaxis para  className como styles.header, es decir nombre de archivo y clase(nombre obj y key). Los módulos de css tienen el scope donde se estan utilizando</li>
          <li>Routing dinamico, carpeta dentro de pages con nombre de la variable entre corchetes</li>
          <li>Pagina 404 y su personalizacion</li>
          <li>Componente Image, importado de "next/image", el cual requiere un height y width</li>
          <li>Context en next con la funcion de añadir al carrito. En componente _app creo lo que va en el context y lo paso como props de Component y en el componente lo recibo como una prop </li>
          <li>Orden de Imports en el proyecto(forma descendente): imports de React, libreria, componentes, hojas de estilo.</li>
        </ul>
      </div>
    </Layout>
  )
}



