---
title: js测试
date: 2024-10-04 07:14:34
layout: post
published: true
categories:
  - 学习
tags: 
  - js
  - 测试
---

[参考网址: https://hexo.io/zh-cn/docs/](https://hexo.io/zh-cn/docs/)

{% btn url, text, [title] %}

<i class="iconfont icon-github-fill" aria-hidden="true"></i>

<button class="btn" id="btn_click_me">点击</button>


<script>
  console.log('Hello, World!');
  jQuery('#btn_click_me').click(function () {
    alert('Hello, World!');
  });
</script>