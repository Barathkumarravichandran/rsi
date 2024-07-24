import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const formatIndex = (index) => {
    return index < 9 ? `0${index + 1}` : `${index + 1}`;
};

const faqData = [
    { title: ' How to use Rsi?', details: 'Technology is at the forefront of innovation and progress, enabling us to tackle some of the world’s biggest challenges and improve the quality of life for people around the globe.' },
    { title: ' How to soft launch your business?', details: 'Technology is at the forefront of innovation and progress, enabling us to tackle some of the world’s biggest challenges and improve the quality of life for people around the globe.' },
    { title: ' How to turn visitors into contributors?', details: 'Technology is at the forefront of innovation and progress, enabling us to tackle some of the world’s biggest challenges and improve the quality of life for people around the globe.' },
    { title: ' How to Integrate with Rsi ?', details: 'Technology is at the forefront of innovation and progress, enabling us to tackle some of the world’s biggest challenges and improve the quality of life for people around the globe.' }
];

const Common_Question = ({activeItem,addClass, selectedIndices = []}) => {

    const dataToRender = selectedIndices.length > 0 ? selectedIndices.map(index => faqData[index]) : faqData;
    return (
        <Accordion defaultActiveKey={activeItem} className={`rs-faq__wrapper ${addClass ? addClass : ''}`}>
            {
                dataToRender && dataToRender.map((data, index) => (
                    <Accordion.Item eventKey={index} key={index} className="">
                        <Accordion.Button className="accordion_tab">
                            {formatIndex(index)}. {data.title}
                            <div className="accordion_arrow">
                                <i className="ri-subtract-fill"></i>
                            </div>
                        </Accordion.Button>
                        <Accordion.Body className="accordion_content">
                            <div className="accordion_item">
                                <p>{data.details}</p>
                            </div>
                        </Accordion.Body>
                    </Accordion.Item>
                ))
            }
        </Accordion>
    );
};

export default Common_Question;