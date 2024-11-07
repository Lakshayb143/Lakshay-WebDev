import React from "react";
import avatar from "../../../assets/default-avatar.svg"

export function Person({name , nickName = "Default Nickname" , images }) {

  // const img = images[0].small.url; // This will give a huge error

  // Using short circuit evaluation
  // const img = (images && images[0] && images[0].small && images[0].small.url) || avatar;

  // Using optional chaining
  // const img = images?.[0]?.small?.url || avatar; 
  // Combining with nullish coalescing operator ??
  const img = images?.[0]?.small?.url ?? avatar;

  // Difference between ?? and ||


  const imgStyle = {
    width : '100px',
    height : '100px',
    borderRadius : '50%',
  }
  return (
      <div >
        <img style={imgStyle} src={img} alt={name} />
        <h4>{name}</h4>
        <p>Nickname : {nickName}</p>

      </div>
  
  );
}
