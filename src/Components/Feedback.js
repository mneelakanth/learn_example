import React from 'react';


function feedback() {
    
    return (  
        <>
        <div className="isfeedbackOpen mt-4">
                <h5>Thank you so much for taking the time! </h5>
                <small>Please provie the below details!</small>
                <form>
                    <div className="me-4 ">
                        <label>First Name:</label>
                        <input className="form-control" type="text" placeholder="John" />
                    
                        <label>last Name:</label>
                        <input className="form-control" type="text" placeholder="Tyson" />
                    
                        <label>Address</label>
                        <textarea className="form-control" type="text" placeholder="Enter your full Postal Address" />
                    
                        <label>Country:</label>
                        <input className="form-control" type="text" placeholder="India" />

                        <label>Email ID:</label>
                        <input className="form-control" type="email" placeholder="example@sample.com" />
                   
                    
                        <label>Phone Number:</label>
                        <input className="form-control" type="number" placeholder="Phone no" />

                    </div>
                    <button className="btn feedback__btn">Submit Feedback </button>
                </form>
            </div>
        </>
    );
}

export default feedback;