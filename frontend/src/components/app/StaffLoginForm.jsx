import React, { useState } from "react";
import InputField from "../utils/InputField";
import show from "../../assets/icons/eye.png";
import hide from "../../assets/icons/hidden.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function StaffLoginForm() {
  const [loginData, setLoginData] = useState({
    role: "",
    mobileNo: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleOnSubmit = () => {
    // make post request to the api
    if (loginData.role === "deptCoord") {
      // axios
      //   .post(`${import.meta.env.VITE_BACKEND_URL}/departmentIncharge/login`, {
      //     phone_number: loginData.mobileNo,
      //     password: loginData.password,
      //   })
      //   .then((response) => {
      //     console.log(response.data.teams);
      //     localStorage.setItem("teams", JSON.stringify(response.data.teams));
      //     navigate("/dept-coordinator/registered-students", {
      //       state: response.data.teams
      //     });
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //     setIsError(true);
      //   });
      navigate("/closed");
    }
    else{
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/eventCoordinator/login`, {
          phone_number: loginData.mobileNo,
          password: loginData.password,
        })
        .then((response) => {
          console.log(response.data.teams);
          localStorage.setItem("teams", JSON.stringify(response.data.teams)); // Ensure data is stringified
          localStorage.setItem("eventName", response.data.event_name);
          
          navigate("/event-coordinator/registered-students");
        })
        .catch((error) => {
          console.log(error);
          setIsError(true);
        });
    }
  };

  return (
    <div
      className={`md:px-10 px-4 py-4 primary-shadow rounded-lg md:w-2/5 mx-auto`}
    >
      <div
        role="alert"
        className={`alert alert-error ${isError ? "grid" : "hidden"}`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 shrink-0 stroke-current"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>Invalid Credentials</span>
      </div>
      <div className="label">
        <span className="label-text font-bold">Your role</span>
      </div>
      <select
        className="select select-bordered w-full"
        id="role"
        name="role"
        value={loginData.role}
        onChange={handleOnChange}
      >
        <option disabled value={""}>
          I am a...
        </option>
        <option value={"deptCoord"}>Department Coordinator</option>
        <option value={"eventCoord"}>Event Coordinator</option>
      </select>

      <InputField
        label={"Mobile No"}
        name={"mobileNo"}
        value={loginData.mobileNo}
        type={"tel"}
        placeholder={"Enter your mobile number"}
        onChange={handleOnChange}
      />
      <div className="relative">
        <InputField
          label={"Password"}
          name={"password"}
          value={loginData.password}
          type={showPassword ? "text" : "password"}
          placeholder={"Enter your password"}
          onChange={handleOnChange}
        />
        <span
          onClick={togglePasswordVisibility}
          className="absolute right-4 top-14 cursor-pointer"
        >
          {showPassword ? (
            <img src={hide} alt="Hide" />
          ) : (
            <img src={show} alt="Show" />
          )}
        </span>
      </div>
      <button
        className="btn btn-primary w-1/2 mx-auto block mt-10"
        onClick={handleOnSubmit}
      >
        Submit
      </button>
    </div>
  );
}

export default StaffLoginForm;
