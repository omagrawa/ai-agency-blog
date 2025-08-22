<?php
require __DIR__ . '/helpers.php';
require __DIR__ . '/Parsedown.php';

$base_url = blog_base_url();
$site_title = "AI Agency Blog";
$site_desc = "Insights, case studies and automation tips from our AI agency.";
$page_title = "Latest Posts";

$posts = read_posts();
include __DIR__ . '/templates/header.php';
?>
<section class="post-list">
  <?php foreach ($posts as $p): ?>
    <article class="card">
      <h2><a href="<?= $base_url . '/' . urlencode($p['slug']) ?>"><?= htmlspecialchars($p['title']) ?></a></h2>
      <div class="meta"><?= date('M d, Y', strtotime($p['date'])) ?></div>
      <?php if ($p['desc']): ?><p><?= htmlspecialchars($p['desc']) ?></p><?php endif; ?>
      <p><a href="<?= $base_url . '/' . urlencode($p['slug']) ?>">Read more →</a></p>
    </article>
  <?php endforeach; ?>
</section>
<?php include __DIR__ . '/templates/footer.php'; ?>
