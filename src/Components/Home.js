import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import One from "./One";
import Two from "./Two";
import Three from "./Three";
import Four from "./Four";
import Five from "./Five";
import Feedback from "./Feedback";
import '../App.css';
import Pagination from "./Pagination";

const Home = (props) => {
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [feedback, setFeedback] = useState(false);
  const [defaults, setDefaults] = useState(true);
  const [details, setDetails] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [newsPerPage, setNewsPerPage] = useState(4)

  const handleData = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((resp) => setDetails(resp));
  };

  useEffect(async () => {
    await handleData();
  },[]);

  // pagination 
  // const indexOfLastNews = currentPage * newsPerPage;
  // const indexOfFirstNews = indexOfLastNews - newsPerPage;
  // const currentNews = details.slice(indexOfFirstNews, indexOfLastNews);

  return (
    <>
      <div className="main__frame">
        
          <div className={feedback ?  "feedbackOn" : "sidebar"} >
            <One />
            <Two
              setFour={setFour}
              setFive={setFive}
              four={four}
              five={five}
              setDefaults={setDefaults}
            />
            <Three setFeedback={setFeedback} feedback={feedback} />
          </div>
          <div className="main__content">
            { feedback ?
              <Feedback />
            :
            <div className="mainContent">
              {defaults === true ? <Four details={details} /> : ""}
              {four && <Four details={details} />}
              {five && <Five details={details} />}
            </div> }
            {/* <Pagination newsPerPage={newsPerPage} totalNewsPosts={details.length} /> */}
          </div>
        
      </div>
    </>
  );
};

export default Home;
