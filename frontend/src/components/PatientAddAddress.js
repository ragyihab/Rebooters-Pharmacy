import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function PatientAddAddress({ modelName }) {
  const [counter,setCounter]=React.useState(2);
  const params = new URLSearchParams(window.location.search);
  const patientUsername = params.get('patientUsername') //will bet taken from login later ;

  function addInputField() {
    var input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Enter address...";
    input.id=`ad${counter}`;
    setCounter(counter+1);

    var div = document.createElement("div");
    div.appendChild(input);

    document.getElementById("inputContainer").appendChild(div);
}
    const addAddress = async () => {
        try {       
          let deliveryAddress=document.getElementById('ad1').value +"%";
        for(let i=2;i<counter;i++){
          deliveryAddress+=document.getElementById(`ad${i}`).value +"%"

        }  
          const response = await fetch(`/api/patient/addNewDeliveryAddress?patientUsername=${patientUsername}`, {
          method: "PUT",
          headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({deliveryAddress}),
          });
          alert('address added')
          if (!response.ok) {
          
            throw new Error("Failed to add address");
          }     
        } catch (error) {
      
          console.error(error);
        }
      };
  return (
    <div>
    <div id="inputContainer">
   <input
      type="text"
      id="ad1"
     placeholder="enter address..."
    
    />
<button onClick={addInputField}>+</button>
<br></br>
</div>
<button onClick={addAddress}>Add</button>
    </div>

  );
}

export default PatientAddAddress;