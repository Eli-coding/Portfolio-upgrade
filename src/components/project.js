import React from 'react';

export default function Card(project) {
  const cardStyle = {
    width: '100%',
  };

  const {name,link,repo} = project;

  return (
    <div className="project-text" key={name} style={cardStyle}>
      {/* <div className="card" style={cardStyle}> */}
        {/* <img
          className="card-img-top"
          src='{props.image}'height="350" width="550"
          //                                 
          alt="Card cap"
        /> */}
      
        <h1> {name}</h1>
        <h2>
          <a href = {link} className ="btn btn-primary">
            DEPLOY
          </a>
          <a href={repo} className="btn btn-primary">
           REPO
          </a>
          </h2>
        </div>
      // </div>
    
  );
}


      

