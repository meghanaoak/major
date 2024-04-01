import React from 'react';
import Header from "../Header/Header";
import './Tutorials.css';

import { fixCamera, tutorials } from '../../utils/data';

export default function Tutorials() {
    return (
        <div>
            <Header/>
        <div className="tutorials-container">
            
            <h3 className="tutorials-heading"> # Basic Instructions</h3>
            <div className="tutorials-content-container">
                {tutorials.map((tutorial) => (
                    <p className="tutorials-content">{tutorial}</p>
                ))}
            </div>
            <h3 className="tutorials-heading"> # Camera Not Working?</h3>
            <div className="tutorials-content-container">
                {fixCamera.map((points) => (
                    <p className="tutorials-content">{points}</p>
                ))}
            </div>
            
        </div>
        </div>
    )
}
