// import React, { useState } from 'react';

// const Calling = () => {
//   const [formData, setFormData] = useState({
//     textField1: '',
//     textField2: '',
//     dropdownValue: '',
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Handle form submission
//     console.log('Form submitted:', formData);
//   };

//   const handleShowData = () => {
//     // Handle showing data
//     console.log('Form data:', formData);
//   };

//   const handleLogout = () => {
//     // Handle logout
//     console.log('Logged out');
//   };

//   return (
//     <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", width: "40%"}}>
//         <h3>Smart Contact Manager</h3>
//       <form onSubmit={handleSubmit} style={{border: "1px solid black"}}>
//         <div>
//           <label>
//             Reference Id:
//             <input
//               type="text"
//               name="textField1"
//               value={formData.textField1}
//               onChange={handleInputChange}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Remark:
//             <input
//               type="text"
//               name="textField2"
//               value={formData.textField2}
//               onChange={handleInputChange}
//             />
//           </label>
//         </div>
//         <div>
//           <label>
//             Dropdown:
//             <select
//               name="dropdownValue"
//               value={formData.dropdownValue}
//               onChange={handleInputChange}
//             >
//               <option value="">Select an option</option>
//               <option value="option1">Option 1</option>
//               <option value="option2">Option 2</option>
//               <option value="option3">Option 3</option>
//             </select>
//           </label>
//         </div>
//         <div>
//           <button type="submit">Submit</button>
//           <button type="button" onClick={handleShowData}>Show Data</button>
//           <button type="button" onClick={handleLogout}>Logout</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Calling;

import React from 'react';
import './Calling.css'

const SmartContactManager = () => {
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>

        <div className='nhj-1'>
            <h1>Smart Contact Manager</h1>
            <form id="myForm" method="POST" action="{% url 'my_form_view' %}">
                {/* {% csrf_token %} */}
                {/* <a href="{% url 'display_data' %}" >Show_data</a> */}

                <div className="card-input">
                    <label htmlFor="Reference" className="card-input__label" style={{fontWeight: 'bolder'}}>Reference_id:</label>
                    <input className="card-input__input ddc "style={{width: "40%"}} type="text" id="Reference" name="Reference"/><br/><br/>
                </div>

                <div className="card-input">
                    <label className="card-input__label" htmlFor="dropdown" style={{fontWeight: 'bolder'}}>Remark:</label>
                    <select className="card-input__input" id="dropdown" name="dropdown" style={{width: "90%"}}>
                        <option value="Abusive Cx">Abusive Cx</option>
                        <option value="Busy">Busy</option>
                        <option value="Call Back">Call Back</option>
                        <option value="Call Me Later">Call Me Later</option>
                        <option value="Complete">Complete</option>
                        <option value="Customer Disconnect call">Customer Disconnect call</option>
                        <option value="Customer is saying that I haven't applied for any loan">Customer is saying that I haven't applied for any loan</option>
                        <option value="Esclate">Esclate</option>
                        <option value="Incoming Call Is Not Available">Incoming Call Is Not Available</option>
                        <option value="Language Barrier">Language Barrier</option>
                        <option value="NA">NA</option>
                        <option value="Not Interested">Not Interested</option>
                        <option value="Out Of Range">Out Of Range</option>
                        <option value="Out Of Service">Out Of Service</option>
                        <option value="RNR">RNR</option>
                        <option value="Switch Off">Switch Off</option>
                        <option value="Wrong Number">Wrong Number</option>
                        <option value="Not Interested">Not Interested</option>
                        <option value="ringing busy">ringing busy</option>
                    </select><br/><br/>
                </div>
                <div className="card-input" >
                    <label className="card-input__label" htmlFor="remark" style={{fontWeight: 'bolder'}}>Remark 2:</label>
                    <input type="text" className="card-input__input ddc" style={{width: "40%"}} id="remark" name="Remark"/><br/><br/>
                    <input className=" fgh-1" type="submit" value="Submit"/>
                </div>
            </form>
            <form action="{% url 'logout' %}" method="post" id="logoutForm" className='qwe '>
                {/* {% csrf_token %} */}
                {/* <button type="submit">Logout</button> */}
            </form>
            </div>
        </div>
    );
}

export default SmartContactManager;
