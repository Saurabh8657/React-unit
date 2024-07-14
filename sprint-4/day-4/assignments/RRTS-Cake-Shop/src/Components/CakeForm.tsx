import React from "react";
function CakeForm() {
  return (
    <>
      <input type="text" id="cakename" placeholder="Name" />
      <textarea
        placeholder="Description"
        id="description"
        cols={30}
        rows={5}
      ></textarea>
      <select id="flavour">
        <option value="">Select Flavour</option>
        <option value="Chocolate">Chocolate</option>
        <option value="Vanilla">Vanilla</option>
        <option value="Strawberry">Strawberry</option>
      </select>
      <input type="submit" value="Submit" />
    </>
  );
}

export default CakeForm;
