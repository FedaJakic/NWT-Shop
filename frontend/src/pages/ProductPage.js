import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'

const ProductPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  useEffect(() => {
    const fetchProduct = async () => {
      const { data } = await axios.get(
        `/api/products/${encodeURIComponent(id)}`
      )

      setProduct(data)
    }

    fetchProduct()
  }, [])

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Natrag
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={3}>
          <ListGroup variant='flush'>
            <ListGroup.Item>
              <h2>{product.name}</h2>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating
                value={product.rating}
                text={`${product.numReviews} recenzija`}
              />
            </ListGroup.Item>
            <ListGroup.Item>Cijena: {product.price} kn</ListGroup.Item>
            <ListGroup.Item>Opis: {product.description}</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant='flush'>
              <ListGroup.Item>
                <Row>
                  <Col>Cijena:</Col>
                  <Col>
                    <strong>{product.price} kn</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>
                    {product.countInStock > 0 ? 'Na Stanju' : 'Nema Na Stanju'}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button
                  className='btm-block'
                  type='button'
                  disabled={product.countInStock === 0}
                >
                  Dodaj u košaricu
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductPage
