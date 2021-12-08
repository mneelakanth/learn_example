import React, { useState} from "react";
import '../Components/mainComponents.css';
import Modal from 'react-bootstrap/Modal';

import profilePic  from './profilePic.jpg';
import newsImg from "./newsimg.jpg";


const Four = (props) => {

  // const [show,setModal] = useState(false);
  // const closee = () => setModal(false);
  // const openn = () => setModal(true);
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {props.details.map((value, id) => {
        return (
          <>
            <div className="main__content__list" data-bs-toggle="modal" data-bs-target="#exampleModal">
              <div className="newsContents__list">
                  <div className="newsList">
                    <div key={id} className="newsList__card">
                        <img src={profilePic} alt="profile" />
                        <div className="newsList__card__detail">
                            <h4>{value.body}</h4>
                            <h6 className="text-muted">{value.title}</h6>
                            <small>Mon, 21 Dec 2020 14:57 GMT</small>
                        </div>
                    </div>
                    <div className="newsList__cancel">
                        <i className="cancel__btn bi bi-x-lg"></i>
                    </div>
                </div>
              </div>    
            </div>
            {/* <Modal key={id} show={show} onHide={handleClose} >
            {value.body}
            </Modal> */}
            <div  className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog  modal-dialog-centered">
                <div key={id} className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">{value.title}</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                  </div>
                  <div className="modal-body">
                    <h6>{value.body}</h6>
                    <hr/>
                    <small>Mon, 21 Dec 2020 14:57 GMT</small>
                  </div>
                </div>
              </div>
            </div>            
          </>
        );
      })}

        <div className="news__pagination">
          <button className="btn roundedBtn">1</button>
          <button className="btn roundedBtn">2</button>
          <button className="btn roundedBtn">3</button>
        </div>
    </>
  );
};
export default Four;
