
import axios from "axios";
const baseUrl = "http://localhost:8081/airticket/api/v1/airports";

const saveAirportData = async (airportData :any)=>{
     try{
        const response = await axios.post(baseUrl,airportData)
        return response.status;
     }catch(err){
        console.error(err)
     }
}

 const getAirportData = async ()=>{
  
}
 const updateAirportData = async ()=>{
  
}

 const deleteAirportData = async ()=>{
  
}

export { saveAirportData, getAirportData, updateAirportData,deleteAirportData}
