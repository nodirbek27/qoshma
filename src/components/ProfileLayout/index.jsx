import React from "react";
import ProfileInfo from "../ProfileInfo";
import ProfileAriza from "../ProfileAriza";

const ProfileLayout = () => {
  return (
    <div className="max-w-7xl mx-auto p-2">
      <div role="tablist" className="tabs tabs-bordered">
        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab md:text-lg"
          aria-label="Shaxsiy ma'lumotlar"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content p-2 md:p-10">
          <ProfileInfo />
        </div>

        <input
          type="radio"
          name="my_tabs_1"
          role="tab"
          className="tab md:text-lg"
          aria-label="Ariza topshirish"
        />
        <div role="tabpanel" className="tab-content p-2 md:p-10">
          <ProfileAriza />
        </div>
      </div>
    </div>
  );
};

export default ProfileLayout;
