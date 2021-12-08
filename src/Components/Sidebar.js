import React from 'react';
import './sidebar.css';
import profilePic from './profilePic.jpg'

function Sidebar(props) {
   
    return (  
        <div className="d-flex">
            <div className= " sidebar" >
                <div className=" profile__card">
                    <img src={profilePic} alt="profile" />
                    <div className="profile__detail">
                        <h4>Hi Reader</h4>
                        <p>Here's your News!</p>
                    </div>
                </div>

                <div className="toggle__card">
                    <h4>View Toggle</h4>
                    <div className="toggle__switch">
                        <i onClick={() => this.toggleView()} className="toggle__detail bi bi-card-text"></i>
                        <i onClick={() => this.toggleView()} className="toggle__list bi bi-list-ul"></i>
                    </div>
                </div>

                <div className="feedback__card">
                    <h3>Have a Feedback?</h3>
                    <button className="feedback__btn btn ">We’re Listening!</button>
                </div>
            </div>

            <div className="feedback__modal" >
                <h5>Thank you so much for taking the time! </h5>
                <small>Please provie the below details!</small>
                <form>
                    <div className="me-4">
                        <label className="form-label">First Name:</label>
                        <input className="form-control" type="text" placeholder="John" />
                    
                        <label className="form-label">last Name:</label>
                        <input className="form-control" type="text" placeholder="Tyson" />
                    
                        <label className="form-label">Address</label>
                        <textarea className="form-control" type="text" placeholder="John" />
                    
                        <label className="form-label">Country:</label>
                        <input className="form-control" type="text" placeholder="Tyson" />
                        <label className="form-label">Email ID:</label>
                        <input className="form-control" type="email" placeholder="John" />
                   
                    
                        <label className="form-label">Phone Number:</label>
                        <input className="form-control" type="number" placeholder="John" />
                    </div>
                    <button className="btn btn-success">Submit Feedback </button>
                </form>
            </div>
        </div>
    );
}

export default Sidebar;