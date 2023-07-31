import React from "react";
import { Link } from "react-router-dom";
function About() {
  return (
    <div>
      <img src="image 55.png" alt="" loading="lazy"></img>
      <div className="m-4 text-left">
        <h1 className="my-2 text-2xl font-semibold ">Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p >
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <br />
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
      <div className="bg-aboutColor m-4 my-6 p-8 rounded text-left">
        <h1 className="text-xl font-medium mb-8 ">Your destination is waiting.
          Your van is ready.</h1>

        <button className="bg-newblack text-white text-md p-3 px-4  rounded hover:translate-y-1">
          <Link to="/vans" > Explore our vans</Link>
        </button>
      </div>
    </div>
  );
}

export default About;
