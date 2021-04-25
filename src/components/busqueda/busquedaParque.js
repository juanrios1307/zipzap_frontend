import React, {useState} from "react";
import {Card, Carousel,Row, Col} from 'antd';

import parque from "../../assets/images/parque.jpg";



const { Meta } = Card;

const items = [
    {
        key: '1',
        title: 'Cartagena',
        content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        image : 'https://res.cloudinary.com/eia/image/upload/v1613953666/qyy1px336lx11famykj3.jpg'
    },
    {
        key: '2',
        title: 'Medellín',
        content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        image : 'https://res.cloudinary.com/eia/image/upload/v1617930313/yjwy0cekd0bsgdsnywi3.jpg'
    },
    {
        key: '3',
        title: 'Cali',
        content: 'An vim odio ocurreret consetetur, justo constituto ex mea. Quidam facilisis vituperata pri ne. Id nostrud gubergren urbanitas sed, quo summo animal qualisque ut, cu nostro dissentias consectetuer mel. Ut admodum conceptam mei, cu eam tation fabulas abhorreant. His ex mandamus.',
        image : 'https://res.cloudinary.com/eia/image/upload/v1606176387/io6thfh9jygotsfcjv1h.jpg'
    },
]

function AppBusquedaParque() {

    const [ciudad, setCiudad] = useState('Cartagena');

    return (
        <div id="hero" className="busquedaBlock">
            <Carousel >
                {items.map(item => {
                    return (
                        <div id="pricing" className="block pricingBlock bgGray">
                            <div className="container-fluid">
                                <div className="titleHolder">


                                    <div className="site-card-wrapper">

                                        <Row gutter={[16, 16]}>
                                            <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
                                                <Card
                                                    hoverable
                                                    cover={<img alt="test" src={parque} />}
                                                >
                                                    <Meta title={item.title} />
                                                </Card>
                                            </Col>

                                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                                <Card
                                                    hoverable
                                                    cover={<img alt="test" src={parque} />}
                                                >
                                                    <Meta title={item.title} />
                                                </Card>
                                            </Col>

                                            <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
                                                <Card
                                                    hoverable
                                                    cover={<img alt="test" src={parque} />}
                                                >
                                                    <Meta title={item.title} />
                                                </Card>
                                            </Col>

                                            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                                                <Card
                                                    hoverable
                                                    cover={<img alt="test" src={parque} />}
                                                >
                                                    <Meta title={item.title} />
                                                </Card>
                                            </Col>
                                            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                                                <Card
                                                    hoverable
                                                    cover={<img alt="test" src={parque} />}
                                                >
                                                    <Meta title={item.title} />
                                                </Card>
                                            </Col>
                                            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                                                <Card
                                                    hoverable
                                                    cover={<img alt="test" src={parque} />}
                                                >
                                                    <Meta title={item.title} />
                                                </Card>
                                            </Col>

                                            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                                                <Card
                                                    hoverable
                                                    cover={<img alt="test" src={parque} />}
                                                >
                                                    <Meta title={item.title} />
                                                </Card>
                                            </Col>
                                            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                                                <Card
                                                    hoverable
                                                    cover={<img alt="test" src={parque} />}
                                                >
                                                    <Meta title={item.title} />
                                                </Card>
                                            </Col>
                                            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                                                <Card
                                                    hoverable
                                                    cover={<img alt="test" src={parque} />}
                                                >
                                                    <Meta title={item.title} />
                                                </Card>
                                            </Col>

                                            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                                                <Card
                                                    hoverable
                                                    cover={<img alt="test" src={parque} />}
                                                >
                                                    <Meta title={item.title} />
                                                </Card>
                                            </Col>
                                            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                                                <Card
                                                    hoverable
                                                    cover={<img alt="test" src={parque} />}
                                                >
                                                    <Meta title={item.title} />
                                                </Card>
                                            </Col>
                                            <Col xs={{ span: 24 }} sm={{ span: 8 }} md={{ span: 8 }}>
                                                <Card
                                                    hoverable
                                                    cover={<img alt="test" src={parque} />}
                                                >
                                                    <Meta title={item.title} />
                                                </Card>
                                            </Col>

                                        </Row>
                                    </div>

                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default AppBusquedaParque;