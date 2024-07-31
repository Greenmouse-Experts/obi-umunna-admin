import React from "react";
import useGetHook from "../../../hook/useGet";
import useModal from "../../../hook/useModal";
import { MdAddCircleOutline } from "react-icons/md";
import dayjs from "dayjs";
import { RiDeleteBin5Line } from "react-icons/ri";
import { LiaEdit } from "react-icons/lia";
import ReusableModal from "../../../components/ReusableModal";
import { useState } from "react";
import { toast } from "react-toastify";

import AddDuesCategory from "../../../admin/Dues/Category/AddCategory";
import EditDuesCategory from "../../../admin/Dues/Category/EditCategory";
import useDelete from "../../../hook/useDelete";
import AddTestimonial from "../../../admin/Dues/Category/AddTestimonial";
import EditTestimonial from "../../../admin/Dues/Category/EditTestimonial";
import AddBlog from "../../../admin/Dues/Category/AddBlog";
import EditBlog from "../../../admin/Dues/Category/EditBlog";

const Blogs = () => {
  const { data, isLoading, refetch } = useGetHook(`admin/post/fetch`);
  const { handleDelete:deleteCat } = useDelete();
  const [isBusy, setIsBusy] = useState(false);
  const { Modal: Delete, setShowModal: showDelete } = useModal();
  const { Modal: Edit, setShowModal: showEdit } = useModal();
  const { Modal, setShowModal } = useModal();
  const [selected, setSelected] = useState();
  const openEdit = (item) => {
    setSelected(item);
    showEdit(true);
  };
  const openDelete = (item) => {
    setSelected(item);
    showDelete(true);
  };
  const onSuccess = () => {
    setIsBusy(false);
    refetch();
    toast.success("Post deleted successfully");
    showDelete(false);
  };
  const handleDelete = () => {
    setIsBusy(true);
    const payload = {
        post_id: selected.id,
    };
    deleteCat(
      `admin/post/delete`,
      payload,
      `application/json`,
      onSuccess
    );
  };
  return (
    <>
      <div className="mx-3 bg-white p-5 min-h-[80vh]">
        <div className="flex justify-between">
          <div className="lg:w-8/12">
            <p className="text-xl font-semibold"> Blogs</p>
            <p>
              Add, edit and delete posts
            </p>
          </div>
          <div>
            <button
              className="flex items-center  gap-x-2 p-2 px-4 text-blue-900 font-semibold border border-blue-900 rounded"
              onClick={() => setShowModal(true)}
            >
              <MdAddCircleOutline />
              Add
            </button>
          </div>
        </div>
        <div className="mt-8">
          <div className="flex flex-col">
            <div className=" overflow-x-auto">
              <div className="py-2 align-middle inline-block min-w-full ">
                <table className="items-center w-full bg-transparent border-collapse">
                <thead className="thead-light border-y-2 border-[#CECECE]">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 lg:px-10 align-middle py-3 fs-500 whitespace-nowrap text-left"
                      >
                        S/N
                      </th>
                      <th
                        scope="col"
                        className="px-6 lg:px-10 align-middle py-3 fs-500 whitespace-nowrap text-left"
                      >
                        Image
                      </th>
                      <th
                        scope="col"
                        className="px-6 lg:px-10 align-middle py-3 fs-500 whitespace-nowrap text-left"
                      >
                        Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 lg:px-10 align-middle py-3 fs-500 whitespace-nowrap text-left"
                      >
                        Views
                      </th>
                      {/* <th
                        scope="col"
                        className="px-6 lg:px-10 align-middle py-3 fs-500 whitespace-nowrap text-left"
                      >
                        Message
                      </th> */}

                      <th
                        scope="col"
                        className="px-6 lg:px-10 align-middle py-3 fs-500 whitespace-nowrap text-left"
                      >
                        Created at
                      </th>
                      <th
                        scope="col"
                        className="px-6 lg:px-10 align-middle py-3 fs-500 whitespace-nowrap text-left"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {data?.data.map((item, i) => (
                      <tr key={i}>
                        <td className="align-middle fs-500 whitespace-nowrap px-6 lg:px-10 py-4 text-left border-b border-[#CECECE]">
                          {i + 1}
                        </td>
                        <td className="align-middle fs-500 whitespace-nowrap  px-6 lg:px-10 py-4 text-left border-b border-[#CECECE]">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="h-20 w-20 rounded-full "
                          />
                        </td>
                        <td className="align-middle fs-500 whitespace-nowrap px-6 lg:px-10 py-4 text-left border-b border-[#CECECE]">
                          <p>{item.title}</p>
                        </td>
                        <td className="align-middle fs-500 whitespace-nowrap px-6 lg:px-10 py-4 text-left border-b border-[#CECECE]">
                          <p>{item.views}</p>
                        </td>
                        {/* <td className="align-middle fs-500 whitespace-nowrap px-6 lg:px-10 py-4 text-left border-b border-[#CECECE]">
                          <p>{item.message}</p>
                        </td> */}
                        <td className="align-middle fs-500 whitespace-nowrap px-6 lg:px-10 py-4 text-left border-b border-[#CECECE]">
                          {dayjs(item.created_at).format("DD/MM/YYYY")}
                        </td>
                        <td className="align-middle fs-500 whitespace-nowrap px-6 lg:px-10 py-4 text-left border-b border-[#CECECE]">
                          <div className="flex gap-x-3">
                            <LiaEdit
                              onClick={() => openEdit(item)}
                              className="text-xl text-blue-900"
                            />
                            <RiDeleteBin5Line
                              onClick={() => openDelete(item)}
                              className="text-lg text-red-600"
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal title={"Add Blog"}>
        <AddBlog close={() => setShowModal(false)} refetch={refetch} />
      </Modal>
      <Edit title={selected?.title}>
        <EditBlog item={selected} close={() => showEdit(false)} refetch={refetch} />
      </Edit>
      <Delete title="" noHead>
        <ReusableModal
          title="Are you sure you want to delete this post?"
          cancelTitle="No, cancel"
          actionTitle="Yes, delete"
          closeModal={() => showDelete(false)}
          action={handleDelete}
          isBusy={isBusy}
        />
      </Delete>
    </>
  );
};

export default Blogs;
