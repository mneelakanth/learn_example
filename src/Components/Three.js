import React, { useState } from 'react'
import './sidebar.css';

const Three = (props) => {
    console.log(props.feedback);
   
    return (
        <>
            <div className="feedback__card">
                <h3>Have a Feedback?</h3>
                <button onClick={() => props.setFeedback(!props.feedback)} className="feedback__btn btn">
                    We’re Listening!
                </button>
            </div>

        </>
    )
}
export default Three;
