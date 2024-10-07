import React from 'react';
import "../components/Brands.css";

function Brands() {
    return (
      <div className="brands-container">
        <img
          id="brands-img"
          src="https://n.nordstrommedia.com/it/46c8a79a-6e8f-4358-9e63-8b221a435905.png?h=200&w=1608"
        />
        <img
          id="brands-img"
          src="https://n.nordstrommedia.com/id/711783c2-afb6-48cb-aaa5-a3f272c55065.png?h=200&w=1608"
        />
        <img
          id="brands-img"
          src="https://n.nordstrommedia.com/it/05fa468c-4c3c-4d6d-838c-69a5a34f3009.png?h=200&w=1608"
        />
      </div>
    );
}

export default Brands;
