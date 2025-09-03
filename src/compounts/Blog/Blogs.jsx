import React from 'react'
import '../Blog/Blogs.css'
import img1 from "./Assetsblogs/b1.jpg"
import img2 from "./Assetsblogs/b2.jpg"
import img3 from "./Assetsblogs/b3.jpg"
import Blog from './Blog'
export default function Blogs() {
  return (
  
<>
<section class="blog">
  <div class="container">
    <h2 class="section-title">LATEST BLOG</h2>

    <div class="blog-cards">
     <Blog img={img1} titleblog="Look even slightly believable if you are" parablog={"alteration in some form, by injected humour, or randomised words which dont look even slightly believable."}/>
     <Blog img={img2} titleblog="any thing embarrsing hidden in the " parablog={"alteration in some form, by injected humour, or randomised words which dont look even slightly believable."}/>
     <Blog img={img3} titleblog=" of a page when looking at its layout. " parablog={"alteration in some form, by injected humour, or randomised words which dont look even slightly believable."} />

      
      
    </div>
  </div>
</section>

</>
  )
}
