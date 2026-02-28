import { ChangeEvent, useEffect, useState } from "react";
import { getAirportData, saveAirportData } from "../service/AirportService";

export default function Airport() {
  interface AirportModel {
    airportId:string,
    airportCode:string,
    airportName:string,
    city:string,
    country:string
  }
  const [airport,setAirport] = useState<AirportModel>(
    {
      airportId: "",
      airportCode: "",
      airportName: "",
      city: "",
      country: ""
    }
  );
  const tblHeaders : string[]= [
      "Airport Id",
      "Airport Code",
      "Airport Name",
      "City",
      "Country",
      "Action",
  ]
  const [airportList,setAirportList] = useState<AirportModel[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) =>{
     const {name,value} = e.target;
     setAirport((prev) => ({...prev, [name]: value}));
  };

  //Data save

  const handleOnSubmit = async (e: React.SyntheticEvent)=>{
      e.preventDefault()
      const responseStatus = await saveAirportData(airport);
      if(responseStatus !== 201){
        alert("Saved Data Failed")
        return
      }
      alert("Saved Data Succesfully");
  }

  //load airport data when component mount
   useEffect(()=>{
    fetchAirportData()
   },[])

  const fetchAirportData = async () =>{
      const data  = await getAirportData()
      setAirportList(data)
  } 

  const handleOnDelete = ()=>{

  }
  const handleOnUpdate = ()=>{

  }
  const handleTbleView = () =>{
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://files.softicons.com/download/web-icons/vista-poi-icons-by-icons-land/ico/AirportBlue.ico"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">Airpot Details</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleOnSubmit}>
            <div>
              <label htmlFor="airportCode" className="block text-sm/6 font-medium text-black-100">
                Airport Code
              </label>
              <div className="mt-2">
                <input
                  id="airportCode"
                  name="airportCode"
                  type="text"
                  value={airport.airportCode}
                  required
                  onChange={handleOnChange}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="airportName" className="block text-sm/6 font-medium text-black-100">
                Airport Name
              </label>
              <div className="mt-2">
                <input
                  id="airportName"
                  name="airportName"
                  type="text"
                  required
                  value={airport.airportName}
                  onChange={handleOnChange}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="city" className="block text-sm/6 font-medium text-black-100">
                City
              </label>
              <div className="mt-2">
                <input
                  id="city"
                  name="city"
                  type="text"
                  required
                  value={airport.city}
                  onChange={handleOnChange}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="country" className="block text-sm/6 font-medium text-black-100">
                Country
              </label>
              <div className="mt-2">
                <input
                  id="country"
                  name="country"
                  type="text"
                  required
                  value={airport.country}
                  onChange={handleOnChange}
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>


            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-blue-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Save
              </button>
            </div>
            <div>
              <button
                type="reset"
                className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Reset
              </button>
            </div>
            <div>
              <button
                onClick={handleTbleView}
                type="reset"
                className="flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                View Airports
              </button>
            </div>
            
          </form>        
        </div>
      </div>

      {/* Table with Model */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white w-11/12 max-w-8xl rounded-lg shadow-lg p-6 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✕
            </button>

            <h2 className="text-xl font-bold mb-4">Airport List</h2>

            <div className="overflow-x-auto">
              <table className="w-full border border-gray-300 text-left">
                <thead className="bg-gray-100">
                  <tr>
                     {tblHeaders.map((th,index)=> (
                       <th key={index}>{th}</th>
                     ))} 
                  </tr>
                </thead>
                <tbody>
                  {airportList.map((ap, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-4 py-2 border">{ap.airportId}</td>
                      <td className="px-4 py-2 border">{ap.airportCode}</td>
                      <td className="px-4 py-2 border">{ap.airportName}</td>
                      <td className="px-4 py-2 border">{ap.city}</td>
                      <td className="px-4 py-2 border">{ap.country}</td>
          
                      <td className="px-4 py-2 border">
                        <button
                          className="bg-green-600 text-white px-3 py-1 text-sm rounded mr-2"
                        
                        >
                          Edit
                        </button>
                        <button
                          className="bg-red-600 text-white px-3 py-1 text-sm rounded"
                         
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
