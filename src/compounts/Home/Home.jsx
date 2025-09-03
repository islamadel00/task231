import "./Home.css"
import img from "./Assetshome/hero.png"
 function Home() {
  return (
    <>
     <section class="hero">
    <div class="container hero-content">
      <div class="hero-text">
        <h1>FOR ALL YOUR  FURNITURE NEEDS</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Minus quidem maiores perspiciatis, illo maxime voluptatem a itaque suscipit.
        </p>
        <div class="hero-buttons">
          <a href="#" class="btn btn-orange">Contact Us</a>
          <a href="#" class="btn btn-blue">About Us</a>
        </div>
      </div>
      <div class="hero-image">
       <img src={img} alt="img1" />
      </div>
    </div>
  </section>
    </>
  );
}

export default Home
