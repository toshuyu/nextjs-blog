import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(), 'posts')

// export function getSortedPostsData() {
//   // Get file names under /posts
//   const fileNames = fs.readdirSync(postsDirectory)
//   const allPostsData = fileNames.map(fileName => {
//     // Remove ".md" from file name to get id
//     const id = fileName.replace(/\.md$/, '')

//     // Read markdown file as string
//     const fullPath = path.join(postsDirectory, fileName)
//     const fileContents = fs.readFileSync(fullPath, 'utf8')

//     // Use gray-matter to parse the post metadata section
//     const matterResult = matter(fileContents)

//     // Combine the data with the id
//     return {
//       id,
//       ...matterResult.data
//     }
//   })
//   // Sort posts by date
//   return allPostsData.sort((a, b) => {
//     if (a.date < b.date) {
//       return 1
//     } else {
//       return -1
//     }
//   })
// }

export async function getSortedPostsData() {
    // Instead of the file system,
    // fetch post data from an external API endpoint
    // const res = await fetch('http://localhost:3888/products');
    // const r = await res.json(); 
    const r = [{"id":1,"name":"iphone","remark":"SE","price":10000},
    {"id":2,"name":"ipad","remark":"red","price":120},
    {"id":3,"name":"ipad","remark":"red","price":120}];
    return r;
}

export async function getAllPostIds() {
  // const res = await fetch('http://localhost:3888/products');
  // const r = await res.json(); 

  const r = [{"id":1,"name":"iphone","remark":"SE","price":10000},
    {"id":2,"name":"ipad","remark":"red","price":120},
    {"id":3,"name":"ipad","remark":"red","price":120}];
  // Returns an array that looks like this:
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
  const t = r.map(r => {
    return {
      params: {
        id: r.id+''
      }
    }
  });
  // console.log('test', t);
  return t;
}

export function getPostData(id) {
  
  // Combine the data with the id
  return {
    id,
    key: 'some value '+id
  }
}