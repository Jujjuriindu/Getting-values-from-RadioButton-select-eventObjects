import React, { useRef } from 'react'

function StudentMarks() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let englishInputref = useRef();
    let teluguInputref = useRef();
    let hindiInputref = useRef();
    let mathsInputref = useRef();
    let scienceInputref = useRef();
    let socialInputref = useRef();
    let stateSelectRef = useRef();
    let maleRBRef = useRef();
    let femaleRBRef = useRef();
    let userGender='';
    let userMarital='';
  return (
    <div>
      <form>
        <div>
            <label>First Name :</label>
            <input type="text" ref={firstNameInputRef}></input>
        </div>
        <div>
            <label>Last Name :</label>
            <input type="text" ref={lastNameInputRef}></input>
        </div>
        <div>
            <label>State :</label>
            <select ref={stateSelectRef}>
                <option>Select</option>
                <option>Andhra Pradesh</option>
                <option>Arunachal Pradesh</option>
                <option>Assam</option>
                <option>Bihar</option>
                <option>Chhattisgarh</option>
                <option>Goa</option>
                <option>Gujarat</option>
                <option>Haryana</option>
                <option>Himachal Pradesh</option>
                <option>Jharkhand</option>
                <option>Karnataka</option>
                <option>Kerala</option>
                <option>Madhya Pradesh</option>
                <option>Maharashtra</option>
                <option>Manipur</option>
                <option>Meghalaya</option>
                <option>Mizoram</option>
                <option>Nagaland</option>
                <option>Odisha</option>
                <option>Punjab</option>
                <option>Rajasthan</option>
                <option>Sikkim</option>
                <option>Tamil Nadu</option>
                <option>Telangana</option>
                <option>Uttar Pradesh</option>
                <option>Uttarakhand</option>
                <option>West Bengal</option>
            </select>
        </div>
        <div>
            <label>Gender :</label>
            <input type="radio" name="gender" ref={maleRBRef}
            onChange={()=>{
                if(maleRBRef.current.checked==true){
                    userGender="Male";
                }
            }}></input>
            <label className="genderRadio">Male</label>
            <input type="radio" name="gender" ref={femaleRBRef}
            onChange={()=>{
                if(femaleRBRef.current.checked==true){
                    userGender="Female";
                }
            }}></input>
            <label className="genderRadio">Female</label>
        </div>
        <div>
            <label>Marital Status :</label>
            <input type="radio" name="Marital Status"
            onChange={(eventObj)=>{
                console.log(eventObj.target.checked);
                if(eventObj.target.checked==true){
                    userMarital="Single";
                }
            }}></input>
            <label className="genderRadio">Single</label>
            <input type="radio" name="Marital Status"
            onChange={(eventObj)=>{
                if(eventObj.target.checked==true){
                    userMarital="Married";
                }
            }}></input>
            <label className="genderRadio">Married</label>
        </div>
        <div>
            <label>English Marks :</label>
            <input type="number" ref={englishInputref}></input>
        </div>
        <div>
            <label>Telugu Marks :</label>
            <input type="number" ref={teluguInputref}></input>
        </div>
        <div>
            <label>Hindi Marks :</label>
            <input type="number" ref={hindiInputref}></input>
        </div>
        <div>
            <label>Maths Marks :</label>
            <input type="number" ref={mathsInputref}></input> 
        </div>
        <div>
            <label>Science Marks :</label>
            <input type="number" ref={scienceInputref}></input>
        </div>
        <div>
            <label>Social Marks :</label>
            <input type="number" ref={socialInputref}></input>
        </div>
        <div>
            <button type="button" onClick={()=>{
                let firstName = firstNameInputRef.current.value;
                let lastName = lastNameInputRef.current.value;
                let englishMarks = Number(englishInputref.current.value);
                let teluguMarks = Number(teluguInputref.current.value);
                let hindiMarks = Number(hindiInputref.current.value);
                let mathsMarks = Number(mathsInputref.current.value);
                let scienceMarks = Number(scienceInputref.current.value);
                let socialMarks = Number(socialInputref.current.value);
                let stateSelect = stateSelectRef.current.value;
                let salutation='';

                if(userGender == "Male"){
                    salutation="Mr."
                }
                
                if(userGender == "Female"){
                    if(userMarital=="Single"){
                        salutation="Miss."
                    }
                    if(userMarital=="Married"){
                        salutation="Mrs."
                    }
                }

                let totalMarks=englishMarks+teluguMarks+hindiMarks+mathsMarks+scienceMarks+socialMarks;
                let percentage=(totalMarks/600)*100;
                alert(`${salutation} ${firstName} ${lastName} from ${stateSelect} got Total Marks are ${totalMarks} with ${percentage.toFixed(2)}%`);

            }}>Calculate</button>
        </div>
      </form>
    </div>
  )
}

export default StudentMarks
