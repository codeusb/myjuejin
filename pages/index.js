import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import Date from '../components/date'
import utilStyles from '../styles/utils.module.scss'
import { getSortedPostsData } from '../lib/post'
import Navx from '../components/nav'
import SideLeft from '../components/sideleft'

export default function Home({allPostsData}) {
  return (
      <>
        <Head>
          <title>仿稀土掘金</title>
          <meta name="description" content="一个仿照掘金的界面"></meta>
        </Head>
        <Layout home>
          <Navx></Navx>  
          <div className={utilStyles.mainbox}>
            
            <nav className={utilStyles.navBox2}>
              <ul className={utilStyles.navBox2Ul}>
                <li className={`${utilStyles.navItem2} ${utilStyles.navItem21}`}>推荐</li>
                <li className={utilStyles.navItem2}>最新</li>
                <li className={utilStyles.navItem2}>热榜</li>
              </ul>
            </nav>
            
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
              <ul className={utilStyles.list}>
                {allPostsData?.map(({ id, date, title,author }) => (
                  <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>
                      <p className={utilStyles.listAuthor}>{author}</p>
                      <p className={utilStyles.listTitle}>{title}</p>
                      <p className={utilStyles.listAbstract}>文章内容摘要. . .</p>
                      <small className={utilStyles.lightText}>
                        <Date dateString={date} />
                      </small>
                    </Link>               
                  </li>
                ))}
              </ul>
            </section>
            <SideLeft></SideLeft>
          </div>    
        </Layout>
      </>
  );
}

//服务端渲染
export async function getServerSideProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}