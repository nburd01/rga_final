import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emailActions } from "../../../../../../../store/contactSlice";

export const TestRedux = () => {
  const [newUsername, setNewUsername] = useState("");
  const [nameInput, setNameInput] = useState("");

  const dispatch = useDispatch();
  const username = useSelector((state) => state.email);
  console.log("newUsername",newUsername)

  const formSubmissionHandler = (e) => {

    
    const getGenderData = async (name) => {
     

      dispatch(
        emailActions.setNewEmails({
          name: name,
        })
      );  
    };
    getGenderData(nameInput);
    setNameInput("");
  };



  let handleChangeInput = (event) => { 
    setNameInput(event.target.value);
    }

   return (
    <div>
      <h2>Welcome</h2>
      <p >Insert the name to verify the gender</p>
      <form  onSubmit={formSubmissionHandler}>
        <label>
          <h1 className="">Name:</h1>
          <input
            type="text"
            id="gname"
            name="gname"
            value={nameInput}
            onChange={handleChangeInput}
          />
        </label>
        <br />
        <input id="namesubmitcomponent" type="submit" value="check" />
      </form>
      <h2>{nameInput}</h2>
    </div>
  );
};