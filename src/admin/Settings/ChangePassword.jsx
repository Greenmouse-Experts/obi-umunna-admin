import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import usePostHook from "../../hook/usePost";
import usePutHook from "../../hook/usePut";

const ChangePassword = ({ close, refetch }) => {
  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [newPassword2, setNewPassword2] = useState("");
  const { handlePut } = usePutHook();
  const onSuccess = () => {
    setLoading(false);
    toast.success("Password changed successfully");
    close();
  };
  const handleSubmit = async () => {
    setLoading(true);
    if (newPassword!== newPassword2) {
      toast.error("Passwords do not match");
      return;
    }
    const payload = {
     
      oldPassword,
      newPassword
    };
    // fd.append("new_password_confirmation", newPassword2);
    handlePut(`admin/update/password`, payload, "application/json", onSuccess);
  };
  return (
    <>
      <div>
        <label className="text-lg font-medium">Old Password</label>
        <input
          type="password"
          className="border border-gray-400 w-full mt-2 p-2 rounded"
          onChange={(e) => setOldPassword(e.target.value)}
        />
      </div>
      <div className="mt-4">
      <label className="text-lg font-medium">New Password</label>
        <input
          type="password"
          className="border border-gray-400 w-full mt-2 p-2 rounded"
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>
      <div className="mt-4">
      <label className="text-lg font-medium">Confirm New Password</label>
        <input
          type="password"
          className="border border-gray-400 w-full mt-2 p-2 rounded"
          onChange={(e) => setNewPassword2(e.target.value)}
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

export default ChangePassword;
