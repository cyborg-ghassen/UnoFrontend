import React from "react";
import {Image} from "react-bootstrap";
import img from "assets/img/g42.png"

const StarComponent = () => {
    return (
        <div className="position-absolute me-2 mt-2 fs--2 z-index-2" style={{
            top: -70, right: -60, width: "35%"
        }}>
            <Image src={img} alt="Blue Star" fluid style={{zIndex: 9999}}/>

            <div style={{
                position: 'absolute',
                top: '50%',
                left: '65%',
                transform: 'translate(-50%, -50%)',
                color: '#fff'
            }}>
                10%
            </div>
        </div>
    );
};

export default StarComponent