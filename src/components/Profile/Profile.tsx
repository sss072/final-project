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


// dont know how to grab data from submit form and use it to make api call using the functions below.
//also i didnt use server.tsx as i thought i could just make the functions here without needing to create them seperately.


// let token = "5da5010b3446191cc7eaaf11e8835f9c"
// export const server_calls = {
//   get: async () => {
//       const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${location}&appid=${token}`,{
//           method: 'GET'
//       });
//       if (!response.ok){
//           throw new Error('Failed to fetch your data from the server...')
//       }
//       return await response.json()
//     },
//   create: async(data: any = {}) => {
//       const response = await fetch(`api.openweathermap.org/data/2.5/weather?q=${location}&appid=${token}`,{
//           method: 'POST'
//       });
//       if(!response.ok){
//           throw new Error('Failed to Create new data on server')
//       }

//       return await response.json()
//   }
// }














