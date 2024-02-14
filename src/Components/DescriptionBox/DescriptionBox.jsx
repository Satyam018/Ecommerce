import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="desciptionboxnavigator">
        <div className="descriptionboxnavbox">Description</div>
        <div className="descriptionboxnavbox fade">Reviews (122)</div>
      </div>
      <div className="descriptionboxdescriptions">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam quos
          nam eum, corrupti tenetur aut qui dicta eveniet modi, est ipsa quas
          praesentium nostrum pariatur tempore distinctio, quam ducimus ad!
          Optio architecto, velit amet corrupti, unde voluptatibus modi ducimus
          necessitatibus enim quibusdam quaerat porro reprehenderit delectus
          neque in eum quae!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate
          ut, saepe nisi doloremque reiciendis modi voluptates impedit adipisci
          debitis vitae!
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
