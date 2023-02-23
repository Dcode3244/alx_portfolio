import React from 'react'

import {Container, Row, Col, ListGroup} from 'react-bootstrap'

import './TestBoot.css'
const TestBoot = () => {
  return (
    <div>
        <Container>
            <Row>
                <Col className='what'>
                    <ListGroup variant='flush'>
                        <ListGroup.Item active={true}>
                            TEsting1
                        </ListGroup.Item>
                        <ListGroup.Item>
                            TEsting2
                        </ListGroup.Item>
                        <ListGroup.Item>
                            TEsting3
                        </ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col className='what'>
                    test2
                </Col>
                <Col className='what'>
                    test3
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default TestBoot