import React, { useContext } from "react";
import { FirstName, LastName } from "../../../App";

const ComC = () => {
  const fname = useContext(FirstName);
  const lastname = useContext(LastName);
  return (
    <div>
      <div>
        My name is {fname} {lastname}
      </div>
    </div>
  );
};

export default ComC;
