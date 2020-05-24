import Head from 'next/head'
import Layout from './../components/Layout'

export default function TripsPage() {
  return (
    <Layout>
      <Head>
        <title>Trips - Worcation</title>
      </Head>
      <main>
        <h1 className="text-3xl">Trips page</h1>
      </main>
    </Layout>
  )
}
