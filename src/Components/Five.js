import React, { useState } from "react";
import newsImg from "./newsimg.jpg";
import Modal from 'react-bootstrap/Modal';



const Five = (props) => {

  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {props.details.map((value, id) => {
        return (
      <>
        <div  className="newsContents__detail" data-bs-toggle="modal" data-bs-target="#exampleModal">
          <div className="newsDetail" key={props.id}>

            <div className="newsDetail__card" style={{ position:"static" }}>
              <div className="newsDetail__cancel">
                  <i className="cancel__btn bi bi-x-lg"></i>
              </div>
              <div className="newsDetail__details">
                <h5>{value.body.length > 50 ?`${value.body.substring(0, 50)}...` : value.body} </h5>
                <p>{value.title.length > 20 ?`${value.title.substring(0, 20)}...` : value.title} </p>
                <small>Mon, 21 Dec 2020 14:57 GMT</small>
                <div style={{ position:"relative" , bottom:'-27px !important' }}>
                  <img  src={newsImg} alt="news"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* <Modal show={show} onHide={handleClose} centered animation={true}>
          hi world
        </Modal>   */}
        <div  className="modal fade" id="exampleModal"  aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div key={id} className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{value.title}</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                {value.body}
              </div>
            </div>
          </div>
        </div>
      </>  
        );
      })}

    </>
  );
};
export default Five;
