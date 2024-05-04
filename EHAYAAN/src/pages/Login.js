import React, { useContext, useState } from "react";
import loginIcons from "../assest/signin.gif";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { toast } from "react-toastify";
import Context from "../context";

const Login = () => {
  const [show, setShow] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const { fetchUserDetails } = useContext(Context);

  const handleOnchange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials: "include",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const dataApi = await dataResponse.json();

    if (dataApi.success) {
      toast.success(dataApi.message);
      navigate("/");
      fetchUserDetails();
    }

    if (dataApi.error) {
      toast.error(dataApi.message);
    }
  };

  console.log("data is coming", data);

  return (
    <section id="login">
      <div className="max-auto container p-4">
        <div className="bg-white shadow-md p-2 py-4 w-full max-w-md mx-auto">
          <div className="w-20 h-20 mx-auto">
            <img src={loginIcons} alt="login icons" />
          </div>

          <form className="p-6" onSubmit={handleSubmit}>
            <div className="grid">
              <label htmlFor="email">Email :</label>
              <div className="bg-slate-200 p-2">
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={data.email}
                  onChange={handleOnchange}
                  className="w-full h-full  outline-none bg-transparent"
                />
              </div>
            </div>
            <div className="mt-6">
              <label htmlFor="email">Password :</label>
              <div
                className="bg-slate-200 p-2 flex "
                onClick={() => setShow((preve) => !preve)}
              >
                <input
                  type={show ? "text" : "password"}
                  placeholder="Enter Password"
                  name="password"
                  value={data.password}
                  onChange={handleOnchange}
                  className="w-full h-full  outline-none bg-transparent"
                />
                <div className="cursor-pointer">
                  <span>{show ? <FaEyeSlash /> : <FaEye />}</span>
                </div>
              </div>
              <Link
                to="/forgot-password"
                className="block w-fit ml-auto hover:underline hover:text-blue-800"
              >
                Forgot Password
              </Link>
            </div>
            <button className="bg-purple-600 text-white px-6 py-2 rounded-r-full hover:bg-yellow-600 mt-6 mx-auto block">
              Login
            </button>
          </form>
          <p className="my-4">
            Don't have a Account?
            <Link
              to="/signup"
              className="hover:text-orange-600 text-pink-900 hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
