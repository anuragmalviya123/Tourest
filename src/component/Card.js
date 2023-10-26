import { useState } from "react";

function Card({id,name,info,image,price,removetour}){
  
     const [readmore,setReadmore] = useState(false);
     const descripton = readmore ? info : `${info.substring(0,200)}....`;
     

     function readmoreHanler(){
      setReadmore(!readmore);
     } 

      return(
        <div className="card">
           <img src={image} className="image"></img>
           <div className="tour-info">
                 <div className="tour-details">
                      <h4 className="tour-price">${price}</h4>
                      <h4 className="tour-name">{name}</h4>
                </div>

                <div className="descripton">
                           {descripton}
                      <span className="read-more" onClick={readmoreHanler}>
                           {readmore ? `Show Less`: `Read More`}
                      </span>
                </div>
           </div>
           <button className="btn-red" onClick={() => removetour(id)}>
            Not Instrested
           </button>


        </div>
      );
}
export default Card;