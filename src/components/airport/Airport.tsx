export default function Airport() {
  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-900">
        <body class="h-full">
        ```
      */}
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
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-black-100">
                Airport Code
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-black-100">
                Airport Name
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-black-100">
                City
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  className="w-full border rounded-md px-3 py-2"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-black-100">
                Country
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
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
                type="submit"
                className="flex w-full justify-center rounded-md bg-red-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Reset
              </button>
            </div>
          </form>

        
        </div>
      </div>
    </>
  )
}
