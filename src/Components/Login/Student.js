import React,{useState} from 'react'
import './Login.css'
import Quiz from '../QuizQuestions/Quiz'

function Student() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <div className="student">
            <form>
                <input type="text" name="Full Name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Student's Full Name" id="" />
                <input type="email" name="Email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Student's Email" id="" />
                <input type="password" name="Password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Password" id="" />
                <button type="submit" onClick={(e)=>{
                    e.preventDefault();
                    <Quiz/>
                }}>Sign In / Register</button>
            </form>
        </div>
    )
}

export default Student
