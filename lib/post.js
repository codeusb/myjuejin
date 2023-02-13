import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'

//获取 node.js流程的当前工作目录 下的 posts路径
const postsDirectory = path.join(process.cwd(), 'posts') 

export function getSortedPostsData() {
    // Get file names under /posts 在/posts下获取文件名
    const fileNames = fs.readdirSync(postsDirectory) //返回post文件下的所有文件名（即所有md文件，例如bj-css1.md），一个数组
    const allPostsData = fileNames.map(fileName => {
      // Remove ".md" from file name to get id 从文件名中删除“.md”以获取id（例如：bj-css1）
      const id = fileName.replace(/\.md$/, '')

      // Read markdown file as string  以字符串的形式读取md文件
      const fullPath = path.join(postsDirectory, fileName)//posts下一个md文件的路径
      const fileContents = fs.readFileSync(fullPath, 'utf8') //字符串utf-8形式读取一个md文件的数据

      // Use gray-matter to parse the post metadata section  用 插件 解析md文件的元数据部分
      const matterResult = matter(fileContents)

      // Combine the data with the id  将数据与id合并 返回
      return {
        id,
        ...matterResult.data
      }
  })
  
  // Sort posts by date  按日期排序帖子 这里内联了一个比较函数 如果（a，b）>0 ，b会在a之前
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}


//动态路由 ssr方案下不需要了
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)

  // Returns an array that looks like this: //返回如下所显示的数组：
  // [
  //   {
  //     params: {
  //       id: 'ssg-ssr'
  //     }
  //   },
  //   {
  //     params: {
  //       id: 'pre-rendering'
  //     }
  //   }
  // ]
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

  // Use gray-matter to parse the post metadata section 插件解析md的元数据
  const matterResult = matter(fileContents)

  // Use remark to convert markdown into HTML string 用remark把md文章主体转化为html
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}