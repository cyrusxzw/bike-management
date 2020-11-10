import React from 'react';
import { Card, Row, Col, Modal } from 'antd';


export default class Gallery extends React.Component {

    state = {
        visible: false
    }

    openGallery = (imgSrc) => {
        this.setState({
            visible: true,
            currentImg: imgSrc
        })
    }

    render() {
        var imgs = [];
        for (var i = 0; i < 4; i++) {
            imgs[i] = [];
            for (var j = 0; j < 4; j++) {
                imgs[i][j] = i * 4 + j + 1;
            }
        }
        const imgList = imgs.map((list) => {
            return (
                list.map((item) => {
                    return (
                        <Card
                            style={{ marginBottom: 10 }}
                            key={item}
                            cover={<img alt={item} src={`/gallery/${item}.png`} onClick={() => this.openGallery(item)} style={{ cursor: "pointer" }} />}>
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
                    <Col md={6}>
                        {imgList[0]}
                    </Col>
                    <Col md={6}>
                        {imgList[1]}
                    </Col>
                    <Col md={6}>
                        {imgList[2]}
                    </Col>
                    <Col md={6}>
                        {imgList[3]}
                    </Col>
                </Row>
                <Modal
                    visible={this.state.visible}
                    title="Gallery"
                    onCancel={() => {
                        this.setState({
                            visible: false
                        })
                    }}
                    footer={null}
                >
                    <img src={`/gallery/${this.state.currentImg}.png`} alt="" style={{ width: "100%" }} />
                </Modal>
            </div>
        )
    }
}