import React from 'react'
import "../../css/styles.css"

const Title = (title) => {
    return (
        <div className='title'>
            <img src={title.img} alt='imagen 1'/>
            <p>{title.content}</p>
        </div>
    )
}

export default Title