import React from "react";

const Card = (props) => {
  const { images, input } = props;
  console.log("images are", images);
  return (
    <div className="grid-container">
      {images
        .filter((item, i) => {
          if (item.name.includes(input)) {
            return item;
          }
        })
        .map((item, index) => {
          return (
            <div className="card" key={index}>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${
                  index + 1
                }.png`}
              />
              <p className="pokename">{item.name}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Card;
