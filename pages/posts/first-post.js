import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>Hello my First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
      <Image
        src="/images/kitty.jpg" // Route of the image file
        width={659} // Desired size with correct aspect ratio
        height={439} // Desired size with correct aspect ratio
        alt="Your Name"
      />
    </Layout>
  )
}