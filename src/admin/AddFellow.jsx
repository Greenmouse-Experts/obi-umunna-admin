import React, { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoClose } from "react-icons/io5";
import { ThreeDots } from "react-loader-spinner";
import useGetHook from "../hook/useGet";
import usePostHook from "../hook/usePost";

const AddProgram = ({ onClose, refetch }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: category } = useGetHook(`admin/category/fetch`);
  const { handlePost } = usePostHook();

  const [programData, setProgramData] = useState({
    categoryId: "",
    name: "",
    startDate: "",
    endDate: "",
    description: "",
    requirements: "",
    supportBanner: null,
    budgetAmount: 0,
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setProgramData({ ...programData, [name]: value });
  };

  const handleFileInput = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setProgramData({ ...programData, [name]: reader.result });
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleSelectInput = (e) => {
    setProgramData({ ...programData, categoryId: e.target.value });
  };

  const isValidate = () => {
    let isProceed = true;
    let errorMessages = "";

    const today = new Date().toISOString().split("T")[0];

    if (
      programData.name === "" ||
      programData.categoryId === "" ||
      programData.startDate === "" ||
      programData.endDate === "" ||
      programData.description === "" ||
      programData.requirements === "" ||
      programData.budgetAmount === "" ||
      programData.supportBanner === null
    ) {
      isProceed = false;
      errorMessages += "Please fill all inputs. ";
    }

    if (programData.startDate < today || programData.endDate < today) {
      isProceed = false;
      errorMessages += "Dates cannot be in the past. ";
    }

    if (programData.endDate < programData.startDate) {
      isProceed = false;
      errorMessages += "End date cannot be before start date. ";
    }

    if (!isProceed) {
      toast.error(errorMessages);
    }

    return isProceed;
  };

  const onSuccess = () => {
    setIsLoading(false);
    refetch();
    toast.success("Program added successfully");
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidate()) {
      setIsLoading(true);

      const fd = new FormData();
      Object.entries(programData).forEach(([key, value]) => {
        fd.append(key, value);
      });

      handlePost(`admin/program/add`, fd, "application/json", onSuccess);
    }
  };

  return (
    <div className="add_member bg-white max-h-[90vh] overflow-y-auto">
      <div className="add_head">
        <p>Add Program</p>
        <span onClick={onClose}>
          <IoClose />
        </span>
      </div>
      <form onSubmit={handleSubmit} className="add_mem">
        <div className="double">
          <div className="input_log">
            <label htmlFor="name">Name of Program</label>
            <div className="input-group">
              <input
                placeholder="Enter Program Name"
                id="name"
                name="name"
                type="text"
                value={programData.name}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="input_log">
            <label htmlFor="categoryId">Category</label>
            <div className="input-group">
              <select
                id="categoryId"
                name="categoryId"
                value={programData.categoryId}
                onChange={handleSelectInput}
              >
                <option value="">
                  Select a Category
                </option>
                {category?.data?.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="double">
          <div className="input_log">
            <label htmlFor="startDate">Start Date</label>
            <div className="input-group">
              <input
                placeholder="Enter Start Date"
                id="startDate"
                name="startDate"
                type="date"
                value={programData.startDate}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="input_log">
            <label htmlFor="endDate">End Date</label>
            <div className="input-group">
              <input
                placeholder="Enter End Date"
                id="endDate"
                name="endDate"
                type="date"
                value={programData.endDate}
                onChange={handleInput}
              />
            </div>
          </div>
        </div>
        <div className="input_log">
          <label htmlFor="description">Description</label>
          <div className="input-group">
            <textarea
              placeholder="Enter Description"
              id="description"
              name="description"
              value={programData.description}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="input_log">
          <label htmlFor="requirements">Requirements</label>
          <div className="input-group">
            <input
              placeholder="Enter Requirements"
              id="requirements"
              name="requirements"
              type="text"
              value={programData.requirements}
              onChange={handleInput}
            />
          </div>
        </div>
        <div className="input_log">
          <label htmlFor="supportBanner">Support Banner</label>
          <div className="input-group">
            <input
              placeholder="Upload Support Banner"
              id="supportBanner"
              name="supportBanner"
              type="file"
              onChange={handleFileInput}
            />
          </div>
        </div>
        <div className="input_log">
          <label htmlFor="budgetAmount">Budget Amount</label>
          <div className="input-group">
            <input
              placeholder="Enter Budget Amount"
              id="budgetAmount"
              name="budgetAmount"
              type="number"
              value={programData.budgetAmount}
              onChange={handleInput}
            />
          </div>
        </div>
        {isLoading ? (
          <div className="dotss">
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#4fa94d"
              ariaLabel="three-dots-loading"
              wrapperStyle={{}}
              wrapperClassName=""
              visible={true}
            />
          </div>
        ) : (
          <button className="add_btn" type="submit" disabled={isLoading}>
            Add Program
          </button>
        )}
      </form>
    </div>
  );
};

export default AddProgram;
