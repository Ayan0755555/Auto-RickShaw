import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";

const CardShow = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:4000/api/auto/all_auto"
        );
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(
    (item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.area.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container mx-auto">
      <div class="bg-white flex px-4 py-3 border-b border-[#333] focus-within:border-blue-500 overflow-hidden max-w-md mx-auto font-[sans-serif]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 192.904 192.904"
          width="18px"
          class="fill-gray-600 mr-3"
        >
          <path d="m190.707 180.101-47.078-47.077c11.702-14.072 18.752-32.142 18.752-51.831C162.381 36.423 125.959 0 81.191 0 36.422 0 0 36.423 0 81.193c0 44.767 36.422 81.187 81.191 81.187 19.688 0 37.759-7.049 51.831-18.751l47.079 47.078a7.474 7.474 0 0 0 5.303 2.197 7.498 7.498 0 0 0 5.303-12.803zM15 81.193C15 44.694 44.693 15 81.191 15c36.497 0 66.189 29.694 66.189 66.193 0 36.496-29.692 66.187-66.189 66.187C44.693 147.38 15 117.689 15 81.193z"></path>
        </svg>
        <input
          type="email"
          placeholder="Enter Your Location/Area"
          value={searchQuery}
          onChange={handleSearchInputChange}
          className="w-full outline-none text-sm"
        />
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredData.map((item, index) => (
            <div
              key={index}
              className="border p-4 rounded bg-black hover:bg-orange-200 shadow-md mt-12 card"
            >
              <img
                src={item.image}
                alt={item.name}
                className="mb-2 w-full h-auto pointpic"
              />
              <p className="text-lg text-green-900 font-bold mb-2">
                Name- {item.name}
              </p>
              <p className="text-gray-600 mb-2">Location- {item.location}</p>
              <p className="text-gray-600 mb-2">Area- {item.area}</p>
              <p className="text-gray-600 mb-2">phone No- {item.phone}</p>
              {/* Add more fields here as needed */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CardShow;
