import Head from 'next/head'
import Layout from './../components/Layout'

export default function MessagesPage() {
  return (
    <Layout>
      <Head>
        <title>Messages - Worcation</title>
      </Head>
      <main>
        <h1 className="text-3xl">Messages page</h1>
      </main>
    </Layout>
  )
}
