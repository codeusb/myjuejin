---
title: '理解CSS（上） | 青训营笔记'
date: '2023-02-02'
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

# 三、选择器

-   基础选择器  
    -   标签选择器  
    <!---->

    -   class选择器


    <!---->

    -   id选择器


    <!---->

    -   通用选择器  


-   复刻选择器  


    -   后代选择器  


        -   父类+空格+子类{css控制}  


        <!---->

        -   作用于所有子后代元素  


    <!---->

    -   父子选择器  


        -   父类>子类 实例：.food>li  


        <!---->

        -   仅指父类的直接后代，作用于子元素的第一代后代  


    <!---->

    -   编组选择器  


        -   css选择器1，css选择器2，css选择器3{css样式}  


    <!---->

    -   相邻选择器  


        -   css选择器1+css选择器2{}  


-   伪类选择器  


    -   1.link


    <!---->

    -   2.visited


    <!---->

    -   3.hover


    <!---->

    -   4.active
 
    <!---->

    -   5.等等


# 四、CSS属性

### 4.1字体属性
设置字体相关的样式

  font-size：   大小、尺寸，  可以使用多种单位   
 font-weight：    粗细，   100~900   
 font-family：    字体，   通用字体簇   
  font-style：    样式，    正常，斜体...   
     font：       简写，  简写属性  

### 4.2文本属性
设置文本相关的样式

color：	颜色  
line-height：	行高，	行之间的高度  
text-align：	水平对齐方式，	取值：left、center、right  
vertical-align：	垂直对齐方式，	取值：top、middle、bottom，可以用于图片和文字的对齐方式  
text-indent：	首行缩进  
text-decoration：	文本修饰，	取值：underline、overline、line-through  
text-transform：	字母大小写转换，	取值：lowercase、uppercase、capitalize首字母大写  
letter-spacing：	字符间距  
word-spacing：	单词间距，	只对英文有效  
white-space：	空白的处理方式，	文本超出后是否换行，取值：nowrap...

### 4.3CSS调试
浏览器F12
右边就有关于CSS部分的代码

# 五、总结
CSS决定了页面样式的展现