import React from "react";
import { useState } from "react";

import { toast } from "react-toastify";
import useGetHook from "../../../hook/useGet";
import usePutHook from "../../../hook/usePut";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const EditBlog = ({ item, close, refetch }) => {
  const { data } = useGetHook(`admin/banks`);
  const [loading, setLoading] = useState(false);
  // const [name, setName] = useState(item.name || "");
  const [title, setTitle] = useState(item.title || "");
  const [description, setDescription] = useState(item.description || "");
  const [photo, setPhoto] = useState(""); //

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result); // this will be a base64 string
    };
    reader.readAsDataURL(file);
  };

  const { handlePut } = usePutHook();
  const onSuccess = () => {
    setLoading(false);
    refetch();
    toast.success("Dues Category added successfully");
    close();
  };
  const handleSubmit = async () => {
    setLoading(true);
    const payload = {
      post_id: item.id,

      title,
      description,
      image:photo, // photo is now a base64 string
    };
    handlePut(`admin/post/update`, payload, `application/json`, onSuccess);
  };
  return (
    <>
      <div>
        <label className="text-lg font-medium"> Title</label>
        <input
          type="text"
          className="border border-gray-400 w-full mt-2 p-2 rounded"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div>
        <label className="text-lg font-medium">Description</label>
        {/* <textarea
          className="border border-gray-400 w-full mt-2 p-2 rounded"
          name=""
          id=""
          cols="30"
          rows="5"
          value={description}
          onChange={setDescription}
        ></textarea> */}
         <ReactQuill
            theme="snow"
            value={description}
            onChange={setDescription} 
            className={"h-32"}
          />
      </div>
      <div className="mt-14">
        <label className="text-lg font-medium">Image</label>
        <input
          type="file"
          accept="image/*"
          placeholder="add Photo"
          onChange={handlePhotoChange}
        />
      </div>
      <div className="mt-8">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-3 bg-[#291670] font-semibold text-lg rounded text-white"
        >
          {loading ? `Submitting...` : `Submit`}
        </button>
      </div>
    </>
  );
};

export default EditBlog;
