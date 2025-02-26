import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import "./LoginModel.css"
import supabase from '../../supabase';
import { useDispatch } from "react-redux";
import { setUser } from "../../slices/userSlice";


const LoginModel = ({isOpen, setIsOpen}) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loginType, setLoginType] = useState(true)

  const dispatch = useDispatch()

  const signup = async () => {
    const {data,error} = await supabase.auth.signUp({
      email,
      password,
    })
    if (data.user) {
      alert("Account created successfully. Please verify your email.")
    }
  }

  const login = async () => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    console.log(data,error);
    if(error){
    alert(error?.message)
    return
  }
  dispatch(setUser(data.user))
}


  return isOpen ? (
    <div className="overlay">
      <div className="LoginModel">
        <div className="left">
          <div className="left-container">
            <p className="Login-title">Login</p>
            <p className="Login-des">
              Get access to your Orders, Wishlist and Recommendations...
            </p>
          </div>
        </div>
        <div className='right'>
          <input   
          type='email'
          className='Login-input'
          placeholder='Email'
          required value={email}
          onChange={(e) => setEmail (e.target.value)}
          />
          <input   
          type='password'
          className='Login-input'
          placeholder='password'
          required value={password}
          onChange={(e) => setPassword (e.target.value)}
          />
          <p className="termsandcon">
            By continuing, you agree to Wholesale Mart's{" "}
            <span style={{ color: "blue" }}>Terms of Use</span> and
            <span style={{ color: "blue" }}> Privacy Policy.</span>{" "}
          </p>

          {
            loginType ? (
              <button className='Login-button' onClick={login}>Login</button>
            ) : (
              <button className='Signup-button' onClick={signup}>Signup</button>
            )}
            {
              loginType ? (
                <p className='Login-signup' onClick={() => setLoginType(false)}>
                  New to Wholemart? Create an Account
                </p>
              ) : (
                <p className='Login-signup' onClick={() => setLoginType(true)}>
                  Already an user? Login to an account                </p>
              )}
        </div>
        <div className='close' onClick={() => setIsOpen(false)}>
        <RxCross2 />
        </div>
      </div>
    </div>
  ) : (<></>);
  

}

export default LoginModel