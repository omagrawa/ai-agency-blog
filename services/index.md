---
layout: page
title: "Services"
description: "What we deliver."
---

<div class="grid">
{% for item in site.services %}
  <article class="card">
    <a href="{{ item.url | relative_url }}" class="card-link">
      <h3 class="card-title">{{ item.title }}</h3>
      <p class="card-excerpt">{{ item.excerpt | strip_html | truncate: 140 }}</p>
    </a>
  </article>
{% endfor %}
</div>
