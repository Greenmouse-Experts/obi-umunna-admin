import React, { useState } from "react";
import usePostHook from "../../../hook/usePost";
import { toast } from "react-toastify";
import useGetHook from "../../../hook/useGet";

const AddTestimonial = ({ close, refetch }) => {
  const { data } = useGetHook(`admin/banks`);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [photo, setPhoto] = useState(null); // initialize as null

  const { handlePost } = usePostHook();
  const onSuccess = () => {
    setLoading(false);
    refetch();
    toast.success("Testimonial added successfully");
    close();
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhoto(reader.result); // this will be a base64 string
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async () => {
    setLoading(true);
    const payload = {
      name,
      title,
      message,
      photo, // photo is now a base64 string
    };

    handlePost(`admin/testimony/add`, payload, "application/json", onSuccess);
  };

  return (
    <>
      <div>
        <label className="text-lg font-medium"> Name</label>
        <input
          type="text"
          className="border border-gray-400 w-full mt-2 p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
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
        <label className="text-lg font-medium">Message</label>
        <textarea
          className="border border-gray-400 w-full mt-2 p-2 rounded"
          name=""
          id=""
          cols="30"
          rows="5"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
      </div>
      <div>
        <label className="text-lg font-medium">Photo</label>
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

export default AddTestimonial;
