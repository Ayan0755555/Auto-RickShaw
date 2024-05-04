import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

const AddNewAuto = () => {
  const [inputs, setinputs] = useState({
    name: "",
    email: "",
    phone: "",
    auto: "",
    location: "",
    area: "",
    aadhar: "",
    age: "",
    image: "",
    description: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setinputs((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    //console.log(inputs);

    axios({
      url: "http://localhost:4000/api/auto/add",
      method: "post",
      data: {
        ...inputs,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.status === 0) {
          toast.error(res.data.error[0].msg, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }

        if (res.data.status === 1) {
          toast.success(res.data.message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="w-full absolute mt-[80px] flex justify-center items-center">
      <form
        className="bg-white p-4 shadow-md border rounded my-5 py-3"
        onSubmit={submitHandler}
      >
        <h2 className="text-center w-full p-3 text-gray-500 text-xl font-bold">
          Add New As A AutoOwner/Drive (Apka pass auto hona jaruri hai.)
        </h2>
        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" htmlFor="username">
            Your Name
          </label>
          <input
            type="text"
            placeholder="name"
            id="name"
            name="name"
            value={inputs.name}
            onChange={onChangeHandler}
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md border border-gray-500 rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" htmlFor="email">
            Enter Your Email
          </label>
          <input
            type="email"
            placeholder="email"
            id="email"
            value={inputs.email}
            onChange={onChangeHandler}
            name="email"
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md  border border-gray-500 rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" htmlFor="location">
            Enter Your Location/city
          </label>
          <input
            type="location"
            placeholder="Location"
            id="location"
            value={inputs.location}
            onChange={onChangeHandler}
            name="location"
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md  border border-gray-500 rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" htmlFor="area">
            Enter Your Area
          </label>
          <input
            type="area"
            placeholder="area"
            id="area"
            value={inputs.area}
            onChange={onChangeHandler}
            name="area"
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md  border border-gray-500 rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" htmlFor="aadhar">
            Enter Your Aadhar-Card Number
          </label>
          <input
            type="aadhar"
            placeholder="aadhar"
            id="aadhar"
            value={inputs.aadhar}
            onChange={onChangeHandler}
            name="aadhar"
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md  border border-gray-500 rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" htmlFor="phone">
            Enter Your Mobile No.
          </label>
          <input
            type="Number"
            placeholder="phone"
            id="phone"
            value={inputs.phone}
            onChange={onChangeHandler}
            name="phone"
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md  border border-gray-500 rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" htmlFor="auto">
            Enter Your AutoNumber(if you don't have auto number? Please enter
            "None".)
          </label>
          <input
            type="auto"
            placeholder="auto"
            id="auto"
            value={inputs.auto}
            onChange={onChangeHandler}
            name="auto"
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md  border border-gray-500 rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" htmlFor="password">
            Enter Your Age
          </label>
          <input
            type="age"
            placeholder="Age"
            id="age"
            value={inputs.age}
            onChange={onChangeHandler}
            name="age"
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md  border border-gray-500 rounded"
            required
          />
        </div>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" htmlFor="password">
            Auto Image (Link)
          </label>
          <textarea
            name="image"
            value={inputs.image}
            onChange={onChangeHandler}
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md  border border-gray-500 rounded"
            required
          ></textarea>
        </div>

        <div className="mb-2">
          <label className="text-gray-500 mb-2 font-bold" htmlFor="password">
            Description
          </label>
          <textarea
            name="description"
            value={inputs.description}
            onChange={onChangeHandler}
            className="w-full py-2 px-3 text-gray-500 shadow focus:outline-none focus:shadow-md  border border-gray-500 rounded"
            required
          ></textarea>
        </div>

        <div className="flex justify-between items-center my-3 mb-5">
          <button className="text-white font-bold bg-green-500 py-2 px-3 border rounder hover:bg-blue-700">
            Submit Now..
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AddNewAuto;
