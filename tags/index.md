---
layout: page
title: "All Tags"
description: "Browse posts by tag."
---

<ul class="tags-list">
{% assign tags = site.tags | sort %}
{% for tag in tags %}
  {% assign name = tag[0] %}
  {% assign posts = tag[1] %}
  <li><a href="{{ '/tags/' | relative_url }}{{ name | slugify }}/">#{{ name }}</a> ({{ posts | size }})</li>
{% endfor %}
</ul>
