const fs = require("fs");
const path = require("path");
const glob = require("glob");
const matter = require("gray-matter");
const RSS = require("rss");

const SITE_URL = "https://blog.smsidea.in";
const FEED_URL = `${SITE_URL}/rss.xml`;

const postsDir = path.join(__dirname, "../src/content/posts");
const files = glob.sync("*.md", { cwd: postsDir });

const posts = files
  .map((file) => {
    const filePath = path.join(postsDir, file);
    const content = fs.readFileSync(filePath, "utf8");
    const { data, content: body } = matter(content);
    const slug = file.replace(/^\d{4}-\d{2}-\d{2}-/, "").replace(/\.md$/, "");
    return {
      ...data,
      slug,
      url: `${SITE_URL}/${slug}`,
      body,
    };
  })
  .filter((p) => p.date)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const feed = new RSS({
  title: "AI Agency Blog",
  description: "Insights, guides, and news from the AI Agency team.",
  feed_url: FEED_URL,
  site_url: SITE_URL,
  image_url: `${SITE_URL}/images/og-blog.png`,
  language: "en",
});

posts.forEach((post) => {
  feed.item({
    title: post.title,
    description: post.excerpt,
    url: post.url,
    guid: post.url,
    date: post.date,
    author: post.author,
    enclosure: post.image
      ? { url: post.image }
      : { url: `${SITE_URL}/images/og-blog.png` },
  });
});

fs.writeFileSync(
  path.join(__dirname, "../public/rss.xml"),
  feed.xml({ indent: true })
);
console.log("✅ RSS feed generated: public/rss.xml");