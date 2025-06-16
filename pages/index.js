import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Inicio | Mi Web Optimizada</title>
        <meta name="description" content="Página principal de mi sitio optimizado con Next.js." />
        <meta property="og:title" content="Inicio | Mi Web Optimizada" />
        <meta property="og:description" content="Descubre cómo mejorar tu web con SEO moderno." />
        <meta property="og:image" content="/images/seo-image.png" />
      </Head>
      <h1>Bienvenido al Inicio</h1>
    </>
  );
}
