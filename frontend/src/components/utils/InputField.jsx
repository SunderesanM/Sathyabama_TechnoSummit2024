import React from "react";

function InputField({ type, label, placeholder, value, name, onChange }) {
  return (
    <div>
      <label className="form-control w-full mx-auto my-3">
        <div className="label">
          <span className="label-text font-bold">{label}</span>
        </div>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          name={name}
          onChange={onChange}  // Add onChange handler
          className="input input-bordered w-full bg-base-200"
        />
      </label>
    </div>
  );
}

export default InputField;

