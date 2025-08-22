---
layout: page
title: "Blog"
description: "Latest posts and insights."
---

<div class="grid">
{% for post in site.posts %}
  {% include post-card.html %}
{% endfor %}
</div>
