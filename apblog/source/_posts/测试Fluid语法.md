---
title: 测试Fluid语法
mermaid: true
tags: Fluid
categories: 技术
permalink: /posts/test-fluid.html
abbrlink: 63202
date: 2024-10-02 16:41:50
---



[参考链接: https://hexo.fluid-dev.com/docs/guide/#tag-插件](https://hexo.fluid-dev.com/docs/guide/#tag-%E6%8F%92%E4%BB%B6)


勾选框
在 markdown 中加入如下的代码来使用 Checkbox：

```markdown
{% cb text, checked?, incline? %}
```


{% cb text, checked?, incline? %}

按钮
你可以在 markdown 中加入如下的代码来使用 Button：

```markdown
{% btn url, text, title %}
```

{% btn url, text, title %}

或者使用 HTML 形式：


```html
<a class="btn" href="url" title="title">text</a>
```
<a class="btn" href="url" title="title">text</a>

使用 Mermaid 可以通过内置的 Tag 书写：

```mermaid
graph LR
    A[开始] --> B[中间步骤]
    B --> C[结束]
```