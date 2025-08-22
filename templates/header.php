<?php
$site_title = $site_title ?? "AI Agency Blog";
$site_desc  = $site_desc  ?? "Insights on AI, automation, and data-driven growth";
$base_url   = $base_url   ?? ""; // set if your blog is in a subfolder (e.g., '/blog')
$full_title = isset($page_title) && $page_title ? $page_title . " | " . $site_title : $site_title;
$og_image   = $og_image   ?? "";
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?= htmlspecialchars($full_title) ?></title>
<meta name="description" content="<?= htmlspecialchars($site_desc) ?>">
<link rel="alternate" type="application/rss+xml" title="<?= htmlspecialchars($site_title) ?> RSS" href="<?= $base_url ?>/feed.php">
<meta property="og:title" content="<?= htmlspecialchars($full_title) ?>">
<meta property="og:description" content="<?= htmlspecialchars($site_desc) ?>">
<?php if ($og_image): ?><meta property="og:image" content="<?= htmlspecialchars($og_image) ?>"><?php endif; ?>
<link rel="stylesheet" href="<?= $base_url ?>/assets/style.css">
</head>
<body>
<header class="container">
  <a class="brand" href="<?= $base_url ?>/"><?= htmlspecialchars($site_title) ?></a>
  <nav>
    <a href="<?= $base_url ?>/">Home</a>
    <a href="<?= $base_url ?>/feed.php">RSS</a>
  </nav>
</header>
<main class="container">
