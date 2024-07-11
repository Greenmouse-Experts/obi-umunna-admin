import React from "react";
import { Outlet } from "react-router-dom";
import Error4 from "../components/Error4";

const Protect = () => {
  const userLogin = localStorage.getItem("obi_token");
  return <Outlet />;
};

export default Protect;

// const Protect = () => {
//   const userLogin = localStorage.getItem("obi_token");
//   return userLogin ? (
//     <Outlet />
//   ) : (
//     <>
//       {" "}
//       <Error4 />{" "}
//     </>
//   );
// };

// export default Protect;
