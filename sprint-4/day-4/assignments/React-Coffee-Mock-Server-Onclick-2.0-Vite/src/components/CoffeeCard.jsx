import React from "react";

const CoffeeCard = ({item}) => {
  return <div>
    <img src={item.image} alt={item.title} />
    <h2 className="title">{item.title}</h2>
    <p className="price">	&#8377; {item.price}</p>
    <p className="description">	&#8377; {item.description}</p>
    <ul className="ingredient">
      {
        item.ingredients?.map( (item,index)=>{
          return <li key={index}>{item}</li> ;
        } )
      }
    </ul>
  </div>;
};

export default CoffeeCard;


// description: "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir."
// id: "1"
// image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/A_small_cup_of_coffee.JPG/640px-A_small_cup_of_coffee.JPG"
// ingredients: ['Coffee']
// price: 540
// title: "Black"