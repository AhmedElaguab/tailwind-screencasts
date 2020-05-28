import Head from 'next/head'
import Layout from './../components/Layout'
import PropertyList from '../components/PropertyList'

const properties = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 2,
    title: 'Modern home in city center of Los Angeles',
    formattedPrice: '$1,400',
    reviewCount: 34,
    rating: 5,
    type: 'House',
    id: 1,
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Rear view of modern home with pool',
    beds: 4,
    baths: 2,
    title: 'Isolated house outside of the city of Los Angeles',
    formattedPrice: '$1,250',
    reviewCount: 21,
    rating: 4,
    type: 'House',
    id: 2,
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Rear view of modern home with pool',
    beds: 5,
    baths: 4,
    title: 'Large dream house with a wide garden in the city of LA',
    formattedPrice: '$1,300',
    reviewCount: 12,
    rating: 4,
    type: 'House',
    id: 3,
  },
]

const properties2 = [
  {
    imageUrl:
      'https://images.unsplash.com/photo-1495433324511-bf8e92934d90?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Rear view of modern home with pool',
    beds: 2,
    baths: 1,
    title: 'Modern home in city center of Los Angeles',
    formattedPrice: '$1,400',
    reviewCount: 34,
    rating: 3,
    type: 'Loft',
    id: 4,
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Rear view of modern home with pool',
    beds: 3,
    baths: 1,
    title: 'Modern home in city center of Los Angeles',
    formattedPrice: '$1,400',
    reviewCount: 34,
    rating: 4,
    type: 'Entire House',
    id: 5,
  },
  {
    imageUrl:
      'https://images.unsplash.com/photo-1484154218962-a197022b5858?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    imageAlt: 'Rear view of modern home with pool',
    beds: 4,
    baths: 3,
    title: 'Modern home in city center of Los Angeles',
    formattedPrice: '$1,400',
    reviewCount: 26,
    rating: 5,
    type: 'Entire House',
    id: 6,
  },
]

export default function IndexPage() {
  return (
    <Layout>
      <Head>
        <title>Home - Worcation</title>
      </Head>
      <main>
        <PropertyList
          city="Los Angeles"
          description="Live like the stars in these luxurious Southern California estates."
          properties={properties}
        />
        <PropertyList
          city="Los Angeles"
          description="Live like the stars in these luxurious Southern California estates."
          properties={properties2}
        />
      </main>
    </Layout>
  )
}
