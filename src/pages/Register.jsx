import '../stylesheet/login.css'
import React, {useState} from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsKey } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import logo from "../image/logo.png"
import { useNavigate } from "react-router-dom";




const Register = () => {

  const [logindata , setLoginData] = useState(
    {
      firstName: "",
      lastName:"",
      id:"",
      password: "",
      confirmPassword: ""      
    }
  )
  const navigate = useNavigate()

  const hadleInput = (e) => {
    const {name, value}= e.target;
    setLoginData({...logindata, [name]: value})
  }
   
  const isValidate = () => {
    let isProceed = true;
    let errorMessages = ""; // Create a variable to store error messages
  
    if (
      logindata.firstName === "" ||
      logindata.lastName === "" ||
      logindata.userName === "" ||
      logindata.id === "" ||
      logindata.password === "" ||
      logindata.confirmPassword === ""
    ) {
      isProceed = false;
      errorMessages += "Please fill all inputs. ";
    }
  
    if (logindata.confirmPassword !== logindata.password) {
      isProceed = false;
      errorMessages += "Password and Confirm Password do not match. ";
    }
  
    if (!isProceed) {
      toast.error(errorMessages);
    } else {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(logindata.id)) {
        isProceed = false;
        toast.warning("Please enter a valid email");
      }
    }
  
    return isProceed;
  };
  

  const handleSubmit = (e) =>{
    
    e.preventDefault();
    console.log(logindata)
if(isValidate ()) {
    fetch(" http://localhost:8000/user", {
      method: "POST",
      headers: {'content-type' : 'application/json'},
      body: JSON.stringify(logindata)
    }).then((res)=>{
        toast.success("Registered Successfully.")
        navigate('/login')
    }).catch((err)=>{
      toast.error("Failed:" + err)
      console.log(err)
    })
    }}
  
  return (
    <div className="main_log">
        <form onSubmit={handleSubmit} action="submit" className="register">
        <img src={logo} alt="" />
        <div className="log_head">
          <h3>Register</h3>
          <p>Fill in your credentials to register as a User</p>
        </div>

            <div className="input_log">
              <label htmlFor="firstName">
            
                First Name
              </label>
              <div ><HiOutlineUser className="icon" />
                 <input 
                id="firstName"
                name="firstName"
                type="text"
                value={logindata.firstName}
                onChange={hadleInput}
            
              />
              </div>
             
            </div>
           


         
            <div className="input_log">
              <label htmlFor="lastName">
                
                Last Name
              </label>
              <div ><HiOutlineUser className="icon" /> <input 
                id="lastName"
                name="lastName"
                type="text"
                value={logindata.lastName}
                onChange={hadleInput}
      
          
              /></div>
              
            </div>
       

          {/* <div className="input_wrap">
            <div className="input-h">
              <label htmlFor="username">
                <HiOutlineUser className="icon" />
                Username
              </label>
              <input id="user" name="userName" 
               value={logindata.userName}
                onChange={hadleInput} />
            </div>
          </div> */}

          
            <div className="input_log">
              <label htmlFor="Email">
                 
                Email
              </label>
              <div ><AiOutlineMail className="icon" /><input
                id="Email"
                name="id"
                type="Email"
                value={logindata.id}
                onChange={hadleInput}
              
              /></div>
              
            </div>
         

        
            <div className="input_log">
              <label htmlFor="password">
                
                Password
              </label>
              <div ><BsKey className="icon" /> <input
                id="password"
                name="password"
                type="password"
                value={logindata.password}
                onChange={hadleInput}
         
              /></div>
              
            </div>
         

            <div className="input_log">
              <label htmlFor="confirmPassword">
                
                Confirm Password
              </label>
              <div ><BsKey className="icon" /> <input
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                value={logindata.confirmPassword}
                onChange={hadleInput}
             
              /></div>
              
            </div>
        

          

        <button className="form_btn"  type="submit">
                Sign Up
          </button>


          <p>Already Registered? <Link className='already' to="/login">Login</Link></p>
        </form>
      </div>

    
  );
};

export default Register;
