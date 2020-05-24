import Head from 'next/head'
import Layout from './../components/Layout'

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Home - Worcation</title>
      </Head>
      <main>
        <h1 className="text-3xl">Home page</h1>
      </main>
    </Layout>
  )
}
