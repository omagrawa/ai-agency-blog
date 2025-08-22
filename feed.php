<?php
require __DIR__ . '/helpers.php';

$base_url = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' ? 'https://' : 'http://') . ($_SERVER['HTTP_HOST'] ?? '') . blog_base_url();
$posts = read_posts(20);

header('Content-Type: application/rss+xml; charset=utf-8');
echo '<?xml version="1.0" encoding="UTF-8"?>';
?>
<rss version="2.0">
  <channel>
    <title>AI Agency Blog</title>
    <link><?= htmlspecialchars($base_url) ?></link>
    <description>Insights and updates from our AI agency</description>
    <language>en-us</language>
    <?php foreach ($posts as $p): ?>
    <item>
      <title><?= htmlspecialchars($p['title']) ?></title>
      <link><?= htmlspecialchars($base_url . '/' . urlencode($p['slug'])) ?></link>
      <guid><?= htmlspecialchars($base_url . '/' . urlencode($p['slug'])) ?></guid>
      <pubDate><?= date(DATE_RSS, strtotime($p['date'])) ?></pubDate>
      <?php if (!empty($p['desc'])): ?><description><?= htmlspecialchars($p['desc']) ?></description><?php endif; ?>
    </item>
    <?php endforeach; ?>
  </channel>
</rss>
