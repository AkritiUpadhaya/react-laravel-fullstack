import React, { useContext, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import axiosClient from '../axios-client'
import { useStateContext } from '../contexts/ContextProvider'
function SignUp() {
  const nameRef= useRef()
  const emailRef= useRef()
  const passwordRef= useRef()
  const passwordConfirmRef= useRef()
  const [errors, setErrors]= useState(null)
  const {setUser,setToken}= useStateContext()
  const onSubmit=(ev)=>{
   ev.preventDefault()
   const payLoad= {
    name: nameRef.current.value,
    email: emailRef.current.value,
    password: passwordRef.current.value,
    password_confirmation: passwordConfirmRef.current.value,
   }
   console.log(payLoad)
   axiosClient.post('/signUp', payLoad)
   .then(({data})=>{
        setUser(data.user)
        setToken(data.token)
   })
   .catch(err=>{
    const response= err.response 
    if(response && response.status== 422){
      setErrors(response.data.errors)
    }
   })
  }
  return (
    <div className='login-signup-form animated fadeInDown'>
      <div className="form">
        <form onSubmit={onSubmit}>
          <h1 className='title'>Sign up for free</h1>
          {errors && <div className='alert'>
            {Object.keys(errors).map(key=>(
              <p key={key}>{errors[key][0]}</p>
            ))}
            </div>}
          <input ref={nameRef} type='text' placeholder='Full Name' />
          <input ref={emailRef} type='email' placeholder='Email' />
          <input ref={passwordRef} type='password' placeholder='Password' />
          <input ref={passwordConfirmRef} type='password' placeholder='Confirm Password' />
          <button className='btn btn-block'>Sign up</button>
          <p className='message'>
            Already Registered? <Link to="/Login">Sign in</Link>
            </p> 
        </form>
      </div>
    </div>
  )
}

export default SignUp
