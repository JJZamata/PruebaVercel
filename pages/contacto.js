import Head from "next/head";

export default function Contacto() {
  return (
    <>
      <Head>
        <title>Contáctanos | Mi Web Optimizada</title>
        <meta name="description" content="Comunícate con nosotros para más información." />
        <meta property="og:title" content="Contáctanos" />
        <meta property="og:description" content="Encuentra todos nuestros canales de contacto aquí." />
        <meta property="og:image" content="/images/contacto.png" />
      </Head>
      <h1>Página de Contacto</h1>
    </>
  );
}
