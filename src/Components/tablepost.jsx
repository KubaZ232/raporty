import React from 'react';
import '../styles.css';
import Post from './post.jsx';
import Data from './data.json';

export default function TablePost(){

    return(
        <div className="tablepost_containers">
          { Data.map(data => {
              return(
                  <Post 
                     key={data.date}
                     title={data.title}
                     description={data.description}
                     date={data.date}
                     category={data.category}
                  />
                  
              )
          }) }
          
        </div>
    )
}