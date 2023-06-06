import React from 'react'
import { useState } from 'react'

function NewResource({ handleAdd, subjectID }) {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("")

    function handleSubmit() {
        // e.preventDefault();

        let newResource = {
            name: name,
            description: description,
            url: url,
            subject_id: subjectID
        }


        fetch(`http://localhost:9292/resources`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(newResource)
        })
            .then((r) => r.json())
            .then((aResource) => handleAdd(aResource))
            console.log(newResource)
    }


    return (
        <div className="newResourceForm" >
            <div className="h2Wrapper">
                <h2 className="newResourceH2">  Add New Resources Here  </h2>
            </div>
            <br/>            <br/>

            <form className="form" onSubmit={handleSubmit}>
                <input className="formInput" type="text" name="name" placeholder="Resource Name" value={name} onChange={(e) => setName(e.target.value)} />

                <input className="formInput" type="text" name="description" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />

                <input className="formInput" type="text" name="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />

                <button className="formButton" type="submit">Add Resource</button>
            </form>
        </div>
    )
}

export default NewResource
