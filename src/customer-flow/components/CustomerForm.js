import React, { useState } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import {Redirect} from 'react-router-dom';

const CustomerForm = () => {
  const [formData, setFormData] = useState({
    customer_name: "",
    address: "",
    phone_number: "",
    zip_code: "",
  });

  const [home, setHome] = useState(false);

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const token = localStorage.getItem("token");
  const user_id = localStorage.getItem("user_id")

  console.log("token", token)
  console.log("user id", user_id)

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("formData", formData);
    axiosWithAuth()
      .post("/customers/profile", formData)
      .then((res) => console.log("res from customer update", res))
      .catch((err) => console.log(err));
    setFormData({
      customer_name: "",
      address: "",
      phone_number: "",
      zip_code: "",
    })
    setHome(true);
    ;
  };
  return (
    <div>
      {home ? <Redirect to="/customerhome" /> : null}
      <h1> Customer Profile</h1>
      <form onSubmit={submitHandler}>
        <label htmlFor="customer_name">Name</label>
        <input
          name="customer_name"
          type="text"
          value={formData.customer_name}
          onChange={changeHandler}
        />
        <label htmlFor="address">Address</label>
        <input
          name="address"
          type="text"
          value={formData.address}
          onChange={changeHandler}
        />
        <label htmlFor="phone_number">Phone Number</label>
        <input
          name="phone_number"
          type="text"
          value={formData.phone_number}
          onChange={changeHandler}
        />
        <label htmlFor="zip_code">Zip Code</label>
        <input
          name="zip_code"
          type="text"
          value={formData.zip_code}
          onChange={changeHandler}
        />
        <button type="submit">Add Your Info</button>
      </form>
    </div>
  );
};

export default CustomerForm;
