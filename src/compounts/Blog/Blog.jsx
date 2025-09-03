import React from 'react'

export default function Blog(props) {
  return (
    <div className="blog-card">

        <img src={props.img} alt="img blog" />
        <div className="blog-text">
          <h3>{props.titleblog}</h3>
          <p>
            {props.parablog}
          </p>
          <a href="#" className="btn btn-blue">Read More</a>
        </div>
      </div>
  )
}
