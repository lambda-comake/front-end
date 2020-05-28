import React, { useState} from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import {getProfile, updateProfile, createProfile} from '../actions/profileAction'





const UserProfile = (props) => {
  
  const { push } = useHistory();
 
  // const [user, setUser] = useState();

//   useEffect(() => {
//     props.getProfile(localStorage.getItem("id"));
//   }, []);

//   const initialState = {
//     email: props.email,
//     firstName: props.firstName,
//     lastName: props.lastName,
//     age: (props.age),
//     user_id: Number(localStorage.getItem('user_id'))
   
//   };

  const [userInfo, setUserInfo] = useState({
      email: '',
      firstName: '',
      lastName: '',
      age: "",
      user_id: Number(localStorage.getItem('user_id'))
  });
  console.log('userInfo',userInfo)

  const handleChange = (e) => {
    e.persist();
    const name= e.target.name
    // console.log(initialState.user_id)
    if(name === 'age'){
        setUserInfo({
            ...userInfo,
            [name] : parseInt(e.target.value)
        })
    }else{
    setUserInfo({

      ...userInfo,
      [e.target.name]: e.target.value,
      
    });
  };
}

  const handleSubmit = (e) => {
    e.preventDefault();
    props.createProfile(userInfo);

   
  };

  const logout = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    window.location.reload(false);
  };

  return (
    <>
      <header>
        <nav>
          <button onClick={() => push("/")}>Main</button>
        </nav>
      </header>
      <div>
      <h2> Create Profile </h2>

      
      <div className="userData">
        
      </div>
      <div className="createForm">
        <form onSubmit={handleSubmit}>
        <input
            label="Email"
            type="text"
            name="email"
            placeholder="Email"
            value={userInfo.email}
            onChange={handleChange}
          />
        
          <input
            label="First Name"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={userInfo.firstName}
            onChange={handleChange}
          />
          <input
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={userInfo.lastName}
            onChange={handleChange}
          />
          <input
            label="age"
            type="number"
            name="age"
            placeholder="age"
            value={userInfo.age}
            onChange={handleChange}
          />
          <button>Create</button>
        </form>
      <div >
        {/* <button onClick={() => push("/myIssues")}>My Open Issues</button> */}
        <button className="logoutButton" onClick={logout}>
          Logout
        </button>
        </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  
  return {
    email: state.user.username,
    first_name: state.user.first_name,
    last_name: state.user.last_name,
    id: state.user.id,
    isFetching: false,
   
  };
};

export default connect(mapStateToProps, {createProfile, getProfile, updateProfile })(
  UserProfile
);