import React from 'react'
import './Quiz.css'
import {FcNext, FcPrevious} from 'react-icons/fc'

function Quiz() {
    return (
        <div className="outer-quiz">
            <div className="stud-name">
                Hello, Harsh Raj Kumar
            </div>
            <div className="nav-btn prev">
                <FcPrevious style={{color: '#000', fontSize: '20px', zIndex: '100' }}/>
            </div>
            <div className="quiz">
                <h1>Q. This is a quiz question</h1>
                <div className="options">
                    <div className="option">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="option">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="option">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                    <div className="option">Lorem, ipsum dolor sit amet consectetur adipisicing elit.</div>
                </div>
            </div>
            <div className="nav-btn next">
                <FcNext style={{color: '#000', fontSize: '20px', zIndex: '2' }}/>
            </div>
        </div>
    )
}

export default Quiz
