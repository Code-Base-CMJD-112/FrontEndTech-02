import axios from "axios"

// const baseUrl = "http://localhost:8081/airticket/api/v1/auth"
const baseUrl = "http://localhost:3500/airticket/api/v1/auth"

export const appLogin = async (login: any) =>{
  try{
    const response = await axios.post(
        `${baseUrl}/login`,
        login
    )
    return response.data.token;
  }catch(err){
      console.error(err)
  }
}

export const appSignup = async (signUp: any) =>{
    try{
      const response = await axios.post(
          `${baseUrl}/signup`,
          signUp
      )
      return response.data.token;
    }catch(err){
        console.error(err)
    }
  }