import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

//获取posts文件夹路径
const postsDirectory = path.join(process.cwd(), 'posts') 

export function getSortedPostsData() {
    //获取所有md文件名
    const fileNames = fs.readdirSync(postsDirectory) 
    const allPostsData = fileNames.map(fileName => {
      //获取id名
      const id = fileName.replace(/\.md$/, '')

      //读取md文件
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8') 

      //用gray-matter解析markdwon的元数据
      const matterResult = matter(fileContents)

      //合并返回
      return {
        id,
        ...matterResult.data
      }
  })
  
  //文件按日期排序，最新的排在前面
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

//动态路由
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

//获取不同id的md文件的各项数据
export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  //解析
  const matterResult = matter(fileContents)

  //用remark把markdown转为html
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}