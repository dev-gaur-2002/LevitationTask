import React, {useState} from "react";
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
// import validator from 'validator'


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
        <div>
            <form onSubmit={(e)=>handleSubmit(e)} action="/dashboard">
                <input type="email" value={email} name='email' onChange={(e)=>{
                    setEmail(e.target.value)
                    // handleEmail(e)
                    }}/>
                    {/* {
                        isCorrect?(
                            <span></span>
                        ):(
                            <div>
                                Email not correct
                            </div>
                        )
                    } */}
                <input type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
