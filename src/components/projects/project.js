import React from 'react'
import { Card } from 'antd'

export default function Project({ imageURI, title, description }) {
    return (
        <Card hoverable style={{width: '300px', margin: '10px'}} cover={<img alt={title} src={imageURI} />}>
            <Card.Meta 
                title={title}
                description={description}
            />
        </Card>
    )
}
