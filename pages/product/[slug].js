import { withRouter } from 'next/router'
import { Layout } from "../../components"

const Product = ({ router }) => {
  const { query } = router
  const { slug } = query || {}
  return (
    <Layout title='Detail Produk'>
      {slug}
    </Layout>
  )
}

export default withRouter(Product)