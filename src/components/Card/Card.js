import React from 'react'
import './Card.css'


/*var today = new Date()
    var h = today.getHours()
    var m = today.getMinutes()
    var s = today.getSeconds()
    document.getElementById('time').innerHTML = h + ':' + m + ':' + s;*/



let Card = (props) => {
    return (
        <div className='center'>
        <div className='card'>
            <p><b>{props.user}</b></p>
            <div className='hour'>
            <p id='time'></p>
            </div>
            <img className="size" src={props.pic}/>
            <p><b>Whats on your mind:</b>&nbsp;{props.description}</p>
        </div>
        </div>
    )
}

export default Card
