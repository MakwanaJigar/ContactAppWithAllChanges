import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  
const [username,usernameupdate]=useState('');
const [password,passwordupdate]=useState('');

// use navigate  for redirect the page
   
const usenavigate =useNavigate();

useEffect(() => {
  sessionStorage.clear();
},[]);


const ProceedLogin=(e) => {
  e.preventDefault();

  if(validate()){
    // console.log('Login Successfully');
    fetch(" http://localhost:5000/user/"+username).then((res) => {
      return res.json();
    }).then((resp) => {
      console.log(resp)
      if(Object.keys(resp).length === 0){
        alert("Please Enter Valid User Name"); 
      }else{
        if(resp.password === password){
              alert('Login Successfully');
              sessionStorage.setItem('username',username);
              usenavigate('/Mycontact');
        }else{
          alert("Password is incorrect");
        }
      }

    }).catch((error) => {
       alert('Login Failed'+error.message); 
    });
  }
}

const validate=() => {
  let result=true;

  if(username ==='' || username === null){
    return false;
    // alert('Please Enter User Name');
  }

  
  if(password ==='' || password === null){
    return false;
    // alert('Please Enter Password');
  }
  return result;
}

  return (
<<<<<<< HEAD
<>
    {/* // LOGIN FORM USING BOOTSTRAP START'S HERE */}

       
    <section className="vh-50" style={{marginTop:'5vh',marginLeft:'1vh',marginRight:'1vh',alignItems:'center',display:'flex',justifyContent:'center'}}>
  <div className="container py-5 h-100 shadow">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-md-8 col-lg-7 col-xl-6">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image"/>
      </div>
            
      <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
      <h1 className="fw-bold">Login</h1>
        <form className='' onSubmit={ProceedLogin} style={{marginTop:'3vh'}}>
          {/* <!-- Email input --> */}
          <div className="form-outline mb-4">
            <input type="text" id="form1Example13" placeholder='User Name' className="form-control form-control-lg" value={username} onChange={e =>usernameupdate(e.target.value)} name="username" required />
          </div>

          {/* <!-- Password input --> */}
          <div className="form-outline mb-4">
            <input type="password" id="form1Example23" placeholder='Password' className="form-control form-control-lg" value={password} onChange={e =>passwordupdate(e.target.value)} name="password" required />
          </div>

          {/* <!-- Submit button --> */}
          <button type="submit" className="btn btn-primary btn-lg btn-block">Login</button>
          <Link className="btn btn-dark btn-lg btn-block mx-2" to='/createuser'>Create User</Link>
        </form>
      </div>
    </div>
  </div>
</section>


   

    {/* // LOH=GIN FORM USING BOOTSTRAP END'S HERE */}


   {/* <div className="row mt-5" >
    <div className="offset-lg-3 col-lg-6">
      <form onSubmit={ProceedLogin}>
=======
   <div className="row d-flex" >
    <div className="offset-lg-3 col-lg-4 ">
      <form onSubmit={ProceedLogin} className="m-3" id="login">
>>>>>>> 41f7ac66d89cdef062910b11b1bfdd20f9274c68
        <div className="card">
          <div className="card-header">
                <h2 className="fw-bold text-success">Login</h2>
          </div>
          <div className="card-body">
            <div className="form-group">
                  <label className="fw-bold">USER NAME</label>
                  <input className="form-control"  type="text" placeholder="User Name" value={username} onChange={e =>usernameupdate(e.target.value)} name="username" required/>
            </div>

            <div className="form-group">
                  <label className="fw-bold">PASSWORD</label>
                  <input className="form-control"  type="password" placeholder="Password" value={password} onChange={e =>passwordupdate(e.target.value)} name="password" required/>
            </div>

          </div>


          <div className="card-footer">
                    <button className="btn btn-primary m-3 fw-bold">Login</button>
                    <Link className="btn btn-dark" to='/createuser'>Create User</Link>
          </div>
        </div>

      </form>
    </div>
   </div> */}
   </>
  );
};

export default Login;
