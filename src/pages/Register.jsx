import '../stylesheet/login.css'
import React, {useState} from "react";
// import { AiOutlineMail } from "react-icons/ai";
// import { BsKey } from "react-icons/bs";
// import { HiOutlineUser } from "react-icons/hi";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import logo from "../image/logo.png"
import { useNavigate } from "react-router-dom";
import axios from 'axios';


const Register = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [logindata , setLoginData] = useState(
    {
      first_name: "",
      last_name: "",  
      email: "",
      password: "",
      username: "",
       password_confirmation: "",
      account_type: "", 
      phone_number: "", 
      address: "", 
      gender: "", 
      marital_status: "", 
      passport: null, 
      certificates: null, 
      place_business_employment: "", 
      nature_business_employment: "", 
      membership_professional_bodies: "", 
      previous_insolvency_work_experience: "", 
      referee_email_address: "",    
    }
  )


  
  
  const navigate = useNavigate()

  // const hadleInput = (e) => {
  //   const {name, value}= e.target;
  //   setLoginData({...logindata, [name]: value})
  // }
   
  const hadleInput = (e) => {
    const { name, value, type, files } = e.target;
  
    if (type === 'file') {
      // console.log(files);
      // console.log(name);
      if (files.length > 0) {
        setLoginData({
          ...logindata,
          [name]: files[0],
        });
        console.log(logindata);
      }
    } else {
      setLoginData({ ...logindata, [name]: value });
    }
  };

  const isValidate = () => {
    let isProceed = true;
    let errorMessages = ""; // Create a variable to store error messages
  
    if (
      logindata.first_name === "" ||
      logindata.last_name === "" ||
      logindata.username === "" ||
      logindata.email === "" ||
      logindata.password === "" ||
      logindata.password_confirmation === "" ||
      logindata.account_type === "" ||
      logindata.phone_number === "" ||
      logindata.address === "" ||
      logindata.gender === "" ||
      logindata.marital_status === "" ||
      logindata.passport === null ||
      logindata.certificates === null ||
      logindata.place_business_employment === "" ||
      logindata.nature_business_employment === "" ||
      logindata.membership_professional_bodies === "" ||
      logindata.previous_insolvency_work_experience === "" ||
      logindata.referee_email_address === "" 
    ) {
      isProceed = false;
      errorMessages += "Please fill all inputs. ";
    }

    if(logindata.password.length <= 7){
      isProceed = false;
      toast.error("Password must be at least 8 Letters")
    }
  
    if (logindata.password_confirmation !== logindata.password) {
      isProceed = false;
      errorMessages += "Password and Confirm Password do not match. ";
    }
  
    if (!isProceed) {
      toast.error(errorMessages);
    } else {
      if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(logindata.email)) {
        isProceed = false;
        toast.warning("Please enter a valid email");
      }
    }
  
    return isProceed;
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(logindata);
    const fd = new FormData()
    Object.entries(logindata).forEach(([key, value])=>{
      fd.append(key , value);
    }
    )
    if (isValidate()) {
      setIsLoading(true); // Set loading state to true
  
      axios.post('https://bripan.greenmouseacademy.com.ng/api/auth/register', fd, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
        if(res.status){
        toast.success("Registered Successfully");
        navigate('/login')
        }else{
        toast.error(res.data.message);
        }
      })
      .catch((err) => {
        toast.error('Failed: ' + err);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false); 
      });
    }
  };
  

  
  return (
    <div className="main_log">
        <form onSubmit={handleSubmit} action="submit" className="register">
  <img src={logo} alt="" />
  <div className="log_head">
    <h3>Register</h3>
    <p>Fill in your credentials to register as a Member</p>
  </div>

  {/* Add Account Type */}
  <div className="input_">
  <label>Account Type</label>
  <div className='radio'>
    <div className="">
      <input
      type="radio"
      id="associate"
      name="account_type"
      value="Associate"
      checked={logindata.account_type === "Associate"}
      onChange={hadleInput}
    />
    <label htmlFor="associate">Associate</label>
    </div>
    
    <div className=""> <input
      type="radio"
      id="fellow"
      name="account_type"
      value="Fellow"
      checked={logindata.account_type === "Fellow"}
      onChange={hadleInput}
    />
    <label htmlFor="fellow">Fellow</label>
      </div>    
   
  </div>
</div>


    <div className="double">
    <div className="input_log">
    <label htmlFor="firstName">First Name</label>
    <div>
      {/* <HiOutlineUser className="icon" /> */}
      <input
        placeholder='Enter First Name'
        id="first_name"
        name="first_name"
        type="text"
        value={logindata.first_name}
        onChange={hadleInput}
      />
    </div>
  </div>

  <div className="input_log">
    <label htmlFor="last_name">Last Name</label>
    <div>
      {/* <HiOutlineUser className="icon" /> */}
      <input
      placeholder='Enter Last Name'
        id="last_name"
        name="last_name"
        type="text"
        value={logindata.last_name}
        onChange={hadleInput}
      />
    </div>
  </div>
    </div>


    <div className="double">
       <div className="input_log">
    <label htmlFor="email">Email</label>
    <div>
      {/* <AiOutlineMail className="icon" /> */}
      <input
      placeholder='Enter Email'
        id="email"
        name="email"
        type="email"
        value={logindata.email}
        onChange={hadleInput}
      />
    </div>
  </div>

   
  <div className="input_log">
      <label htmlFor="phone_number">Phone Number</label>
      <div>
         <input
         placeholder='Enter Phone Number'
          id="phone_number"
          name="phone_number"
          type="text"
          value={logindata.phone_number}
          onChange={hadleInput}
        />
      </div>
    </div>

    </div>
 
  <div className="input_log">
          <label htmlFor="username">Username</label>
          <div>
            {/* <HiOutlineUser className="icon" /> */}
            <input
            placeholder='Enter Username'
              id="username"
              name="username"
              type="text"
              value={logindata.username}
              onChange={hadleInput}
            />
          </div>
   </div>


  {/* Add Address */}
  <div className="input_log">
    <label htmlFor="address">Address</label>
    <div>
      <input
      placeholder='Enter Your Address'
        id="address"
        name="address"
        type="text"
        value={logindata.address}
        onChange={hadleInput}
      />
    </div>
  </div>

<div className="double">
   <div className="input_log">
    <label htmlFor="gender">Gender</label>
    <div>
      <select
        id="gender"
        name="gender"
        value={logindata.gender}
        onChange={hadleInput}
      >
        <option disabled value="">Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  </div>
   <div className="input_log">
    <label htmlFor="marital_status">Marital Status</label>
    <div>
      <select
        id="marital_status"
        name="marital_status"
        value={logindata.marital_status}
        onChange={hadleInput}
      >
        <option disabled value="">Select Marital Status</option>
        <option value="Married">Married</option>
        <option value="Single">Single</option>
        <option value="Divorced">Divorced</option>
        <option value="Engaged">Engaged</option>
      </select>
    </div>
  </div>
</div>
 

  
 

  <div className="input_log">
    <label htmlFor="passport">Please upload your passport</label>
    <div>
      <input
        id="passport"
        name="passport"
        type="file"
        accept="image/*"
        onChange={hadleInput}
      />
    </div>
  </div>

  <div className="input_log">
    <label htmlFor="certificates">Please Upload your Certificates (JPEG, PNG or PDF)</label>
    <div>
      <input
        id="certificates"
        name="certificates"
        type="file" accept=".jpeg, .jpg, .png, .pdf"
         onChange={hadleInput}
      />
    </div>
  </div>

  {/* Add Place of Business */}
  <div className="input_log">
    <label htmlFor="place_business_employment">Place of Business or Employment</label>
    <div>
      <input
      placeholder='Where do you work? '
        id="place_business_employment"
        name="place_business_employment"
        type="text"
        value={logindata.place_business_employment}
        onChange={hadleInput}
      />
    </div>
  </div>

  <div className="input_log">
    <label htmlFor="nature_business_employment">Nature of Business or Employment</label>
    <div>
      <input
      placeholder='Type of work yo do'
        id="nature_business_employment"
        name="nature_business_employment"
        type="text"
        value={logindata.nature_business_employment}
        onChange={hadleInput}
      />
    </div>
  </div>
  <div className="input_log">
  <label htmlFor="membership_professional_bodies">Membership of other Professional Bodies/Reg. Numbers</label>
  <div>
    <input
    placeholder='Professional Bodies/Reg. Numbers'
      id="membership_professional_bodies"
      name="membership_professional_bodies"
      type="text"
      value={logindata.membership_professional_bodies}
      onChange={hadleInput}
    />
  </div>
</div>

<div className="input_log">
  <label htmlFor="previous_insolvency_work_experience">Detials of Previous Insolvency Work Experience</label>
  <div>
    <input
    placeholder='Previous Insolvency Work Experience'
      id="previous_insolvency_work_experience"
      name="previous_insolvency_work_experience"
      type="text"
      value={logindata.previous_insolvency_work_experience}
      onChange={hadleInput}
    />
  </div>
</div>

<div className="input_log">
  <label htmlFor="referee_email_address">Referee Email Address</label>
  <div>
    <input
    placeholder='Enter Referee Email Address'
      id="referee_email_address"
      name="referee_email_address"
      type="text"
      value={logindata.referee_email_address}
      onChange={hadleInput}
    />
  </div>
</div>

<div className="double">
  <div className="input_log">
    <label htmlFor="password">Password</label>
    <div>
      {/* <BsKey className="icon" /> */}
      <input
        placeholder='Enter Passowrd'
        id="password"
        name="password"
        type="password"
        value={logindata.password}
        onChange={hadleInput}
      />
    </div>
  </div>
  <div className="input_log">
    <label htmlFor="password_confirmation">Confirm Password</label>
    <div>
      {/* <BsKey className="icon" /> */}
      <input
      placeholder='Confirm Password'
        id="password_confirmation"
        name="password_confirmation"
        type="password"
        value={logindata.password_confirmation}
        onChange={hadleInput}
      />
    </div>
  </div>
</div>


  

  <button className="form_btn" type="submit" disabled={isLoading}>
  {isLoading ? "Loading..." : "Sign Up"}
</button>


  <p>
    Already Registered? <Link className="already" to="/login">Login</Link>
  </p>
</form>

      </div>

    
  );
};

export default Register;
