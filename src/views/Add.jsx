import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

function Add() {
  const [student, setStudent] = useState({
    id: "",
    name: "",
    city: "",
  });

  const addStudent = async () => {
    try {
      const response = await axios.post(
        "https://icp-9-first-server.onrender.com/students",
        {
          id: student.id,
          name: student.name,
          city: student.city,
        }
      );

      if (response.data.success) {
        setStudent({
          id: "",
          name: "",
          city: "",
        });
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (e) {
      toast.error(e.response.data.message);
    }
  };

  return (
    <div>
      <h1 className="text-center text-5xl my-4">Add Student</h1>

      <div className="w-1/2 mx-auto shadow-md m-5 p-5 rounded-md border-2 border-gray-200 bg-white">
        <input
          type="text"
          placeholder="Enter ID"
          value={student.id}
          onChange={(e) => setStudent({ ...student, id: e.target.value })}
          className="block mx-auto text-2xl w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4"
        />

        <input
          type="text"
          placeholder="Enter Name"
          value={student.name}
          onChange={(e) => setStudent({ ...student, name: e.target.value })}
          className="block mx-auto text-2xl w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4"
        />

        <input
          type="text"
          placeholder="Enter City"
          value={student.city}
          onChange={(e) => setStudent({ ...student, city: e.target.value })}
          className="block mx-auto text-2xl w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4"
        />

        <button
          className="bg-blue-500 text-xl px-10 py-2 rounded-full text-white block mx-auto mt-10 mb-2 cursor-pointer"
          onClick={addStudent}
        >
          Add Student
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default Add;
