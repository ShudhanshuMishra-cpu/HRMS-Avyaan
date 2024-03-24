
import React, { useState } from 'react';
import axios from 'axios';
import Select from 'react-select';



const options = [
   
    { value: 'Hindi', label: 'Hindi' },
    { value: 'English', label: 'English' },
    { value: 'Panjabi', label: 'Panjabi' },
    { value: 'Telgu', label: 'Telgu' },
    { value: 'rassian', label: 'rassian' },
  ];

export default function MDBData() {


    const [selectedValues, setSelectedValues] = useState(null);


    const handleSelectedValuesChange = (selectedOptions) => {
        setSelectedValues(selectedOptions);
      };

    const [formData, setFormData] = useState({
        empId: '',
        name: '',
        empStatus: '',
        location: '',
        designation: '',
        department: '',
        process: '',
        lob: '',
        doj: '',
        lastWorkingDay: '',
        trainingStart: '',
        trainingEnd: '',
        onFloorDate: '',
        floorStatus: 'On Floor',
        tenure: '',
        tenureBucket: 'active',
        wfhWfo: '',
        agentNonAgent: '',
        ftPt: 'active',
        supervisorL1: 'active',
        supervisorL2: 'active',
        panNumber: '',
        aadharNumber: '',
        gender: '',
        dob: '',
        age: '',
        ageGroup: 'active',
        fatherHusbandName: '',
        guardianName: '', // Reset new field here
        reference1: '', // Reset new field here
        maritalStatus: '', // Reset new field here
        qualification: '', // Reset new field here
        eduCategory: '',
        currentPursuing: '',
        completionYear: '',
        university: '', // Added university field
        religion: '', // Added religion field
        bloodGroup: '', // Added bloodGroup field
        nationality: '',
        category: '',
        officialEmail: '',
        personalEmail: '',
        contactNumber: '',
        emergencyContact: '',
        fullPresentAddress: '',
        fullPermanentAddress: '',
        fresher: '',
        previousOrganization: '',
        totalExperience: '',
        source: '',
        sourceName: '',
        // languageKnows: '',
        differentlyAbled: '',
        broadCategoryOfDisability: '',
        specificTypeOfDisability: '',
        uanApplicability: '',
        esiApplicability: '',
                        uanNo: '',
                        esiNo: '',
                        bankName: '',
                        bankBranch: '',
                        bankAccountNo: '',
                        ifscCode: '',
                        ctc: '',
                        inhandSalary: '',
        
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://192.168.2.11:5050/mdb/data/insert',{ ...formData, 
            languageKnows: selectedValues });
            console.log('Response:', response.data);
            setFormData({
                empId: '',
                name: '',
                empStatus: '',
                location: '',
                designation: '',
                department: '',
                process: '',
                lob: '',
                doj: '',
                lastWorkingDay: '',
                trainingStart: '',
                trainingEnd: '',
                onFloorDate: '',
                floorStatus: 'On Floor',
                tenure: '',
                tenureBucket: 'active',
                wfhWfo: '',
                agentNonAgent: '',
                ftPt: 'active',
                supervisorL1: 'active',
                supervisorL2: 'active',
                panNumber: '',
                aadharNumber: '',
                gender: '',
                dob: '',
                age: '',
                ageGroup: 'active',
                fatherHusbandName: '',
                guardianName: '', // Reset new field here
                reference1: '', // Reset new field here
                maritalStatus: '', // Reset new field here
                qualification: '', // Reset new field here
                eduCategory: '',
                currentPursuing: '',
                completionYear: '',
                university: '', // Added university field
                religion: '', // Added religion field
                bloodGroup: '', // Added bloodGroup field
                nationality: '',
                category: '',
                officialEmail: '',
                personalEmail: '',
                contactNumber: '',
                emergencyContact: '',
                fullPresentAddress: '',
                fullPermanentAddress: '',
                fresher: '',
                previousOrganization: '',
                totalExperience: '',
                source: '',
                sourceName: '',
                // languageKnows: '',
                differentlyAbled: '',
                broadCategoryOfDisability: '',
                specificTypeOfDisability: '',
                uanApplicability: '',
                esiApplicability: '',
                uanNo: '',
                esiNo: '',
                bankName: '',
                bankBranch: '',
                bankAccountNo: '',
                ifscCode: '',
                ctc: '',
                inhandSalary: '',

            });
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h2>Employee Information Form</h2>

        <div style={{ width: '100%', display: "flex", justifyContent: "center", alignItems: "center" }}>
            <form onSubmit={handleSubmit}>
                <div>

                <label htmlFor="empId">Emp ID</label>
                <input className='hghgch' type="text" id="empId" name="empId" value={formData.empId} onChange={handleChange} />
                </div>
                <div>
                
                <label htmlFor="name">Name</label>
                    
                <input className='hghgch' type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
                </div>
                <div>

                
                <label htmlFor="empStatus">Employee Status</label>
                <input className='hghgch' type="text" id="empStatus" name="empStatus" value={formData.empStatus} onChange={handleChange} />
                </div>
                <div>

                
                <label htmlFor="location">Location</label>
                <input className='hghgch' type="text" id="location" name="location" value={formData.location} onChange={handleChange} />
                </div>
                <div>

                
                <label htmlFor="designation">Designation</label>
                <input className='hghgch' type="text" id="designation" name="designation" value={formData.designation} onChange={handleChange} />
                </div>
                <div>

                
                <label htmlFor="department">Department</label>
                <input className='hghgch' type="text" id="department" name="department" value={formData.department} onChange={handleChange} />
                </div>
                <div>

                <label htmlFor="process">Process</label>
                <input className='hghgch' type="text" id="process" name="process" value={formData.process} onChange={handleChange} />
                </div>
                <div>

                
                <label htmlFor="lob">LOB</label>
                <input className='hghgch' type="text" id="lob" name="lob" value={formData.lob} onChange={handleChange} />
                </div>
                
                
                
                <div>
                    <label htmlFor="doj">DOJ</label>
                    <input className='hghgch' type="date" id="doj" name="doj" value={formData.doj} onChange={handleChange} />
                </div>
                
                <div>
                    <label htmlFor="lastWorkingDay">Last working Day</label>
                    <input className='hghgch' type="date" id="lastWorkingDay" name="lastWorkingDay" value={formData.lastWorkingDay} onChange={handleChange} />
                </div>
                
                <div>
                    <label htmlFor="trainingStart">Training Start</label>
                    <input className='hghgch' type="date" id="trainingStart" name="trainingStart" value={formData.trainingStart} onChange={handleChange} />
                </div>
                
                <div>
                    <label htmlFor="trainingEnd">Training End</label>
                    <input className='hghgch' type="date" id="trainingEnd" name="trainingEnd" value={formData.trainingEnd} onChange={handleChange} />
                </div>
                
                <div>
                    <label htmlFor="onFloorDate">On Floor Date</label>
                    <input className='hghgch' type="date" id="onFloorDate" name="onFloorDate" value={formData.onFloorDate} onChange={handleChange} />
                </div>
                
                <div>
                    <label htmlFor="floorStatus">Floor Status</label>
                    <select className='hghgch' id="floorStatus" name="floorStatus" value={formData.floorStatus} onChange={handleChange}>
                        <option value="On Floor">On Floor</option>
                        <option value="In Training">In Training</option>
                    </select>
                </div>

                
                <div>
                    <label htmlFor="tenure">Tenure</label>
                    <input className='hghgch' type="text" id="tenure" name="tenure" value={formData.tenure} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="tenureBucket">Tenure Bucket</label>
                    <select className='hghgch' id="tenureBucket" name="tenureBucket" value={formData.tenureBucket} onChange={handleChange}>
                        <option value="active">On Floor</option>
                        <option value="inactive">In Training</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="wfhWfo">Wfh/Wfo</label>
                    <input className='hghgch' type="text" id="wfhWfo" name="wfhWfo" value={formData.wfhWfo} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="onFloorDate">On Floor Date</label>
                    <input className='hghgch' type="text" id="onFloorDate" name="onFloorDate" value={formData.onFloorDate} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="agentNonAgent">Agent Non Agent</label>
                    <input className='hghgch' type="text" id="agentNonAgent" name="agentNonAgent" value={formData.agentNonAgent} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="ftPt">FT/ PT</label>
                    <select className='hghgch' id="ftPt" name="ftPt" value={formData.ftPt} onChange={handleChange}>
                        <option value="active">On Floor</option>
                        <option value="inactive">In Training</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="supervisorL1">Supervisor L1</label>
                    <select className='hghgch' id="supervisorL1" name="supervisorL1" value={formData.supervisorL1} onChange={handleChange}>
                        <option value="active">On Floor</option>
                        <option value="inactive">In Training</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="supervisorL2">Supervisor L2</label>
                    <select className='hghgch' id="supervisorL2" name="supervisorL2" value={formData.supervisorL2} onChange={handleChange}>
                        <option value="active">On Floor</option>
                        <option value="inactive">In Training</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="panNumber">Pan Number</label>
                    <input className='hghgch' type="text" id="panNumber" name="panNumber" value={formData.panNumber} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="aadharNumber">Aadhar Number</label>
                    <input className='hghgch' type="text" id="aadharNumber" name="aadharNumber" value={formData.aadharNumber} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="gender">Gender</label>
                    <input className='hghgch' type="text" id="gender" name="gender" value={formData.gender} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="dob">DOB</label>
                    <input className='hghgch' type="date" id="dob" name="dob" value={formData.dob} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input className='hghgch' type="text" id="age" name="age" value={formData.age} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="ageGroup">Age Group</label>
                    <select className='hghgch' id="ageGroup" name="ageGroup" value={formData.ageGroup} onChange={handleChange}>
                        <option value="active">On Floor</option>
                        <option value="inactive">In Training</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="fatherHusbandName">Father HusbandName</label>
                    <input type="text" className='hghgch' id="fatherHusbandName" name="fatherHusbandName" value={formData.fatherHusbandName} onChange={handleChange} />
                </div>

                <div>
                      <label htmlFor="guardianName">Guardian Name</label>
                    <input type="text" className='hghgch' id="guardianName" name="guardianName" onChange={handleChange} />
                </div>

                <div>
                        <label htmlFor="reference1">Reference 1</label>
                         <input type="text" id="reference1" className='hghgch' name="reference1" onChange={handleChange} />
                </div>

                <div>
                       <label htmlFor="maritalStatus">Marital Status</label>
                        <select className='hghgch' id="maritalStatus" name="maritalStatus" onChange={handleChange}>
                           <option value="active">On Floor</option>
                            <option value="inactive">In Training</option>
                        </select>
                </div>

               <div>
                      <label htmlFor="qualification">Qualification</label>
                      <input type="text" id="qualification" className='hghgch' name="qualification" onChange={handleChange} />
               </div>

              <div>
                   {/* <label htmlFor="eduCategory">Edu Category</label>
                  <input type="text" id="eduCategory" className='hghgch' name="eduCategory" />
                     */}
                   <label htmlFor="eduCategory">Edu Category</label>
                   <select className='hghgch' id="eduCategory" name="eduCategory" value={formData.eduCategory} onChange={handleChange}>
                    <option value="active">On Floor</option>
                     <option value="inactive">In Training</option>
                    </select>
                </div>
            <div>
                {/* <label htmlFor="currentPursuing">Current Pursuing</label>
                 <input type="text" id="currentPursuing" className='hghgch' name="currentPursuing" /> */}
               <label htmlFor="currentPursuing"> Current Pursuing</label>
               <select className='hghgch' id="currentPursuing" name="currentPursuing" value={formData.currentPursuing} onChange={handleChange}>
                <option value="Yes">Yes</option>
               <option value="No">No</option>
            </select>
        </div>
         <div>
                  <label htmlFor="completionYear">Completion Year</label>
                 <input className='hghgch' type="text" id="completionYear" name="completionYear" value={formData.completionYear} onChange={handleChange} />
         </div>

         <div>
                    <label htmlFor="eduCategory">Edu Category</label>
                    <select className='hghgch' id="eduCategory" name="eduCategory" value={formData.eduCategory} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="On Floor">On Floor</option>
                        <option value="In Training">In Training</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="currentPursuing"> Current Pursuing</label>
                    <select className='hghgch' id="currentPursuing" name="currentPursuing" value={formData.currentPursuing} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="bloodGroup">Blood Group </label>
                    <select className='hghgch' id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>

                <div>
    <label htmlFor="nationality">Nationality</label>
    <select className='hghgch' id="nationality" name="nationality" value={formData.nationality} onChange={handleChange}>
        <option value="Indian">Indian</option>
        <option value="American">American</option>
        <option value="British">British</option>
        {/* Add more options as needed */}
    </select>
</div>
<div>
    <label htmlFor="category">Category</label>
    <select className='hghgch' id="category" name="category" value={formData.category} onChange={handleChange}>
        <option value="Category A">Category A</option>
        <option value="Category B">Category B</option>
        <option value="Category C">Category C</option>
        {/* Add more options as needed */}
    </select>
</div>
<div>
    <label htmlFor="officialEmail">Official Email</label>
    <input className='hghgch' type="text" id="officialEmail" name="officialEmail" value={formData.officialEmail} onChange={handleChange} />
</div>
<div>
    <label htmlFor="personalEmail">Personal Email</label>
    <input className='hghgch' type="text" id="personalEmail" name="personalEmail" value={formData.personalEmail} onChange={handleChange} />
</div>
<div>
    <label htmlFor="contactNumber">Contact Number</label>
    <input className='hghgch' type="text" id="contactNumber" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
</div>

<div>
                    <label htmlFor="emergencyContact">Emergency Contact :</label>
                    <input type="text" className='hghgch' id="emergencyContact" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="fullPresentAddress">Full Present Address:</label>
                    <input type="text" className='hghgch' id="fullPresentAddress" name="fullPresentAddress" value={formData.fullPresentAddress} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="fullPermanentAddress">Full Permanent Address:</label>
                    <input type="text" className='hghgch' id="fullPermanentAddress" name="fullPermanentAddress" value={formData.fullPermanentAddress} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="fresher">Fresher:</label>
                    <input type="text" className='hghgch' id="fresher" name="fresher" value={formData.fresher} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="previousOrganization">Previous Organization:</label>
                    <input type="text" className='hghgch' id="previousOrganization" name="previousOrganization" value={formData.previousOrganization} onChange={handleChange} />
                </div>

                <div>
                    <label htmlFor="totalExperience">Total Experience:</label>
                    <input type="text" className='hghgch' id="totalExperience" name="totalExperience" value={formData.totalExperience} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="source">Source:</label>
                    <input type="text" className='hghgch' id="source" name="source" value={formData.source} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="sourceName">Source Name:</label>
                    <input type="text" className='hghgch' id="sourceName" name="sourceName" value={formData.sourceName} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="languageKnows">Language Known:</label>

                    {/* <input type="text" className='hghgch' id="languageKnows" name="languageKnows" value={formData.languageKnows} onChange={handleChange} /> */}
<Select onChange={handleSelectedValuesChange}
    defaultValue={[options[2], options[3]]}
    isMulti
    name="colors"
    options={options}
    className="basic-multi-select"
    classNamePrefix="select"
  />

                </div>
                <div>
                    <label htmlFor="differentlyAbled">Differently Abled:</label>
                    <input type="text" className='hghgch' id="differentlyAbled" name="differentlyAbled" value={formData.differentlyAbled} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="broadCategoryOfDisability">Broad Category of Disability:</label>
                    <input type="text" className='hghgch' id="broadCategoryOfDisability" name="broadCategoryOfDisability" value={formData.broadCategoryOfDisability} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="specificTypeOfDisability">Specific Type of Disability:</label>
                    <input type="text" className='hghgch' id="specificTypeOfDisability" name="specificTypeOfDisability" value={formData.specificTypeOfDisability} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="uanApplicability">UAN Applicability:</label>
                    <input type="text" className='hghgch' id="uanApplicability" name="uanApplicability" value={formData.uanApplicability} onChange={handleChange} />
                </div>


                <div>

                            <label htmlFor="esiApplicability">ESI Applicability:</label>
                             <input type="text" className='hghgch' id="esiApplicability" name="esiApplicability" value={formData.esiApplicability} onChange={handleChange} />

                         </div>
                         <div>

                             <label htmlFor="uanNo">UAN No:</label>
                             <input type="text" className='hghgch' id="uanNo" name="uanNo" value={formData.uanNo} onChange={handleChange} />

                         </div>
                         <div>
                            <label htmlFor="esiNo">ESI No:</label>
                             <input type="text" className='hghgch' id="esiNo" name="esiNo" value={formData.esiNo} onChange={handleChange} />

                         </div>
                         <div>
                            <label htmlFor="bankName">Bank Name:</label>
                             <input type="text" className='hghgch' id="bankName" name="bankName" value={formData.bankName} onChange={handleChange} />

                         </div>



                         <div>

<label htmlFor="bankBranch">Bank Branch:</label>
<input type="text" className='hghgch' id="bankBranch" name="bankBranch" value={formData.bankBranch} onChange={handleChange} />

</div>
<div>

<label htmlFor="bankAccountNo">Bank Account No:</label>
<input type="text" className='hghgch' id="bankAccountNo" name="bankAccountNo"  value={formData.bankAccountNo} onChange={handleChange} />

</div>
<div>

<label htmlFor="ifscCode">IFSC Code:</label>
<input type="text" className='hghgch' id="ifscCode" name="ifscCode" value={formData.ifscCode} onChange={handleChange} />
</div>

<div>

<label htmlFor="ctc">CTC:</label>
<input type="text" className='hghgch' id="ctc" name="ctc" value={formData.ctc} onChange={handleChange} />

</div>
<div>

<label htmlFor="inhandSalary">Inhand Salary:</label>
<input type="text" className='hghgch' id="inhandSalary" name="inhandSalary" value={formData.inhandSalary} onChange={handleChange} />

</div>

                <button className='epicOne' type="submit">Submit</button>
            </form>
        </div>
        </div>

    );
}







