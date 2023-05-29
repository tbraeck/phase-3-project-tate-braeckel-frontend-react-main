import React, { useState } from 'react'

function Like() {
    const [dislikeCount, setDislikes] = useState(0)
    const [likeCount, setLikeCount] = useState(0)


    function handleClick(e) {
        e.preventDefault()
        setLikeCount(likeCount + 1)
    }
    function handleClickDislike(e) {
        e.preventDefault()
        setDislikes(dislikeCount - 1)

    }

    return (
        <div>
            <button onClick={handleClick}>Likes 👍</button>
            <p>{likeCount}</p>
            <button onClick={handleClickDislike}>Dislikes 👎</button>
            <p>{dislikeCount}</p>

        </div>
    )
}

export default Like
