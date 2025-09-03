import React from 'react'
import'../About/About.css'
import img from "./Assestabout/about-img.png"

export default function About() {
  return (
   
<section class="about">
  <div class="container about-content">
    <div class="about-img">
      <img src={img} alt="about us illustration" />
    </div>
    <div class="about-text">
      <h2>ABOUT US</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti dolorem eum consequuntur 
        ipsam repellat dolor soluta aliquid laborum, eius odit consectetur vel quasi in quidem, 
        eveniet ab est corporis tempore.
      </p>
      <a href="#" class="btn btn-blue">Read More</a>
    </div>
  </div>
</section>



  )
}
