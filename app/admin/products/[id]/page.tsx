import React, { FC } from 'react'

type ProductProps = {
  params: { id: string }
  status: 'confirmed' | 'cancelled'
}

const ProductPage: FC<ProductProps> = ({ params: { id } }) => {
  return <div>Product Page {id}</div>
}

export default ProductPage
