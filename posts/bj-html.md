---
title: '前端与 HTML | 青训营笔记'
date: '2023-02-01'
author: 'sexxion1'
---

# 一、什么是前端
解决GUI人机交互问题
## 前端基础
技术栈：HTML,CSS,JavaScript（前端三剑客）

应该关注的方面：美观，安全，功能，兼容，性能，无障碍...

边界：就是由基础的前端语言延伸出去的各种技术框架等等。列如：node，vue，react,wbeGL...

开发环境：浏览器+编译器

# 二、HTML语法
## 基本标签
1，标题标签h1-h6

2，段落标签p

3，换行标签br

4，水平线标签hr

5，图片标签img
`<img src="logo.png" width="258" height="39" />`

6，超文本链接标签a
`链接 <a href="[www.baidu.com](http://www.baidu.com)"></a>`

7，div标签

9，常用的文本标签
-   b 加粗  

-   strong 加粗  

-   big 放大  

-   em 斜体  

-   i 斜体  

-   small 缩小  

-   sub 下标  

-   sup 上标  


## 基本文档结构
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    正文内容
</body>
</html>
```

# 三、语义化的表示

## 什么是语义化
顾名思义，HTML语义化就是可以不通过了解HTML的内容，就可以知道这个部分所代表的的意义。

HTML语义化的意义：在使用HTML标签构建页面时，避免大篇幅的使用无语义的标签。
## 语义化的好处

-   直观的认识标签 对于搜索引擎的抓取有好处，用正确的标签做正确的事情！

-   HTML语义化就是让页面的内容结构化，便于对浏览器、搜索引擎解析；在没有样式CCS情况下也以一种文档格式显示，并且是容易阅读的。
    
-   使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。

## 传达内容，而不是样式
**HTML标签的任务是传递内容，就是要把需求准确的表达出来。用HTML的规范去操作。**

# 四、展示

```
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>简单标签展示</title>   
    </head>
    <body>
        <h1 align="center">一级标题</h1>
        <h2 align="center">二级标题</h2>
        <h3 align="center">三级标题</h3>
        <p align="center">段落</p>
        <a href="https://www.baidu.com/">
            <img src="0.jpg" alt="">
        </a>
    </body>
</html>
```

# 总结
对HTML知识的回顾＋新的理解。对传递内容有了更深的理解