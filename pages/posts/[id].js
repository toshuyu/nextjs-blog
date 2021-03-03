import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head';

export async function getStaticPaths() {
    const paths = await getAllPostIds(); // all possible [id].js
    return {
      paths,
      fallback: false
    }
  }

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = getPostData(params.id) // align with filename [id].js??
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }) {
    return (
      <Layout>
        <Head>
            <title>{postData.key}</title>
        </Head>
        {postData.id}
        <br />
        {postData.key}
      </Layout>
    )
  }