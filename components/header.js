import Link from 'next/link';
import styles from "./header.module.scss";
import Themetoggle from './themetoggle';

//一级导航栏
export default function Header() {
  return(
    <header className={styles.header}>
      <div className={styles.headernav}>
        <div className={styles.headericon}>
          <Link href="/">
            <img src="/images/jjlogo.png" alt=""/>
            <p className={styles.headericontext}>稀土掘金</p>
          </Link>     
        </div>
        <ul className={styles.navUl}>
          <li className={`${styles.navitem} ${styles.navitem1}`}>
            <Link href="/">
              <p>首页</p>
            </Link>        
          </li>
          <li className={styles.navitem}>          
              <p>沸点</p>       
          </li>
          <li className={styles.navitem}>
            <p>课程</p>       
          </li>
          <li className={styles.navitem}>
            <p>直播</p>       
          </li>
          <li className={styles.navitem}>
            <p>活动</p>  
          </li>
          <li className={styles.navitem}>
            <p>竞赛</p>     
          </li>
          <li className={styles.navitem}>
            <p>商城</p>       
          </li>
        </ul>
        <Themetoggle />
      </div>
      
    </header>
  )
}