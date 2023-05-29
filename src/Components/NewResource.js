import React from 'react'
import { useState } from 'react'

function NewResource({ addNewResource }) {
    const [subject, setSubject] = useState("")
    const [name, setName] = useState("")
    const [description, setDescription] = useState("");
    const [url, setUrl] = useState("")




    function handleSubmit(e) {
        e.preventDefault();

        let newResource = {
            subject: subject,
            name: name,
            description: description,
            url: url
        }


        fetch(`http://localhost:9292/resources`, {
            method: "POST",
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(newResource)
        })
            .then((r) => r.json())
            .then((aResource) => addNewResource(aResource))
    }


    return (
        <div className="newResourceForm" >
            <div className="h2Wrapper">
                <h2 className="newResourceH2">  Add New Resources Here  </h2>
            </div>
            <form className="form" onSubmit={handleSubmit}>
                <input className="formTitle" type="text" name="name" placeholder="Resource Name" value={name} onChange={(e) => setName(e.target.value)} />

                <input className="formDescription" type="text" name="description" placeholder="description" value={description} onChange={(e) => setDescription(e.target.value)} />

                <input className="formUrl" type="text" name="url" placeholder="URL" value={url} onChange={(e) => setUrl(e.target.value)} />

                <input className="formSubject" type="text" name="subject" placeholder="subject" value={subject} onChange={(e) => setSubject(e.target.value)} />

                <button className="formButton" type="submit">Add Resource</button>
            </form>
        </div>
    )
}

export default NewResource
