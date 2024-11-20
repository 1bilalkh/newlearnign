import React from 'react'
import { Col, Card, Typography } from 'antd';
import { Button } from 'antd';

function Allprops(props) {
  return (
    <> 
      
          <Col xs={24} sm={24} md={8} lg={8}>
            <Card style={{ height: '100%' }}>
              <Typography.Title level={3} style={{ margin: '0' }}>{props.heading}</Typography.Title>
              <Typography.Paragraph style={{ marginTop: '12px' }}>
              {props.content}
            </Typography.Paragraph>
              <Button type="primary">Let's Connect</Button>
            </Card>
          </Col>
      
    </>
  )
}

export default Allprops;