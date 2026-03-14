
import axios from "axios";
const baseUrl = "http://localhost:8081/airticket/api/v1/airports";

const fetchToken = ()=>{
   const token = localStorage.getItem("cmjd112")
   return "Bearer "+token
}

const saveAirportData = async (airportData :any)=>{
     try{
        const response = await axios.post(baseUrl,airportData,
         
         {
            headers:{
               Authorization: fetchToken()
            }
         }
         )
        return response.status;
     }catch(err){
        console.error(err)
     }
}

 const getAirportData = async ()=>{
    try{
       const response = await axios.get(baseUrl,
         {
            headers:{
               Authorization: fetchToken()
            }
         }
         )
       return response.data
    }catch(err){
       console.error(err)
    }
}
 const updateAirportData = async (tobeUpdatedairportData: any)=>{
   try{
      const response = await axios.patch(
         `${baseUrl}/${tobeUpdatedairportData.airportId}`,
         tobeUpdatedairportData)
      return response.status;
   }catch(err){
      console.error(err)
   }
}

 const deleteAirportData = async (airportId :any)=>{
   try{
      const response = await axios.delete(
         `${baseUrl}/${airportId}`
      )
      return response.status
   }catch(err){
      console.error(err)
   }
}

export { saveAirportData, getAirportData, updateAirportData,deleteAirportData}
