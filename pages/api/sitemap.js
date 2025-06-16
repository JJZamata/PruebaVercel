const BASE_URL = "https://mi-sitio.com"; // cámbialo por tu dominio real

// Simulando obtención de rutas desde BD/CMS
const obtenerRutas = async () => {
  // Supongamos que esto viene de una base de datos
  return ["/", "/blog", "/contacto"];
};

export default async function handler(req, res) {
  const urls = await obtenerRutas();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map((url) => {
        return `
        <url>
          <loc>${BASE_URL}${url}</loc>
        </url>
      `;
      })
      .join("")}
  </urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();
}
