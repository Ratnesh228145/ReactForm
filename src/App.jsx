import { useState } from 'react'
import './App.css'

function App() {

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
                    DBMS : true,
                    CN : false,
                    OS : false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

 const handleSubmit = (e) =>{
  e.preventDefault();
  console.log({
    firstname,
    lastname,
    email,
    contact,
    gender,
    subjects,
    resume,
    url,
    selectedOption,
    about
 });
 };

  const handleSubjectChange = (sub) =>{
    setSubjects((prev) => ({
      ...prev,
      [sub] : !prev[sub],
    }));
  };

  const handleReset =() =>{
    setFirstname("");
    setLastname("");
    setEmail("");
    setContact("");
    setGender("male")
    setSubjects({
      DBMS : true,
      CN : false,
      OS : false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("")
  };

  return (
    <>
    <div>
       <h1>Form in React</h1>
       <form action="#" method='get' >
           <label htmlFor="Firstname">First name</label>&nbsp;&nbsp;&nbsp;

           <input 
              placeholder='Enter a Firstname ...' 
              type='text' 
              id='firstname' 
              value={firstname}
              onChange={(e)=>
                setFirstname(e.target.value)
              }
              required /> <br /><br />
           

            <label htmlFor='Lastname'>Last name</label>&nbsp;&nbsp;&nbsp;
           <input 
              placeholder='Enter a Lastname ...' 
              type='text' 
              id='lastname' 
              value={lastname}
              onChange={(e)=>
                setLastname(e.target.value)
              }
              required></input> <br /><br />

            <label htmlFor='Email' >E-mail</label>&nbsp;&nbsp;&nbsp;
           <input 
               placeholder='Enter a E-mail ...' 
               type='email' 
               id='email'
               value={email}
               onChange={(e)=>
                setEmail(e.target.value)
              }
               required  /> <br /><br />

            <label htmlFor='Contact'>Contact</label>&nbsp;&nbsp;&nbsp;
           <input 
              placeholder='Enter a Contact ...' 
              type='tel' 
              id='contact' 
              value={contact}
              onChange={(e)=>
                setContact(e.target.value)
              }
              required /> <br /><br />

            <label htmlFor='gender'>Gender</label>&nbsp;&nbsp;&nbsp;
           <input 
            type='radio' 
            name='gender'
            value='male'
            id='male'
            checked={gender === "male"}
            onChange={(e)=>
                setGender(e.target.value)
              }
            /> 
            Male 

            <input 
             type='radio'
             name='gender'
             value='female'
             id='female'
             checked={gender === "female"}
             onChange={(e)=>
                setGender(e.target.value)
              }
            />
            Female 

            <input 
             type='radio'
             name='gender'
             value='other'
             id='other'
             checked={gender ==='other'}
             onChange={(e)=>
                setGender(e.target.value)
              }
            />
            other
            <br /><br />


             <label htmlFor='subject'>Your best Subject</label>&nbsp;&nbsp;&nbsp;
           <input 
            type='checkbox' 
            name='subject'
            id='DBMS'
            checked={subjects.DBMS === true}
            onChange={(e)=>
                handleSubjectChange(e.target.value)
              }
            /> 
            DBMS

            <input 
             type='checkbox'
             name='subject'
             id='CN'
             checked={subjects.CN === true}
            onChange={(e)=>
                handleSubjectChange(e.target.value)
              }
            />
            computer network 

            <input 
             type='checkbox'
             name='subject'
             id='OS'
             checked={subjects.OS === true}
            onChange={(e)=>
                handleSubjectChange(e.target.value)
              }
            />
            Operating system
            <br /><br />

            <label htmlFor='file' >Upload Resume*</label>&nbsp;&nbsp;&nbsp;
            <input 
             type='file'
             name='file'
             id='file'
             onChange = {(e)=>
              setResume(e.target.files[0])
             }
             placeholder='Enter Upload file ...'
             required
            />
            <br /><br />

            <label htmlFor='url'>Enter URL</label>&nbsp;&nbsp;&nbsp;
            <input 
             type='url'
             name='url'
             id='url'
             onChange = {(e)=>
              setUrl(e.target.value)
             }
             placeholder='Enter URL'
             required
            /><br /><br />

            <label> Select your choice</label>&nbsp;&nbsp;&nbsp;
            <select 
            name='select'
             id='select'
             value={selectedOption}
             onChange = {(e)=>
              setSelectedOption(e.target.value)
             }>
             
             <option
                value="" 
                disabled
                select={selectedOption === ""}
             > Select your answer </option>

             <optgroup label="Beginers">
               <option value="1">HTML</option>
               <option value="2">CSS</option>
               <option value="3">javaScript</option>
             </optgroup>

             <optgroup label="Advance">
               <option value="4">React</option>
               <option value="5">NODE</option>
               <option value="6">Express</option>
               <option value="t">MongoDB</option>
             </optgroup> 
            </select>
            <br /><br />

            <label htmlFor='about'>About</label><br />&nbsp;&nbsp;&nbsp;
            <textarea
             name='about'
             id='about'
             cols='30'
             rows='10'
             onChange = {(e)=>
              setAbout(e.target.value)
             }
             placeholder='about your self...'
             required
            ></textarea><br /><br />

            <button
            type='reset'
            value='reset'
            onClick= {()=>handleReset()}
            >
               Reset
            </button> 

            <button
            type='submit'
            value='submit'
            onClick= {(e)=>handleSubmit(e)}
            >
               Submit
            </button>


       </form>
    </div>
    </>
  )
}

export default App
