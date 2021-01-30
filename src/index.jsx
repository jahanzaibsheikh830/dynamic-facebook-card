import React, { useState } from 'react';
import { Form, Col, Button } from "react-bootstrap";
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
var getData = localStorage.getItem('data');

function FbCard() {
  const [data, setData] = useState([])

  function post(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var profileUrl = document.getElementById('profileUrl').value;
    var imgUrl = document.getElementById('imgUrl').value;
    var postText = document.getElementById('postText').value;

    let newData = {
      name: name,
      profileUrl: profileUrl,
      imgUrl: imgUrl,
      postText: postText
    }
    console.log(newData)
    setData(previousValue => {
      return previousValue.concat([newData])
    })
    localStorage.setItem('data' ,JSON.stringify(data))
  }

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 form">
            <h1 className="text-center mb-3">Create Post</h1>
            <Form onSubmit={post}>
              <Form.Row>
                <Form.Group as={Col} >
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name" id="name" />
                </Form.Group>
                <Form.Group as={Col}>
                  <Form.Label>Profile Url</Form.Label>
                  <Form.Control type="text" placeholder="Profile url" id="profileUrl" />
                </Form.Group>
              </Form.Row>
              <Form.Group >
                <Form.Label>Image Url</Form.Label>
                <Form.Control type="text" placeholder="Image url" id="imgUrl" />
              </Form.Group>
              <Form.Group>
                <Form.Label>Example textarea</Form.Label>
                <Form.Control as="textarea" rows={3} id="postText" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        </div>
      </div>
      {
      data.map(element => {
        return <div id="main-card">
         <div className="container">
        <div className="row justify-content-center mt-5 " >
          <div className="col-md-6 fb-card">
            <div className="row">
              <div className="col-md-2">
                <img src={element.profileUrl} alt="profile pic" style={{ width: 40, height: 40 }} />
              </div>
              <div className="col-md-10">
                <p className="name">{element.name}</p>
                <p className="time">2hr</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <p className="mt-2 mb-2">{element.postText}</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <img src={element.imgUrl}
                alt=""  style={{width:"100%",height:"249px"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      })}
    </div>
  );
}

ReactDOM.render(
  <FbCard />
  ,
  document.getElementById('root')
);

