import { useState } from "react";

interface LoginModel {
    email:string,
    password:string
}
export const Login = () => {

  const [login, setLogin] = useState<LoginModel>(
      {
        email:"",
        password:"",
      }
  );
  
  const handleOnChange = () =>{

  }

  const handleOnSubmit = ()=>{

  }  
  return (
    <>
      <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              alt="Your Company"
              src="https://files.softicons.com/download/web-icons/vista-poi-icons-by-icons-land/ico/AirportBlue.ico"
              className="mx-auto h-10 w-auto"
            />
            <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-black">
              Please login from here...
            </h2>
            {/* <div>
              {alertView && (
                <Alert
                  type={alertView.type}
                  message={alertView.message}
                  onClose={() => setAlertView(null)}
                />
              )}
            </div> */}
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleOnSubmit}>
              <div>
                <label
                  htmlFor="airportCode"
                  className="block text-sm/6 font-medium text-black-100"
                >
                  Email
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={login.email}
                    required
                    onChange={handleOnChange}
                    className="w-full border rounded-md px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="airportName"
                  className="block text-sm/6 font-medium text-black-100"
                >
                 Password
                </label>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={login.password}
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
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
