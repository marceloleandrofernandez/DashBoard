import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./sensorForm.css";
export const Form = () => {
  const location = useLocation();

  const data = location.state?.data;

  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (data) {
      setFormData({ name: data.name, email: data.email });
    }
  }, [data]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    validateFormWithJS();
  };

  function validateFormWithJS() {
    const name = document.querySelector('input[name="name"]')?.value;
    const email = document.querySelector('input[name="email"]')?.value;

    if (!name) {
      alert("Please enter sensor name.");
      return false;
    }

    if (!email) {
      alert("Please enter description.");
      return false;
    }
  }
  return (
    <>
      <form className="form-container" onSubmit={handleSubmit}>
        <h1 className="sensor-form-title">Add Sensor</h1>
        <label>
          Sensor Name:
          <input
            type="text"
            name="name"
            value={formData.name || ""}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="email"
            value={formData.email || ""}
            onChange={handleInputChange}
          />
        </label>
        <button
          className="bg-green-500 hover:bg-red-700 text-light-gray font-bold my-3 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
      <Link to="/">
        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
          <span>Home</span>
        </button>
      </Link>
    </>
  );
};

export default Form;
