---
layout: archive
permalink: "/blog/"
title: "Blog"
author_profile: true
---

<ul>
  {% for post in site.posts %}
    {% include archive-single.html %}
  {% endfor %}
</ul>
