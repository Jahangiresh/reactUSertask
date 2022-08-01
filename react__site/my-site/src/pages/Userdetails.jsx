import React from "react";
import { useParams } from "react-router-dom";
import Userdatas from "../datas/userdatas.json";

const Userdetails = () => {
  const { userId } = useParams();
  const thisUser = Userdatas.find((user) => user.id === userId);
  console.log(thisUser);
  return (
    <div>
      <h1>{thisUser.name}</h1>
    </div>
  );
};

export default Userdetails;
