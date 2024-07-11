import React from "react";
import { useState } from "react";

import { toast } from "react-toastify";
import useGetHook from "../../../hook/useGet";
import usePutHook from "../../../hook/usePut";

const EditDuesCategory = ({ item, close, refetch }) => {
  const { data } = useGetHook(`admin/banks`);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState(item.name || "");

  const { handlePut } = usePutHook();
  const onSuccess = () => {
    setLoading(false);
    refetch();
    toast.success("Dues Category added successfully");
    close();
  };
  const handleSubmit = async () => {
    setLoading(true);
    const updatedCat = {
      category_id: item.id,
      name: name,
    };
    handlePut(
      `admin/category/update`,
      updatedCat,
      `application/json`,
      onSuccess
    );
  };
  return (
    <>
      <div>
        <label className="text-lg font-medium">Category Name</label>
        <input
          type="text"
          className="border border-gray-400 w-full mt-2 p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mt-8">
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-3 bg-[#291670] font-semibold text-lg rounded text-white"
        >
          {loading ? `Submiting...` : `Submit`}
        </button>
      </div>
    </>
  );
};

export default EditDuesCategory;
