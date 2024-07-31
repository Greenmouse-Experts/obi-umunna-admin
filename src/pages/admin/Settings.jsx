import React, { useEffect, useState } from "react";
import { FaUserShield } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import useGetHook from "../../hook/useGet";
import { BsFillCameraFill, BsTelephonePlusFill } from "react-icons/bs";
import usePostHook from "../../hook/usePost";
import { toast } from "react-toastify";
import useModal from "../../hook/useModal";
import ChangePassword from "../../admin/Settings/ChangePassword";
import { getLocalToken } from "../../services/helpers";
import usePutHook from "../../hook/usePut";

const SettingsPage = () => {
 
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState();
  const [isBusy, setIsBusy] = useState(false);
  const [name, setname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { handlePut, data } = usePutHook();
  const { Modal, setShowModal } = useModal();


const updateData = () =>{
  if(data.code === 200){
    localStorage.setItem("obi_name", data?.data?.name);
    localStorage.setItem("obi_email", data?.data?.email);
  }
}

  const onSuccess = () => {
    toast.success("Profile updated successfully");
    setLoading(false);
    updateData()
   
  };

  const handleUpateProfile = () => {
    setLoading(true);
    
    const payload = {
      name,
      email,
    };
    // fd.append("new_password_confirmation", newPassword2);
    handlePut(`admin/update/profile`, payload, "application/json", onSuccess);
   
  };

  useEffect(() => {
    setname(getLocalToken("obi_name"));
    setEmail(getLocalToken("obi_email"));
  }, []);
  return (
    <>
      <div className="bg-white p-5 ml-4">
        <div className="lg:w-9/12 xl:w-8/10 rounded-lg  p-6 mx-auto">
          <div>
            <p className="font-semibold text-xl border-b">Admin Settings</p>
          </div>
          <div className="mt-6 grid lg:grid-cols-4 gap-x-6">
            <div>
           
              <div className="">
                <p className="fw-600 mt-1 text-center">{name}</p>
              </div>
            </div>
            <div className="col-span-3 mt-9 lg:pl-6">
              <div className="grid gap-6">
                <div className="flex items-center gap-x-2">
                  <div className="w-16 h-16 grid place-content-center shadow-lg">
                    <FaUserShield className="text-2xl text-gray-400" />
                  </div>
                  <div className="w-full">
                    <p className="fs-400 text-primary"> Name:</p>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      className="border-b w-full bg-transparent p-2"
                    />
                  </div>
                </div>
             
                <div className="flex items-center gap-x-2">
                  <div className="w-16 h-16 grid place-content-center shadow-lg">
                    <MdMarkEmailRead className="text-2xl text-gray-400" />
                  </div>
                  <div className="w-full">
                    <p className="fs-400 text-primary">Email:</p>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="border-b w-full bg-transparent p-2"
                    />
                  </div>
                </div>
               
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-x-6 mt-12">
            <button
              className="px-6 py-2 border border-blue-800 text-blue-800 font-semibold rounded-lg"
              onClick={() => setShowModal(true)}
            >
              Change Password
            </button>
            <button
              className="px-6 py-2 border border-green-600 bg-blue-800 text-white font-semibold rounded-lg"
              onClick={handleUpateProfile}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
      <Modal title={"Change Password"}>
        <ChangePassword />
      </Modal>
    </>
  );
};

export default SettingsPage;
