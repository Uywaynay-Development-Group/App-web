import React from 'react'
import "../../css/styles.css"

const Title = (title) => {
    return (
        <div className='title'>
            <img src='./img/img_medicdetail.png' alt='imagen 1'/>
            <p>{title.content}</p>
        </div>
    )
}

export default Title