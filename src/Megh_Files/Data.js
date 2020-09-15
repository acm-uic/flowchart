import React, {Component, useState} from 'react';
import CsData from './CsData.json';



function Data() {
  return (
    <div>
      <ul>
        { 
          CsData.map(data => {
            return ( 
              <div>
               <h2><li key={data.id}>{data.class}</li></h2> 
                <p className> {data.Prerequisite}</p>
              </div>   
             )
        })}
      </ul>
    </div>
  );
}

export default Data;