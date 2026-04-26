import React from 'react';
import Form from 'react-bootstrap/Form';
import './CheckComponent.scss';

function CheckComponent(props) {
    return (
        <Form className='check_box_main'>
            {['checkbox'].map((type) => (
                <div key={`inline-${type}`} className="Check_box">
                    <Form.Check
                        className='check_box_inr'
                        type={type}
                        id={`inline-${type}-${props.checkNum}`}
                        label={props.CheckText}
                    />
                </div>
            ))}
        </Form>
    )
}

export default CheckComponent