import React from 'react'
import profilePic  from './profilePic.jpg';

const One = () => {
    return (
        <>  
            <div className=" profile__card">
                <img src={profilePic} alt="profile" />
                <div className="profile__detail">
                    <h4>Hi Reader</h4>
                    <p>Here's your News!</p>
                </div>
            </div>
        </>
    )
}

export default One;
