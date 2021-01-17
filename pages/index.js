import Link from 'next/link'
import { Layout } from '../components'

export default function Home({ products, ...props }) {
  return (
    <Layout title='Home'>
      <h1 className='text-md font-bold'>Product Catalog</h1>
      <ul>
        {products?.map((product, index) => {
          return (
            <li key={index}>
              <Link href={`/product/[slug]`} as={`/product/${product?.slug}`}>
                {product?.name}
              </Link>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_ENV_API_URL}/${process.env.NEXT_PUBLIC_ENV_API_PREFIX}/954ecdb1-43b9-4e38-bd5c-c4994ad1fb36`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'X-TOKEN-API': 'Lapakilat'
    }
  })
  const { data: products, ...props } = await response.json()
  return {
    products: products,
    props: props
  }
}