import React from 'react'

export default function card(props) {
  return (
    <div class="card">

      <div class="card-body">
        <div className='card-img'>
          <img src={props.img} alt="" />
        </div>

        <h3>{props.titlcard}</h3>
        <p>{props.price}</p>
        <a href="#" class="btn">View Details</a>
      </div>
    </div>
  )
}
