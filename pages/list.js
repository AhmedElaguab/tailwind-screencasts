import Head from 'next/head'
import Layout from './../components/Layout'

export default function ListPage() {
  return (
    <Layout>
      <Head>
        <title>List - Worcation</title>
      </Head>
      <main>
        <h1 className="text-3xl">List page</h1>
      </main>
    </Layout>
  )
}
