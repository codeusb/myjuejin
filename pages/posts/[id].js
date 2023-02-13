import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/post'
import Head from 'next/head'
import Date from '../../components/date'
import TextSide from '../../components/textside'
import articleStyles from '../../styles/article.module.scss'

export default function Post({ postData }) {
  // const router = useRouter();
  // const { id } = router.query;
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <div className={articleStyles.mainbox}>
        <TextSide>
          <div className={articleStyles.authorbox}>      
            <p>{postData.title}</p>
            <p>{postData.author}</p>
            <Date dateString={postData.date} />
          </div>
        </TextSide>
        <article className={articleStyles.headingArticle}>
          <h1 className={articleStyles.headingXl}>{postData.title}</h1>
          <div className={articleStyles.lightText}>
            <Date dateString={postData.date} />
          </div>
          <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          
        </article>
      </div>
      
    </Layout>
  )
}

// export async function getStaticPaths() {
//   const paths = getAllPostIds()
//   return {
//     paths,
//     fallback: false
//   }
// }

// export async function getStaticProps({ params }) {
//   const postData = await getPostData(params.id)
//   return {
//     props: {
//       postData
//     }
//   }
// }

export async function getServerSideProps({ params }) {
  const { id } = getAllPostIds()
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}