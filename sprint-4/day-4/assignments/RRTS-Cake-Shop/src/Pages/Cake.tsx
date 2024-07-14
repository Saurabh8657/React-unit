import React from "react";
function Cart() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>DESCRIPTION</th>
            <th>FLAVOUR</th>
            <th>BUY CAKE</th>
          </tr>
        </thead>
        <tbody>{/* Rows will be created here  */}</tbody>
      </table>
    </>
  );
}

export default Cart;
