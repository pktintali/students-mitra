import React, { useEffect } from "react";
import { useSelector } from "react-redux";
const UserDP = () => {
  const logo = useSelector((state) => state.userLogo.logo);

  return <div></div>;
};

export default UserDP;
