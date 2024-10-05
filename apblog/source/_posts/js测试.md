---
title: js测试
layout: post
published: true
categories:
  - 学习
tags:
  - js
  - 测试
permalink: /posts/js-test.html
abbrlink: 842
date: 2024-10-04 07:14:34
---

[参考网址: https://hexo.io/zh-cn/docs/](https://hexo.io/zh-cn/docs/)

### tag 标签 按钮

```
{% btn #, text, [title] %}
```
{% btn #, text, [title] %}


### html 按钮

```html

<button class="btn" id="btn_click_me"><i class="iconfont icon-github-fill" aria-hidden="true"></i>点击</button>
<script>
    console.log('Hello, World!');
    jQuery('#btn_click_me').click(function () {
        alert('Hello, World!');
    });
</script>
```

<button class="btn" id="btn_click_me"><i class="iconfont icon-github-fill" aria-hidden="true"></i>点击</button>
<script>
  console.log('Hello, World!');
  jQuery('#btn_click_me').click(function () {
    alert('Hello, World!');
  });
</script>

### banner 展示

* 默认大图
  ![](/img/default_2024.jpg)

* 默认文章缩略图
  ![默认文章缩略图](/img/default_index_img.jpg)

* 文章缩略图 01-女生
  ![女生](/img/default_index_img_2.jpg)

* 文章缩略图 02-金毛
  ![金毛](/img/default_index_img_3.jpg)


* 自定义图片 01
  ![女王](/img/img_01.png)

* 自定义图片 02
  ![办公室](/picture/img_02.png)



### 测试 ejs 语法

{% note warning %}
  注意：这是一个Markdown文件，不是ejs文件，所以这里的 ejs 语法不会被解析。
{% endnote %}


```javascript
<% if (typeof page !== 'undefined') { %>
  <span><%= page.title %></span>
<% } else { %>
  <span>没有找到 page 对象</span>
<% } %>
```

<% if (typeof page !== 'undefined') { %>
  <span><%= page.title %></span>
<% } else { %>
  <span>没有找到 page 对象</span>
<% } %>
