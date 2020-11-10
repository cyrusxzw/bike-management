import React from 'react';
import { Card, Carousel } from 'antd';

export default class Slider extends React.Component {

    render() {
        const contentStyle = {
            height: '160px',
            color: '#fff',
            lineHeight: '160px',
            textAlign: 'center',
            background: '#364d79',
        };
        const imgStyle = {
            background: '#364d79',
            width: '100%'
        };
        return (
            <div style={{ display: "block", width: '100%' }}>
                <Card title="Basic Carousel">
                    <Carousel autoplay>
                        <div>
                            <h3 style={contentStyle}>1</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>2</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>3</h3>
                        </div>
                        <div>
                            <h3 style={contentStyle}>4</h3>
                        </div>
                    </Carousel>
                </Card>
                <Card title="Image Carousel">
                    <Carousel autoplay>
                        <div>
                            <img style={imgStyle} src="/carousel-img/carousel-1.jpg" alt="" />
                        </div>
                        <div>
                            <img style={imgStyle} src="/carousel-img/carousel-2.jpg" alt="" />
                        </div>
                        <div>
                            <img style={imgStyle} src="/carousel-img/carousel-3.jpg" alt="" />
                        </div>
                    </Carousel>
                </Card>
            </div>
        )
    }
}