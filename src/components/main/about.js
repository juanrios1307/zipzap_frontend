import React from "react";
import {Row, Col} from "antd";

const items = [
    {
        key: '1',
        icon: <i className="fas fa-chart-pie"></i>,
        title: 'High Performance',
        content: 'cu nostro dissentias consectetuer mel. ut admodum conceptam mei cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
        key: '2',
        icon: <i className="fas fa-desktop"></i>,
        title: 'Flat Design',
        content: 'cu nostro dissentias consectetuer mel. ut admodum conceptam mei cu eam tation fabulas abhorreant. His ex mandamus.',
    },
    {
        key: '3',
        icon: <i className="fas fa-database"></i>,
        title: 'Simplified Workflow',
        content: 'cu nostro dissentias consectetuer mel. ut admodum conceptam mei cu eam tation fabulas abhorreant. His ex mandamus.'
    },
]

function AppAbout() {
    return (
        <div id="about" className="block aboutBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Sobre Nosotros</h2>
                    <p>ZIPZAP</p>
                </div>
                <div className="contentHolder">
                    <p>Software </p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map(item => {
                        return (
                            <Col md={{ span: 8 }} key={item.key}>
                                <div className="content">
                                    <div className="icon">
                                        {item.icon}
                                    </div>
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default AppAbout;