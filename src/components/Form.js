import React, { useState } from "react";

function Form({ firstName, lastName, handleFirstNameChange, handleLastNameChange}) {

  return (
    <form>
      <input type="text" onChange={handleFirstNameChange} value={firstName}></input>
      <input type="text" onChange={handleLastNameChange} value={lastName}></input>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
