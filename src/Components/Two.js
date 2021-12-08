import React, { useEffect, useState } from "react";
import Four from "./Four";
import './sidebar.css'

const Two = (props) => {
  return (
    <>
      {/* <div className="card mt-3">
        <div className="card-body">
          <div className="toggle__switch">
              <i onClick={() => {props.setFour(true);props.setFive(false);props.setDefaults(false);} } 
                className="toggle__detail bi bi-card-text"></i>
              <i onClick={() =>{props.setFour(false);props.setFive(true);props.setDefaults(false);}} 
                className="toggle__list bi bi-list-ul"></i>
          </div>
        </div>
      </div> */}

      <div className="toggle__card">
          <h4>View Toggle</h4>
          <div className="toggle__switch">
            <i onClick={() => {props.setFour(true);props.setFive(false);props.setDefaults(false);} } 
              className= "toggle__detail bi bi-card-text active" ></i>
              
            <i onClick={() =>{props.setFour(false);props.setFive(true);props.setDefaults(false);}} 
              className="toggle__list bi bi-list-ul"></i>
          </div>
      </div>

    </>
  );
};
export default Two;
