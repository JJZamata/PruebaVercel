import Head from "next/head";

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog de Optimización Web | Next.js SEO</title>
        <meta name="description" content="Lee artículos sobre SEO y rendimiento web usando Next.js." />
        <meta property="og:title" content="Blog de Optimización Web" />
        <meta property="og:description" content="Aprende estrategias de optimización y mejores prácticas." />
        <meta property="og:image" content="/images/blog-cover.png" />
      </Head>
      <h1>Blog</h1>
    </>
  );
}
