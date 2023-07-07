import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import ForgotPassword from "./ForgotPassword";
import axios from 'axios'
import { Link } from "react-router-dom";


const LoginForm:React.FC = () => {
    const [email,setEmail] = useState<string>("");
    const [isCorrect,setisCorrect] = useState<boolean>(false);
    const [password,setPassword] = useState<string>("");
    const navigate = useNavigate();

    const handleSubmit =(e:React.FormEvent)=>{
        e.preventDefault();
        console.log(email+ " "+ password)
        // axios.post('https://x8ki-letl-twmt.n7.xano.io/apidoc:XooRuQbs/auth/login',{
        //     email,password
        // }).then(()=>{
            
        // }).catch((error)=>{
        //     console.log(error)
        //     alert("user is invalid")
        // })

        axios({
            method: 'post',
            url: 'https://x8ki-letl-twmt.n7.xano.io/api:XooRuQbs/auth/login',
            data: {
                email:email,
                password:password
            },
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                // 'Access-Control-Allow-Headers': '*'
            },
        }).then(()=>{
            navigate('/dashboard')
        }).catch((error)=>{
            console.log(error)
            alert("Invalid user")
        })
    }

    return (
        <div className="container flex justify-center items-center min-h-screen mb-10">
            <div className="flex flex-col subContainer">
                <div className="heading">
                    Login Form
                </div>
                <form onSubmit={(e)=>handleSubmit(e)} action="/dashboard">
                    <div className=" relative flex flex-row w-full mb-4">
                        <input type="email" placeholder="Enter Your Email" value={email} name='email' onChange={(e)=>{
                            setEmail(e.target.value)
                            }} className="input-form"/>
                    </div>
                    <div className="flex flex-row w-full mb-4">
                        <input type="password" placeholder="Enter Your Password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} className="input-form"/>
                    </div>
                    <button type="submit" className="form-btn">Login</button>
                    <Link to='/forgot'><div className="text-slate-600 underline decoration-sky-500"> Forgot Password?</div></Link>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
