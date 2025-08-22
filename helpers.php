<?php
function blog_base_url() {
  $script = $_SERVER['SCRIPT_NAME'] ?? '';
  $dir = rtrim(str_replace('\\', '/', dirname($script)), '/');
  return $dir === '/' ? '' : $dir;
}

function read_posts($limit = 1000) {
  $posts_dir = __DIR__ . '/posts';
  $files = glob($posts_dir . '/*.md');
  $posts = [];
  foreach ($files as $file) {
    $raw = file_get_contents($file);
    [$meta, $body] = parse_front_matter($raw);
    if (!isset($meta['title']) || !isset($meta['date'])) continue;
    $slug = $meta['slug'] ?? slugify(basename($file, '.md'));
    $posts[] = [
      'title' => $meta['title'],
      'date' => $meta['date'],
      'desc' => $meta['description'] ?? '',
      'slug' => $slug,
      'body' => $body,
      'file' => $file
    ];
  }
  usort($posts, function($a,$b){ return strtotime($b['date']) <=> strtotime($a['date']); });
  return array_slice($posts, 0, $limit);
}

function parse_front_matter($text) {
  $lines = preg_split("/\\r?\\n/", $text);
  $meta = []; $bodyLines = []; $inMeta = true;
  foreach ($lines as $line) {
    if ($inMeta && trim($line) === '') { $inMeta = false; continue; }
    if ($inMeta) {
      if (preg_match('/^(title|date|slug|description):\\s*(.+)$/i', $line, $m)) {
        $meta[strtolower($m[1])] = trim($m[2]);
      }
    } else {
      $bodyLines[] = $line;
    }
  }
  return [$meta, implode("\\n", $bodyLines)];
}

function slugify($text){
  $text = strtolower(trim($text));
  $text = preg_replace('/[^a-z0-9]+/','-',$text);
  return trim($text,'-');
}
