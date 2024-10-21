import React, { useState } from 'react';

function RegisterPage() {
  const [formData, setFormData] = useState({
    name: '',
    fathersName: '',
    mothersName: '',
    address: '',
    class: '',
    gender: '',
    dob: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-center mb-6 text-orange-400">Student Registration</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Name</label>
            <input 
              type="text" 
              name="name" 
              value={formData.name} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Father's Name</label>
            <input 
              type="text" 
              name="fathersName" 
              value={formData.fathersName} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Mother's Name</label>
            <input 
              type="text" 
              name="mothersName" 
              value={formData.mothersName} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Address</label>
            <textarea 
              name="address" 
              value={formData.address} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Class</label>
            <input 
              type="text" 
              name="class" 
              value={formData.class} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Gender</label>
            <select 
              name="gender" 
              value={formData.gender} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Date of Birth</label>
            <input 
              type="date" 
              name="dob" 
              value={formData.dob} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input 
              type="email" 
              name="email" 
              value={formData.email} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700">Password</label>
            <input 
              type="password" 
              name="password" 
              value={formData.password} 
              onChange={handleChange} 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" 
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
