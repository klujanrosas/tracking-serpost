import React from 'react'
import { Card, CardText, CardTitle, Button } from 'reactstrap'

const StyledCard = ({ title, content, onSubmit }) => {
  return (
    <Card block inverse color="success" onClick={() => console.log('clicked card')} style={{ marginBottom: 15 }}>
      <CardTitle>{title}</CardTitle>
      <CardText>{content}</CardText>
      <Button onClick={onSubmit}>Consultar</Button>
    </Card>
  )
}

export default StyledCard