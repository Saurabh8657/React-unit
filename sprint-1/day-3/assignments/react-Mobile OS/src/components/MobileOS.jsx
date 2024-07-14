import React from "react";
export default function MobileOS(){
    return (
    <div className="card-container">
      <div>
        <h1> Mobile Operating System</h1>
          <ul data-testid="os-list">
            <li>Android</li>
            <li>Blackberry</li>
            <li>iPhone</li>
            <li>Windows Phone</li>
          </ul>
      </div>
      
      <div>
        <h1> Mobile Manufacturers</h1>
          <ol data-testid="manufacturers-list">
            <li>Samsung</li>
            <li>HTC</li>
            <li>Micromax</li>
            <li>Apple</li>
          </ol>
      </div>
    </div>
    )
}