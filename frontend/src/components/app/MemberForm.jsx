import React, { useState } from "react";
import InputField from "../utils/InputField";

function MemberForm({ index, memberData = {}, onMemberChange }) {
    const [errors, setErrors] = useState({});

    function handleChange(e) {
        const { name, value } = e.target;
        const newErrors = { ...errors };

        // Name validation
        if (name === "name" && !/^[a-zA-Z\s]+$/.test(value)) {
            newErrors.name = "Name should only contain letters and spaces.";
        } else {
            delete newErrors.name;
        }

        // Reg No validation (8 digits)
        if (name === "regNo" && !/^\d{8}$/.test(value)) {
            newErrors.regNo = "Registration number must be exactly 8 digits.";
        } else {
            delete newErrors.regNo;
        }

        // Email validation
        if (name === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
            newErrors.email = "Enter a valid email address.";
        } else {
            delete newErrors.email;
        }

        /*// Department validation
        if (name === "department" && !/^[a-zA-Z\s-]+$/.test(value)) {
            newErrors.department = "Department can only contain letters, spaces, and hyphens.";
        } else {
            delete newErrors.department;
        }
        */

        // Year of Study validation (between 1 and 5)
        if (name === "yearOfStudy" && (value < 1 || value > 5)) {
            newErrors.yearOfStudy = "Year of study should be between 1 and 5.";
        } else {
            delete newErrors.yearOfStudy;
        }

        setErrors(newErrors);
        onMemberChange(index, e); // Call the parent function to update the form data
    }

    return (
        <div className="primary-shadow px-3 py-3 rounded-md mb-10">
            {/* Name Input */}
            <InputField
                type="text"
                placeholder="Enter the member's name"
                label="Name"
                name="name"
                value={memberData.name || ""}
                onChange={handleChange}
                error={errors.name}
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}

            {/* Reg No Input */}
            <InputField
                type="number"
                placeholder="Enter the member's reg No."
                label="Reg No."
                name="regNo"
                value={memberData.regNo || ""}
                onChange={handleChange}
                error={errors.regNo}
            />
            {errors.regNo && <span className="text-red-500 text-sm">{errors.regNo}</span>}

            {/* Email Input */}
            <InputField
                type="email"
                placeholder="Enter the member's email id"
                label="Email ID"
                name="email"
                value={memberData.email || ""}
                onChange={handleChange}
                error={errors.email}
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}

            {/* Department Dropdown */}
            <label className="form-control w-full mx-auto my-3">
                <div className="label">
                    <span className="label-text font-bold">Department</span>
                </div>
                <select
                    className="select select-bordered w-full"
                    name="department"
                    value={memberData.department || "CSE Regular"}  // Default to CSE regular
                    onChange={handleChange}
                >
                    <option value="CSE regular">CSE regular</option>
                    <option value="Specialization 1">CSE specialization 1 (AI, AIML, DS)</option>
                    <option value="Specialization 2">CSE specialization 2 (IoT, Blockchain, Cybersecurity, AI and Robotics)</option>
                    <option value="IT">IT</option>
                    <option value="Law L.L.M">Law L.L.M</option>
                    <option value="Law L.L.B">Law L.L.B</option>
                    <option value="Automobile">Automobile</option>
                    <option value="Mechanical">Mechanical</option>
                    <option value="Aero">Aero</option>
                    <option value="Mechatronics">Mechatronics</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="Pharmacy">Pharmacy</option>
                    <option value="Dental Surgery">Dental Surgery</option>
                    <option value="Nursing">Nursing</option>
                    <option value="Physiotherapy">Physiotherapy</option>
                    <option value="B.Sc Maths">B.Sc Maths</option>
                    <option value="Bsc. CS">B.Sc CS</option>
                    <option value="M.sc CS">M.Sc CS</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Bioinfo">Bioinfo</option>
                    <option value="Physics">Physics</option>
                    <option value="MCA">MCA</option>
                    <option value="Viscom">Viscom</option>
                    <option value="B.A., M.A., English">B.A., M.A., English</option>
                    <option value="Civil">Civil</option>
                    <option value="Architecture">Architecture</option>
                    <option value="Fashion Design">Fashion Design</option>
                    <option value="MBA or BCom or BBA">MBA or BCom or BBA</option>
                    <option value="Biomedical">Biomedical</option>
                    <option value="Biotechnology">Biotechnology</option>
                    <option value="Chemical">Chemical</option>
                    <option value="Psychology">Psychology</option>
		            <option value="Maths">Maths</option>
                </select>
            </label>
            {errors.department && <span className="text-red-500 text-sm">{errors.department}</span>}

            {/* Year of Study Input */}
            <div>
                <label className="form-control w-full mx-auto my-3">
                    <div className="label">
                        <span className="label-text font-bold">Year of Study</span>
                    </div>
                    <input
                        type="number"
                        min={1}
                        max={5}
                        placeholder="Enter the member's year of study"
                        className="input input-bordered w-full bg-base-200"
                        name="yearOfStudy"
                        value={memberData.yearOfStudy || ""}
                        onChange={handleChange}
                    />
                    {errors.yearOfStudy && (
                        <span className="text-red-500 text-sm">{errors.yearOfStudy}</span>
                    )}
                </label>
            </div>
        </div>
    );
}

export default MemberForm;
