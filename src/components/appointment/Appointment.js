const Appointment = () => {
  return (
    <div className="bg-[#F2F7FD] mt-24 pb-10">
      <div className="container mx-auto px-4 md:px-0 ">
        <h1 className="text-2xl md:text-3xl text-center font-semibold w-fit mx-auto border-b-2 border-primary mt-10 pb-2">
          Make an Appointment
        </h1>
        <p className="text-sm text-center mt-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          sit fugiat dignissimos est modi minima eaque blanditiis tenetur
          architecto eveniet qui nobis. Mollitia ex reprehenderit neque!
          Nesciunt quasi commodi, voluptas minus maxime, exercitationem harum
          alias suscipit dolores corrupti quaerat cum beatae facilis! Neque nemo
        </p>

        <form className="mt-16">
          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Name
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John Doe"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@gmail.com"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your Phone
              </label>
              <input
                type="number"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
                placeholder="1234567890"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 md:gap-6">
            <div className="mb-6">
              <label
                htmlFor="date"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Appointment Date
              </label>
              <input
                type="date"
                id="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="depertment"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Depertment
              </label>
              <select
                id="depertment"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="1">Cardiology</option>
                <option value="2">Dental</option>
                <option value="3">Neurology</option>
                <option value="4">Orthopedics</option>
                <option value="5">Pediatrics</option>
                <option value="6">Urology</option>
              </select>
            </div>
            <div className="mb-6">
              <label
                htmlFor="doctor"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Select Doctor
              </label>
              <select
                id="doctor"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              >
                <option value="1">John Doe</option>
                <option value="1">John Doe</option>
                <option value="1">John Doe</option>
                <option value="1">John Doe</option>
                <option value="1">John Doe</option>
              </select>
            </div>
          </div>

          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="bg-primary px-4 py-2 rounded-md text-white font-medium"
            >
              Make an Appointment
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Appointment
