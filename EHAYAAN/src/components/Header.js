import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SummaryApi from "../common";
import { setUserDetails } from "../store/userSlice";
import { toast } from "react-toastify";

const Header = () => {
  const user = useSelector((state) => state?.user?.user);

  console.log(user, "heyuser");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = async () => {
    const fetchData = await fetch(SummaryApi.logout_user.url, {
      method: SummaryApi.logout_user.method,
      credentials: "include",
    });

    const data = await fetchData.json();

    if (data.success) {
      toast.success(data.message);
      dispatch(setUserDetails(null));
      navigate("/");
    }

    if (data.error) {
      toast.error(data.message);
    }
  };

  return (
    <div className="h-16 shadow-md">
      <div className="h-full container mx-auto flex items-center px-4 justify-around">
        <div className="logo font-bold font-serif">
          <Link to="/" className="font-bold text-lg">
            EHYAN
          </Link>
        </div>

        <div className="pl-4 with">
          <Link to="/" className="now">
            Home
          </Link>
          <Link to="/auto" className="now">
            Auto
          </Link>
          <Link to="/booking" className="now">
            Booking
          </Link>
        </div>

        <div className="flex items-center gap-7">
          <div className="text-3xl cursor-pointer">
            {user?.profilePic ? (
              <img
                src={user?.profilePic}
                className="w-10 h-10 rounded-full"
                alt={user?.name}
              />
            ) : (
              <FaUserCircle />
            )}
          </div>

          <div>
            {user?._id ? (
              <button
                onClick={handleLogout}
                className="px-3 py-1 rounded-full text-white bg-green-700 hover:bg-pink-700"
              >
                Logout
              </button>
            ) : (
              <Link
                to={"/login"}
                className="px-3 py-1 rounded-full text-white bg-purple-900 hover:bg-yellow-900"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
