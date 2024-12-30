import React, { useState } from "react";

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    dob: "",
    presentAddress: "",
    permanentAddress: "",
    city: "",
    postalCode: "",
    country: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const profileData = {
    //   name: "Charlene Reed", // Replace with form state values
    //   username: "CharleneR",
    //   email: "charlenereed@gmail.com",
    //   password: "********",
    //   dob: "1990-01-01",
    //   presentAddress: "San Jose, California, USA",
    //   permanentAddress: "San Jose, California, USA",
    //   city: "San Jose",
    //   postalCode: "45962",
    //   country: "USA",
    // };
    
      try {
        const response = await fetch("http://localhost:5000/save-profile", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
    
        if (!response.ok) {
          throw new Error("Failed to save profile data.");
        }
    
        const result = await response.json();
        console.log(result.message);
      } catch (error) {
        console.error("Error saving profile data:", error);
      }
    };

    return (
      <div className=" mx-auto my-28 p-8 bg-white border border-gray-300 rounded-lg shadow-md max-w-6xl">
        {/* Tabs */}
        <div className="flex space-x-8 border-b border-gray-200 pb-4 mb-6">
          <button className="text-blueS-500 font-semibold border-b-2 border-blue-500 pb-2">Edit Profile</button>
          <button className="text-gray-500 hover:text-blue-500">Preferences</button>
          <button className="text-gray-500 hover:text-blue-500">Security</button>
        </div>
  
        <form onSubmit = {handleSubmit}>
          {/* Profile Picture and Info */}
          <div className="flex items-start mb-8 space-x-6">
            <div className="relative">
              <img
                src="https://www.kindpng.com/picc/m/28-283342_professional-employee-image-png-transparent-png.png"
                alt="Profile"
                className="w-24 h-24 rounded-full border border-gray-300"
              />
              <button
                type="button"
                className="absolute bottom-0 right-0 bg-blue-500 text-white text-sm p-1 rounded-full hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
            <div className="flex-grow">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Your Name</label>
                  <input
                    type="text"
                    name="name"
              value={formData.name}
              onChange={handleChange}
                    placeholder="Charlene Reed"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">User Name</label>
                  <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Charlene Reed"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
              value={formData.email}
              onChange={handleChange}
                    placeholder="charlenereed@gmail.com"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Password</label>
                  <input
                    type="password"
                    name="password"
              value={formData.password}
              onChange={handleChange}
                    placeholder="********"
                    className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
              </div>
            </div>
          </div>
  
          {/* Address and Additional Info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 ml-[122px]">
            <div>
              <label className="block text-sm font-medium mb-1">Date of Birth</label>
              <input
                type="date"
                name="dob"
              value={formData.dob}
              onChange={handleChange}
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Present Address</label>
              <input
                type="text"
                name="presentAddress"
                value={formData.presentAddress}
                onChange={handleChange}
                placeholder="San Jose, California, USA"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Permanent Address</label>
              <input
                type="text"
                name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
                placeholder="San Jose, California, USA"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                placeholder="San Jose"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Postal Code</label>
              <input
                type="text"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                placeholder="45962"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                placeholder="USA"
                className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
  
          {/* Save Button */}
          <div className="mt-6 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    );
  };

export default ProfileForm;
