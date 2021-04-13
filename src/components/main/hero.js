import React from "react";
import { Carousel} from 'antd';

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

function AppHero() {
    return (
        <div id="hero" className="heroBlock">
            <Carousel autoplay>
                {items.map(item => {
                    return (
                        <div key={item.key} className="container-fluid">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <img src={item.image} />
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default AppHero;