import React from "react";
import useGetHook from "../../../hook/useGet";
import SetSubscribe from "../../../admin/Payments/SetSubscribe";

const SubscriptionPayments = () => {
  const { data } = useGetHook("admin/get/subscription/transactions");
  
  return (
    <>
      <div className="mx-2 p-6 bg-white min-h-[70vh]">
        <div className="flex justify-between items-center">
          <p className="font-semibold text-xl">Subscription Payments</p>
          <SetSubscribe/>
        </div>
        <div className="mt-12">
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
                        Reference ID
                      </th>
                      <th
                        scope="col"
                        className="px-6 lg:px-10 align-middle py-3 fs-500 whitespace-nowrap text-left"
                      >
                        Paid By
                      </th>
                      <th
                        scope="col"
                        className="px-6 lg:px-10 align-middle py-3 fs-500 whitespace-nowrap text-left"
                      >
                        Amount
                      </th>
                      <th
                        scope="col"
                        className="px-6 lg:px-10 align-middle py-3 fs-500 whitespace-nowrap text-left"
                      >
                        Status
                      </th>
                      <th
                        scope="col"
                        className="px-6 lg:px-10 align-middle py-3 fs-500 whitespace-nowrap text-left"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  {/* <tbody>
                    {data?.data.map((item, i) => (
                      <tr key={i}>
                        <td className="align-middle fs-500 whitespace-nowrap px-6 lg:px-10 py-4 text-left border-b border-[#CECECE]">
                          {i + 1}
                        </td>
                        <td className="align-middle fs-500  px-6 lg:px-10 py-4 text-left border-b border-[#CECECE]">
                          <div className="w-48">
                          {item.description}
                          </div>
                        </td>
                        <td className="align-middle fs-500 whitespace-nowrap px-6 lg:px-10 py-4 text-left border-b border-[#CECECE]">
                          <div>
                            <p>{item.category.name}</p>
                          </div>
                        </td>
                        <td className="align-middle fs-500 whitespace-nowrap px-6 lg:px-10 py-4 text-left border-b border-[#CECECE]">
                          <div>
                            <p>{formatAsNgnMoney(item.amount)}</p>
                          </div>
                        </td>
                        <td className="align-middle fs-500 whitespace-nowrap px-6 lg:px-10 py-4 text-left border-b border-[#CECECE]">
                          {item.start_date}
                        </td>
                        <td className="align-middle fs-500 whitespace-nowrap px-6 lg:px-10 py-4 text-left border-b border-[#CECECE]">
                          {item.end_date}
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
                  </tbody> */}
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubscriptionPayments;
