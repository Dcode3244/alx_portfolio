import React from 'react'

import { Image, Card, Container, Button, Row, Col, ListGroup } from 'react-bootstrap'
import { useParams, Link } from 'react-router-dom';
import Rating from '../components/Rating';

import products from '../products';

const ProductScreen = () => {
    const params = useParams()
    const product = products.find(p => (p._id) == params.id)
    console.log(product)
    return (
        <div>
            <Link to='/' class='btn btn-dark my-3' variant='dark'>Go Back</Link>
            <Row>
                <Col md={6}>
                    <Image src={product.image} alt={product.name} fluid />
                </Col>
                <Col md={3}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h3>{product.name}</h3>
                        </ListGroup.Item>
                        <ListGroup.Item>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} reviews`}
                            />
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Price: ${product.price}
                        </ListGroup.Item>
                        <ListGroup.Item>
                            Description: {product.description}
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant='flush'>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Price:</Col>
                                    <Col>${product.price}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <Row>
                                    <Col>Status:</Col>
                                    <Col>{product.countInStock ? "In Stock" : "Not In Stock"}</Col>
                                </Row>
                            </ListGroup.Item>
                            <ListGroup.Item className='d-grid'>
                                <Button className='btn-block' type='button' disabled={product.countInStock > 0 ? false : true}>
                                    Add To Cart
                                </Button>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen;