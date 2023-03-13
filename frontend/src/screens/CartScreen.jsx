import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import { Link, useParams, useSearchParams, useNavigate } from 'react-router-dom'
import { Row, Col, ListGroup, Image, Form, Button, Card } from 'react-bootstrap'
import { addToCart, removeFromCart } from '../actions/cartAction'

const CartScreen = ({ location, match }) => {
    const params = useParams()
    const [searchParams] = useSearchParams()
    const navigate = useNavigate()

    const productId = params.id
    const qty = Number(searchParams.get('qty'))

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id))
    }

    const checkoutHandler = () => { navigate('/login?redirect=shipping') }
    return (
        <Row>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0 ? (
                    <Message>Your Cart is empty <Link style={{ textDecoration: "none" }} to='/'>Go Back</Link></Message>
                ) : (
                    <ListGroup variant='flush'>
                        {cartItems.map(item => (
                            <ListGroup.Item key={item.product}>
                                <Row>
                                    <Col md={2}>
                                        <Image src={item.image} alt={item.name} fluid rounded />
                                    </Col>
                                    <Col md={2}>${item.price}</Col>
                                    <Col md={3}>
                                        <Form.Select
                                            as='select'
                                            value={item.qty}
                                            onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}
                                        >
                                            {
                                                [...Array(item.countInStock).keys()].map(idx => (
                                                    <option key={idx + 1}>
                                                        {idx + 1}
                                                    </option>
                                                ))
                                            }
                                        </Form.Select>
                                    </Col>
                                    <Col md={2}>
                                        <Button type="button" variant="light" onClick={() => {
                                            removeFromCartHandler(item.product)
                                        }}><i className='fas fa-trash'></i></Button>
                                    </Col>

                                </Row>
                            </ListGroup.Item>
                        ))}
                    </ListGroup>
                )
                }
            </Col>
            <Col md={4}>
                <Card>
                    <ListGroup>
                        <ListGroup.Item>
                            <h2>
                                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)}) items
                            </h2>
                            ${cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)}
                        </ListGroup.Item>
                        <ListGroup.Item className='d-grid'>
                            <Button
                                type='button'
                                disabled={cartItems.length === 0}
                                className='btn-blobk'
                                onClick={checkoutHandler}
                            >checkout</Button>
                        </ListGroup.Item>
                    </ListGroup>
                </Card>
            </Col>

        </Row>
    )
}

export default CartScreen