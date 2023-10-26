import React, { useState } from "react";
import Tours from './component/Tours';
import data from './data';
const App = () => {

  const [tours,setTours] = useState(data);

  function removetour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours);
  }

   if(tours.length === 0){
      return (
        <div className="refresh">
           <h2>No Tours Left</h2>
           <button className="btn-white" onClick={() => setTours(data)}>
            Refresh
           </button>
        </div>
      );
   }
  return(
     <div className="App">
          <Tours tours={tours} removetour={removetour}></Tours>
     </div>
  )
};

export default App;
