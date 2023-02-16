---
title: '理解CSS（中） | 青训营笔记'
date: '2023-02-03'
author: 'Sexxion2'
---

# 一、CSS是什么
用来定义页面元素的样式  
设置字体和颜色  
设置位置和大小  
添加动画效果  

## 在页面中使用CSS
外联式  
`<link rel="stylesheet" type="text/css" href="CSS样式文件的路径">
`  
嵌入式
```
<style>
    body{
        margin: 0;
        padding: 0;
    }
</style>
```
内联式  
`<p style="margin:100px 10px">123</p>`  

# 二、CSS基本使用

```
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<style>
		p{
			color:red;
			background: #cccccc;
		}
		h2{
			color:blue;
		}
	</style>
</head>
<body>
	<p>CSS基本使用</p>
	<h2>嵌入式</h2>
</body>
</html>

```
