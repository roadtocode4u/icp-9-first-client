import axios from "axios";
import React from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router";
import EditUserIcon from "./../assets/edit-user-icon.png";
import TrashIcon from "./../assets/trash-icon.png";

function StudentCard({ id, name, city, loadStudents }) {
  const deleteStudent = async () => {
    const response = await axios.delete(`${import.meta.env.VITE_API_URL}/students/${id}`);
    if (response.data.success) {
      toast.success(response.data.message);
      loadStudents();
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="border-2 border-gray-300 p-4 m-4 rounded-md shadow-md relative">
      <h2 className="text-2xl">
        {id} - {name}
      </h2>
      <p>{city}</p>

      <img
        src={TrashIcon}
        alt="Delete"
        className="h-[30px] cursor-pointer absolute top-1 right-5"
        onClick={deleteStudent}
      />

      <Link to={`/edit/${id}`}>
        <img
          src={EditUserIcon}
          alt="Edit Student"
          className="h-[25px] cursor-pointer absolute bottom-2 right-5"
        />
      </Link>

      <Toaster />
    </div>
  );
}

export default StudentCard;
