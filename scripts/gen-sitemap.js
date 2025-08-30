const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");

const SITE_URL = "https://blog.smsidea.in";

const postsDir = path.join(__dirname, "../src/content/posts");
const files = glob.sync("*.md", { cwd: postsDir });

const urls = [];

files.forEach((file) => {
  const filePath = path.join(postsDir, file);
  const content = fs.readFileSync(filePath, "utf8");
  const { data } = matter(content);

  // Remove YYYY-MM-DD- prefix from filename for slug
  const slug = file.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
  urls.push({
    loc: `${SITE_URL}/${slug}`,
    lastmod: data.date ? new Date(data.date).toISOString().split("T")[0] : "",
  });
});

// Add homepage
urls.unshift({
  loc: `${SITE_URL}/`,
  lastmod: new Date().toISOString().split("T")[0],
});

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `<url>
  <loc>${u.loc}</loc>
  <lastmod>${u.lastmod}</lastmod>
</url>`
  )
  .join("\n")}
</urlset>
`;

fs.writeFileSync(path.join(__dirname, "../public/sitemap.xml"), xml.trim() + "\n");
console.log("✅ Sitemap generated: public/sitemap.xml");