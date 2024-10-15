import React from "react";
import SignIn from "../../components/SignIn";
import SignUp from "../../components/SignUp";

const Register = () => {
  return (
    <div className="max-w-xl mx-auto p-2">
      <div role="tablist" className="tabs tabs-bordered py-3 md:p-10">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab md:text-lg font-medium"
          aria-label="Kirish"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content px-2 py-10">
          <SignIn />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab md:text-lg font-medium whitespace-nowrap"
          aria-label="Ro'yxatdan o'tish"
        />
        <div role="tabpanel" className="tab-content px-2 py-10">
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export default Register;
