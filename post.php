<?php
require __DIR__ . '/helpers.php';
require __DIR__ . '/Parsedown.php';

$base_url = blog_base_url();

$slug = $_GET['slug'] ?? '';
$posts = read_posts();
$post = null;
foreach ($posts as $p) { if ($p['slug'] === $slug) { $post = $p; break; } }
if (!$post) { http_response_code(404); echo "Post not found"; exit; }

$Parsedown = new Parsedown();
$site_title = "AI Agency Blog";
$site_desc = $post['desc'] ?: "A post from our AI agency blog.";
$page_title = $post['title'];

include __DIR__ . '/templates/header.php';
?>
<article class="post-content">
  <h1><?= htmlspecialchars($post['title']) ?></h1>
  <div class="meta"><?= date('M d, Y', strtotime($post['date'])) ?></div>
  <hr>
  <?= $Parsedown->text($post['body']) ?>
</article>
<?php include __DIR__ . '/templates/footer.php'; ?>
