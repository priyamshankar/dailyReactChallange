import React, { useState } from 'react'
import { NavLink as Link } from "react-router-dom";

const Signup = () => {
  let [userData,setuserData]=useState({
    firstName:"",
    lastName:"",
    userName:"",
    city:"",
    state:"",
    zip:"",
    password:"",
    cnfmPassword:""
  })

  const postData=(event)=>{
    let namePass=event.target.name;
    let valuePass=event.target.value;
    setuserData({...userData,[namePass]:valuePass});
  }
  return (
    <>
    
    <form class="row g-3" action="/signup" method="POST">
  <div class="col-md-4">
    <label for="validationDefault01" class="form-label">First name</label>
    <input type="text" class="form-control" id="validationDefault01" value={userData.firstName} required name="firstName" onChange={postData}/>
  </div>
  <div class="col-md-4">
    <label for="validationDefault02" class="form-label">Last name</label>
    <input type="text" class="form-control" id="validationDefault02" value={userData.lastName} required name="lastName" onChange={postData}/>
  </div>
  <div class="col-md-4">
    <label for="validationDefaultUsername" class="form-label">Username</label>
    <div class="input-group">
      <span class="input-group-text" id="inputGroupPrepend2">@</span>
      <input type="text" class="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2"
        required name="userName" value={userData.userName} onChange={postData}/>

    </div>
  </div>
  <div class="col-md-6">
    <label for="validationDefault03" class="form-label">City</label>
    <input type="text" class="form-control" id="validationDefault03" required name="city" value={userData.city} onChange={postData}/>
  </div>
  <div class="col-md-3">
    <label for="validationDefault04" class="form-label">State</label>
    <select class="form-select" id="validationDefault04" required name="state" value={userData.state} onChange={postData}>
      <option selected disabled value="">Choose...</option>
      <option>...</option>
      <option value="bihar">bihar</option>
      <option value="MadhyaPradesh">Madhya Pradesh</option>
      <option value="Delhi">Delhi</option>
    </select>
  </div>
  <div class="col-md-3">
    <label for="validationDefault05" class="form-label">Zip</label>
    <input type="text" class="form-control" id="validationDefault05" required name="zip" value={userData.zip} onChange={postData}/>
  </div>
  <div>
    <div class="col-md-4">
      <label for="passwordSign" class="form-label">password</label>
      <input type="password" id="passwordSign" class="form-control" name="password" value={userData.password} onChange={postData}/>
      <label for="cnfmPasswordSign" class="form-label">Confirm Password</label>
      <input type="password" id="cnfmPasswordSign" class="form-control" name="cnfmPassword" value={userData.cnfmPassword} onChange={postData}/>
    </div>
  </div>
  <div class="col-12">
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="invalidCheck2" required/>
      <label class="form-check-label" for="invalidCheck2">
        Agree to terms and conditions
      </label>
    </div>
  </div>
  <div class="col-12">
    <button class="btn btn-primary" type="submit" value="registration">Submit form</button>
  </div>
</form>

    </>
  )
}

export default Signup