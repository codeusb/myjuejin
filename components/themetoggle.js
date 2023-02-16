import React from 'react';
import styles from './themetoggle.module.scss';
//主题化切换
export default function Themetoggle() {
  const
    toggleStore = 'themeToggle',               //声明一个变量toggleStore 用于之后浏览器缓存的密钥名（key的值)
    [theme, setTheme] = React.useState(null);  //注册 状态theme，和setTheme，theme的初始值是null（服务端没有window对象，所以赋null）；

  React.useEffect(() => {  //副作用函数：改变body的主题样式。

    if (!theme) { //服务端的问题（theme的初始值是null进入这个函数——更新state的值）；这里的目的就是拿到一个有意义的theme值，首先看本地存储里的值有没有，或者js媒体查询当前是否为暗黑模式是就赋值dark
      setTheme(
        localStorage.getItem(toggleStore) ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
        //localStorage.getItem(key):获取指定key本地存储的值 (dark || light)
        //window.matchMedia('(prefers-color-scheme: dark)').matches  js查询当前是否为暗黑模式
      );
    }

    if (theme) { //theme有值（因为state的值在上次改变，重新创建useeffect） dark或者light，改变样式，并且把theme的值存储到浏览器缓存
      const body = document.body;
      body.classList.remove('dark', 'light');
      body.classList.add(theme);              
      localStorage.setItem(toggleStore, theme);
      //localStorage.setItem(key,value)：将value存储到key字段（存在浏览器缓存里）； // 获取指定value 存储到key 字段

    }
  }, [theme])

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} //给button绑定点击事件，修改theme的状态函数（点击事件的处理函数）
      className={ styles.themetoggle + ' ' + styles[theme] }
      title="switch theme"
    />
  );
}