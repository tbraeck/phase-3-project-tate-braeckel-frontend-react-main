
import React, { useState } from 'react';
// import { useParams } from 'react-router';

const NewResource = ({subject, subjects, setSubjects}) => {
const [resourceFormData, setResourceFormData] = useState({
    name: '',
    description: '',
    url: '',
    subject_id: subject.id
    })

  const {name, description, url, subject_id} = resourceFormData
  // console.log(resource)

console.log(resourceFormData)

const handleResourceChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  setResourceFormData({...resourceFormData, [name] :value})
}
// console.log(subject.resources)
let subjectOptions = subjects.map(subject => (
  <option value={subject.id} key={subject.id} defaultValue={'Select'}>{subject.name}</option>
))

const handleSubmitResource = (e) =>{
    e.preventDefault()
    fetch( "http://localhost:9292/resources", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },
        body: JSON.stringify(resourceFormData),
    })
        .then((r) => r.json())
        .then((newResourceData) => {
          const newResourceArray = {
            ...subject, resources: [subject.resources, newResourceData]
           }
           const updatedSubjects = subjects.map(sub => sub.id === newResourceData.subject_id ? newResourceArray : sub)

         setSubjects(updatedSubjects)
            setResourceFormData({
              name: "",
              description: "",
              url:"",
              subject_id:""
            })
        })
  }


return (
  <div className="newResourceForm" >
    <div className="h2Wrapper">
      <h2 className="newResourceH2">  <b>A</b>dd  <b>N</b>ew  <b>R</b>esources  <b>H</b>ere  </h2>
    </div>
        <br/><br/>
            <form className="form" onSubmit={handleSubmitResource}>
                  <input className="formInput" type="text" name="name" placeholder="Resource Name" value={name} onChange={handleResourceChange} />
                  <input className="formInput" type="text" name="description" placeholder="Description" value={description} onChange={handleResourceChange} />
                  <input className="formInput" type="text" name="url" placeholder="URL" value={url} onChange={handleResourceChange} /> 
                  <select type="integer" name='subject_id' value={subject_id} defaultValue="None" onChange={handleResourceChange}>
                    {subjectOptions}
                  </select>
                <div>
                  <button className="formButton" type="submit">ADD</button>
                </div>
            </form>
      </div>
  );
};

export default NewResource;







//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('/api/items', { resource });
//       onCreated(response.data);
//       setResource('');
//     } catch (error) {
//       console.log(error);
//     }
//   };





// import React from 'react'
// import { useState } from 'react'

// function NewResource({ handleAdd, subjectID }) {
//     const [name, setName] = useState("")
//     const [description, setDescription] = useState("");
//     const [url, setUrl] = useState("")

//     function handleSubmit() {
//         // e.preventDefault();

//         let newResource = {
//             name: name,
//             description: description,
//             url: url,
//             subject_id: subjectID
//         }


//         fetch(`http://localhost:9292/resources`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": 'application/json',
//             },
//             body: JSON.stringify(newResource)
//         })
//             .then((r) => r.json())
//             .then((aResource) => handleAdd(aResource))
//             console.log(newResource)
//     }


//     return (
//         <div className="newResourceForm" >
//             <div className="h2Wrapper">
//                 <h2 className="newResourceH2">  <b>A</b>dd  <b>N</b>ew  <b>R</b>esources  <b>H</b>ere  </h2>
//             </div>
//             <br/>            <br/>

//             <form className="form" onSubmit={handleSubmit}>
//                 <input className="formInput" type="text" name="name" placeholder="Resource Name" value={name} onChange={(e) => setName(e.target.value)} />
//                 <input className="formInput" type="text" name="description" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
//                 <input className="formInput" type="text" name="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />
                
//                 <div>
//                 <button className="formButton" type="submit">Add Resource</button>

//                     </div>
//             </form>
//         </div>
//     )
// }

// export default NewResource


    // <form onSubmit={handleSubmit}>
    //   <input
    //     type="text"
    //     value={resource}
    //     onChange={(e) => setResource(e.target.value)}
    //     placeholder="Enter name"
    //   />
    //   <button type="submit">Create</button>
    // </form>