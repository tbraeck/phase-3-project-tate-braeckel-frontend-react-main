import React, { useState } from 'react';
import { useParams } from 'react-router';


const ResourceEdit = ({  onUpdate }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [url, setUrl] = useState('');

const {id} = useParams()


// console.log(resource)
  function handleSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/resources/${id}`, {
            method: "PATCH",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify({ name,description,url })
              })
                .then((res) => res.json())
                .then((data) => {
    
      onUpdate(data);
                })
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter title"
      />
       <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter description"
      />
       <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter url"
      />
      <button type="submit">Update</button>
    </form>
  );
};

export default ResourceEdit;
























// function Resource({ subject, setSubject, resource, deleteResource, handleUpdate}) {
//   const [newName, setNewName] = useState('');
//   const [newDescription, setNewDescripton] = useState('');
//   const [newUrl, setNewUrl] = useState('');

//   const { name, description, url, resources} = subject

// const {id} = useParams()

// useEffect(()=> {
//         fetch(`http://localhost:9292/resources/${id}`)
//         .then(res => res.json())
//         .then(data => {
//           setNewName(data.name)
//           setNewDescripton(data.description)
//           setNewUrl(data.url)
//         } )
//       }, [id])

// console.log(subject)


//   function handleClickDel(id){
//     // e.preventDefault()
//       fetch(`http://localhost:9292/resources/${id}`, {
//         method: "DELETE",
//       });
//        deleteResource(id);
//     }

//     function handleSubmit(e){
//       e.preventDefault()

//           fetch(`http://localhost:9292/resources/${id}`, {
//             method: "PATCH",
//                 headers: {
//                 "Content-Type": "application/json"
//                 },
//                 body: JSON.stringify({newName, newDescription, newUrl})
//               })
//                 .then((res) => res.json())
//                 .then((data) => {
// console.log(data)
//         // const subject = subject.find(sub => 
//         //   sub.id === updatedResource.subject_id)
//         //   const updatedResources = subject.resources.map(resource => {
//         //           if(resource.id === updatedResource.id) {
//         //             return updatedResource
//         //         }
//         //         return resource

//         //       }
//         //       )
//     })}



//  function handleClickEdit(e){
// e.preventDefault()

// setSubject()
//  }
// // };

//   return (
//     <div className='resourceBox'>
//       <br/>
//             <h2>Name: </h2>

//       <h1>{name}</h1>
//       <br/>
//             <h2>Resource #: </h2>

//       <h1>{id}</h1>
//       <br/>
//       <h2>Description: </h2>

//       <h3>{description}</h3>
//       <br/>
//       <h2>Resource URL: </h2>
//       < a href={url} target="_blank" rel="noopener noreferrer">{url}</a>


//             <form onSubmit={(e)=> handleSubmit}>
//             <div className='inputs'>
//             <input
//             className='input'
//           name='New Name'
//               type="text"
//               id='name'
//               placeholder="New Name"
//               value={newName}
//               onChange={(e) => setNewName(e.target.value)}
//             />
//             </div>
//             <input

//             className='input'
//             name='New Description'
//               id='description'
//               placeholder="New Description"
//               value={newDescription}
//               onChange={(e) => setNewDescripton(e.target.value)}
//             />
//             <input
//             className='input'
//               type="text"
//               name='New Url'
//               id='url'
//               placeholder="New Url"
//               value={newUrl}
//               onChange={(e) => setNewUrl(e.target.value)}
//             />
//    <div className='editResBtn'>


//         <button  className="btnStyle" type='submit' style={{height: "50px",width: "200px", fontSize: "large", marginRight: "330px"}} onClick={() => handleClickEdit}>EDIT </button>
//         <button className="btnStyle" type='submit' onClick={handleSubmit} style={{height: "50px",width: "200px",fontSize: "large", marginRight: "330px", marginTop: "40px",paddingBottom: "-15px"}}>Submit Edit</button>
//         </div>
//         </form>

//                 <div className='delBtn'>
//               <button className="btnStyle" type='submit' onClick={ handleClickDel}>DELETE </button>
//               </div>
//         <br/><br/>
//         <br/>
//         <hr/>
//         </div>
//   )
// }

// export default Resource
