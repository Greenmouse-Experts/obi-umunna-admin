import React , {useState} from "react";
import { HiOutlineMail } from "react-icons/hi";
import { GoLock } from "react-icons/go";
import "../stylesheet/login.css"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import logo from "../image/logo.png"


const Login = () => {

  const [logData, setLogData] = useState(
    {
    logEmail: "",
    password: ""

    })

    const handleInput = (e)=>{
      const {name , value} = e.target;
      setLogData({...logData, [name]:value})
    }

    const  usenavigate = useNavigate()

    const proceed = (e) => {
      e.preventDefault();
      if(logValidate()){
        fetch("http://localhost:8000/user/"+logData.logEmail).then((res)=>{
          return res.json();
        }).then((resp)=>{
          if(Object.keys(resp).length === 0){
            toast.error("Please Enter a valid Email");
          }else{
            if(resp.password === logData.password){
              usenavigate("/dashboard/")
              toast.success("Welcome " +resp.firstName)
              localStorage.setItem('fName', resp.firstName)
            }else{
              toast.warn('Password is incorrect');
            }
          }
        }).catch((err)=>{
          toast.error("Login failed due to: " +err.message)
        })
        
      }
    }

    const logValidate = ()=>{
      let result = true
      if (logData.logEmail === "" || logData.logEmail === null){
        result = false
        toast.error("Please enter Email")
      }

      if (logData.password === "" || logData.password === null){
        result = false
        toast.error("Please enter Password")
      }

      return result
    }
  return (
    <div className="main_login">
      <form onSubmit={proceed} action="submit" className="login">
        <img src={logo} alt="" />
        <div className="log_head">
          <h3>User Login</h3>
          <p>Fill in your credentials to login to your dashboard</p>
        </div>
        <div className="input_log">
          <label htmlFor="email">Email</label>
          <div>
            {" "}
            <HiOutlineMail />{" "}
            <input type="email" name="logEmail" placeholder="Email" onChange={handleInput} value={logData.logEmail}/>
          </div>
        </div>
        <div className="input_log">
          <label htmlFor="password">Password</label>
          <div>
            {" "}
            <GoLock />{" "}
            <input type="password" name="password" placeholder="Password" onChange={handleInput} value={logData.password} />
          </div>
        </div>
  
        <button type="submit" className="login_btn">Login</button>

        
      </form>
    </div>
  );
};

export default Login;
