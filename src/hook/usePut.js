import { useCallback, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const usePutHook = () => {
  const [data, setdata] = useState([])
  const handlePut = useCallback(async (url, payload, type, success) => {
    try {
      const config = {
        headers: {
          "Content-Type": type,
          authorization: `Bearer ${localStorage.getItem("obi_token")}`,
        },
      };
      const res = await axios.put(
        `${process.env.REACT_APP_API_URL}/${url}`,
        payload,
        config
      );
      success();
      setdata(res.data)
    } catch (error) {
      if (error?.response?.data?.errors) {
        Object.entries(error?.response?.data?.errors).forEach(
          ([key, value]) => {
            toast.error(value[0]);
          }
        );
      }
    }
  }, []);
  return { handlePut, data };
};
export default usePutHook;
