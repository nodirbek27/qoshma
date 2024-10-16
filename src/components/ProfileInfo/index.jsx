import { CiEdit } from "react-icons/ci";
import React from "react";

const ProfileInfo = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-lg lg:text-xl text-center font-semibold mb-5 xl:mb-8">Shaxsiy ma'lumotlar</h2>
      <table className="table w-full">
        <tbody>
          <tr className="bg-base-200">
            <th>Familiya</th>
            <td>Palonchiyev</td>
            <td><CiEdit className="text-green-400 cursor-pointer w-[20px] md:w-[25px] h-auto" /></td>
          </tr>
          <tr>
            <th>Ism</th>
            <td>Palonchibek</td>
            <td><CiEdit className="text-green-400 cursor-pointer w-[20px] md:w-[25px] h-auto" /></td>
          </tr>
          <tr className="bg-base-200">
            <th>Sharif</th>
            <td>Palonchijon o'g'li</td>
            <td><CiEdit className="text-green-400 cursor-pointer w-[20px] md:w-[25px] h-auto" /></td>
          </tr>
          <tr>
            <th>Telefon</th>
            <td>+998 90 123 45 67</td>
            <td><CiEdit className="text-green-400 cursor-pointer w-[20px] md:w-[25px] h-auto" /></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProfileInfo;
