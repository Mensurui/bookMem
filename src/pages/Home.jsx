import React from "react"
import { Link } from "react-router-dom";
function Home() {
    return (  
    <div className="home-container">
    <h1>You got the passion of reading we have got the books.</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita earum eos consequatur fugit delectus nobis iusto totam veritatis! Obcaecati laudantium quam nulla consequuntur aperiam distinctio est cum itaque esse delectus!.</p>
    <Link to="vans">Find your book</Link>
</div>
    )
  }

  export default Home;