import React from 'react';
import { Card, Row, Col } from 'antd';


export default class Gallery extends React.Component {
    render() {
        var imgs = [];
        for (var i = 0; i < 5; i++) {
            imgs[i] = [];
            for (var j = 0; j < 5; j++) {
                imgs[i][j] = i * 5 + j + 1;
            }
        }
        const imgList = imgs.map((list) => {
            return (
                list.map((item) => {
                    return (
                        <Card
                            style={{ marginBottom: 10 }}
                            key={item}
                            cover={<img alt={item} src={`/gallery/${item}.png`} />}>
                            <Card.Meta
                                title="Title"
                                description="Content"
                            />
                        </Card>
                    )
                })
            )
        })
        return (
            <div className="card-wrap">
                <Row gutter={10}>
                    <Col md={5}>
                        {imgList[0]}
                    </Col>
                    <Col md={5}>
                        {imgList[1]}
                    </Col>
                    <Col md={5}>
                        {imgList[2]}
                    </Col>
                    <Col md={5}>
                        {imgList[3]}
                    </Col>
                    <Col md={4}>
                        {imgList[4]}
                    </Col>
                </Row>
            </div>
        )
    }
}