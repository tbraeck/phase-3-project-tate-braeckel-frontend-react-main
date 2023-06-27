
import React, { useState } from 'react';

const NewSubject = ({handleAdd}) => {
  const [subjectFormData, setSubjectFormData] = useState({
    name: '',
    description: '',
    url: '',
    resources: []
  })

const {name, description, url} = subjectFormData;

const handleSubjectChange = (e) => {
  let name = e.target.name;
  let value = e.target.value;
  setSubjectFormData({...subjectFormData, [name] :value})
}

const handleSubmitSubject = (e) => {
    e.preventDefault()
    fetch( "http://localhost:9292/subjects", {
      method: "POST",
      headers: {
        "Content-Type": 'application/json',
      },
        body: JSON.stringify(subjectFormData),
      })
        .then((r) => r.json())
        .then(newSubjectData => {
            handleAdd(newSubjectData)
            setSubjectFormData({
              name: "",
              description:"",
              url:""
            })
      })
  }

return (
  <div className="newSubjectForm" >
    <div className="h2WrapperSub">
      <h2 className="newSubjectH2">  <b>A</b>dd  <b>N</b>ew  <b>S</b>ubjects  <b>H</b>ere  </h2>
    </div>
        <br/><br/>
      <form className="subjectForm" onSubmit={handleSubmitSubject}>
        <input className="formInputSubject" type="text" name="name" placeholder="Subject Name" value={name} onChange={handleSubjectChange} />
        <input className="formInputSubject" type="text" name="description" placeholder="Description" value={description} onChange={handleSubjectChange} />
        <input className="formInputSubject" type="text" name="url" placeholder="URL" value={url} onChange={handleSubjectChange} />
        <div>
          <button className="formButtonSubject" type="submit">ADD</button>
        </div>
      </form>
  </div>
  );
};

export default NewSubject;







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