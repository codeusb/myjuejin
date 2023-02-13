---
title: '理解JavaScript（下） | 青训营笔记'
date: '2023-02-09'
author: 'sexxion3'
---

# 一、前言
本篇将对《JavaScript高级程序设计》中第五章的内容做一个整理。
# 二、基本引用类型
引用值（或者对象）是某个特定引用的实例

创建方式：

    对象被认为是某个特定引用类型的实例，新对象通过使用new操作符后跟一个构造函数来创建
    `let now = new Data()`

Date类型

    创建日期对象
        let now = new Data()
        不给参数
            创建的对象保存当前日期和时间

        Date.parse()
            接收一个表示日期的字符串参数
            let now = new Data(Date.parse("May 23, 2019"));

        Date.UTC()
            返回日期的毫秒表示
            let now = new Data(Date.UTC(2000,0));
            注意：这里的0表示1月。月数是0开始点的


    继承的方式
        重写了以下方法
            toLocaleString()  返回本地的日期和时间
            toString()  返回带时区信息的日期和时间
            valueOf() 返回日期的毫秒显示



RegExp类型

    支持正则表达式
    let expression = /pattern/flags; 使用字面量创建
        这个正则表达式的pattern（模式）可以是任何正则表达式
        列：let p = /at/g; 匹配字符串中所有“at”

    RegExp实例方法：exec()

原始值包装类型

    Boolean、Number、String
        例子：let booleanObject = new Boolean(true);
        重写了valueof()、toString()等方法

    字符串操作方法
        concat()
            用于将一个或者多个字符串拼接起来
            例子
            ｜ stringValue.concat(“world”)

        基于子字符串创建新字符串（提取子串）
            slice(  )
                第一个参数是开始位置，第二个参数是结束的位置（可选），
                如果参数啥负值，就用长度和它相加的值，返回的字符串不包括结束位置

            substr(  )
                不建议使用

            substring(  )
                第一个参数是开始位置，第二个参数是字符串长度（可选），如果传入负值，就相当于 0



    字符串位置方法
        indexof()
        lastIndex（）


单列内置对象
    Global
        eval（）方法

    Math
    min（）和max（）
    random()