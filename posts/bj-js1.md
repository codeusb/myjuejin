---
title: '理解JavaScript（上） | 青训营笔记'
date: '2023-02-05'
author: 'Sexxion3'
---

# 一、前言
接下来的笔记将针对JS的基础部分进行学习分享

# 二、JavaScript

## 介绍
JavaScript 是一种轻量级的编程语言。

JavaScript 是可插入 HTML 页面的编程代码。

JavaScript 插入 HTML 页面后，可由所有的现代浏览器执行。

### 用法
`<script></script>  `

声明一个js脚本程序  
### 基本知识点

JS常用方法

    parseInt(string,radix)，以radix为基数，返回一个十进制的值
    isNaN()，返回false/true,数字false,非数字true
    number(),返回数字
    string(),返回字符串
    toString() 方法以字符串形式返回布尔值。
        let bool = true;
        bool.toString()    // 返回 "true"

    valueOf() 方法返回布尔值的原始值。
        let bool = false;
        bool.valueOf()    //返回 false

    Boolean(10 > 9)     // 返回 true


BOM模型（浏览器对象模型）

    Window对象
        BOM模型中的history、location、documen对象，实际上都是window窗口对象的属性
        history 	        有关客户访问过的URL的信息
        location	有关当前 URL 的信息
        属性的使用方法是：window.属性名="某个属性值"，例如：window.location.href="www.baidu.com";
        //表示跳转到百度页面
        Window对象的常用方法：
            prompt( )：显示可提示用户输入的对话框
            alert( )：显示带有一个提示信息和一个确定按钮的警示框
            confirm( )：显示一个带有提示信息、确定和取消按钮的对话框
            ｜ confirm("对话框中显示的纯文本")；
            close( )：关闭浏览器窗口
            open( )：打开一个新的浏览器窗口，加载给定 URL 所指定的文档
            ｜ window.open("弹出窗口的url","窗口名称","窗口特征”)
            setTimeout( )：在指定的毫秒数后调用函数或计算表达式
            setInterval( )：按照指定的周期（以毫秒计）来调用函数或表达式

        Window对象的常用事件：
            onload	                一个页面或一幅图像完成加载
            onmouseover	鼠标移到某元素之上
            onclick	                当用户单击某个对象时调用的事件句柄
            onkeydown    某个键盘按键被 按下
            onchange            域的内容被改变

        history对象
            常用方法
                back()	加载 history 对象列表中的前一个URL（后退）
                forward()	加载 history 对象列表中的下一个URL （前进）
                go()    加载 history 对象列表中的某个具体URL