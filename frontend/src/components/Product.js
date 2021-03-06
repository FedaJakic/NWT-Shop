import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'

const Product = ({ product }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={`/product/${product._id}`}>
        <Card.Img src={product.image} variant='top' />
      </Link>
      <Card.Body>
        <h4>
          <Card.Title as='div'>
            <strong>{product.name}</strong>
          </Card.Title>
        </h4>
        <Card.Text as='div'>
          <Rating
            value={product.rating}
            text={`${product.numReviews} recenzija`}
          />
        </Card.Text>
        <Card.Text as='h3'>{product.price} kn</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
