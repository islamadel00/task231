

import React from 'react'
import '../Cards/Cards.css'
import Card from '../Cards/Card.jsx'
import img1 from "./Assetscards/f1.png"
import img2 from "./Assetscards/f2.png"
import img3 from "./Assetscards/f3.png"
import img4 from "./Assetscards/f4.png"
import img5 from "./Assetscards/f5.png"
import img6 from "./Assetscards/f6.png"




export default function Cards() {
  return (
    <section class="furniture">
  <div class="container">
    <h2>OUR FURNITURE</h2>
    <p>
      which don’t look even slightly believable. If you are going to use a passage 
      of Lorem Ipsum, you need to be sure there isn’t an
    </p>

    <div class="furniture-grid">
   
<Card img={img1} titlcard="Brown Sofa" price="$500" />
<Card img={img2} titlcard="bed" price="$200" />
<Card img={img3} titlcard="house chair design" price="$300" />
<Card img={img4} titlcard="table" price="$400" />
<Card img={img5} titlcard="chair tradistional" price="$500" />
<Card img={img6} titlcard="Brown table design" price="$600" />
      
    </div>
  </div>
</section>

  )
}
