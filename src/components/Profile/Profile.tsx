export const Profile = () =>{
    return(
    <div className="wrapper">
      <h1>Enter Your location</h1>
      <form>
      <fieldset>
         <label>
           <p>Location</p>
           <input name="location" />
         </label>
       </fieldset>
       <button type="submit">Submit</button>
      </form>
    </div>
    )
}



// import { useState } from "react";
// import ReactDOM from 'react-dom';

// export function MyForm() {
//   const [location, setLocation] = useState("");

//   const handleSubmit = (event:any) => {
//     event.preventDefault();
//     alert('The location you entered was: ${location}')
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Enter your location:
//         <input 
//           type="text" 
//           value={location}
//           onChange={(e) => setLocation(e.target.value)}
//         />
//       </label>
//       <input type="submit" />
//     </form>
//   )
// }




