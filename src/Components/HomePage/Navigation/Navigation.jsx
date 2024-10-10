import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <div className="fixed h-screen w-80 bg-white rounded-lg  shadow-lg ml-3">
        <div className="p-4">
          <h1 className="text-lg font-bold">Material Tailwind React</h1>
        </div>
        <div className="flex flex-col">
          <div className="py-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 w-64 ml-6 text-white bg-gray-800 rounded-lg"
            >
              <i className="ri-home-2-fill mr-3 text-xl"></i>
              <span className="font-medium">Dashboard</span>
            </a>
          </div>
          <div className="py-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 w-64 ml-6 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <i className="ri-user-3-fill mr-3 text-lg"></i>
              <span className="font-medium">Profile</span>
            </a>
          </div>
          <div className="py-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 w-64 ml-6 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <i className="ri-table-line mr-3 text-lg"></i>
              <span className="font-medium">Tables</span>
            </a>
          </div>
          <div className="py-2">
            <a
              href="#"
              className="flex items-center px-4 py-2 w-64 ml-6 text-gray-700 hover:bg-gray-200 rounded-lg"
            >
              <i className="ri-notification-3-fill mr-3 text-lg"></i>
              <span className="font-medium">Notifications</span>
            </a>
          </div>
          <div className="px-4 py-4">
            <span className="text-sm text-gray-400">AUTH PAGES</span>
          </div>
          <div className="py-2">
          <Link
      to="/signin"
      className="flex items-center px-4 py-2 w-64 ml-6 text-gray-700 hover:bg-gray-200 rounded-lg"
    >
      <i className="ri-login-circle-fill mr-3 text-lg"></i>
      <span className="font-medium">Sign In</span>
    </Link>
          </div>
          <div className="py-2">
          <Link
      to="/signup"
      className="flex items-center px-4 py-2 ml-6 text-gray-700 hover:bg-gray-200 rounded-lg"
    >
      <i className="ri-user-add-fill mr-3 text-lg"></i>
      <span className="font-medium">Sign Up</span>
    </Link>
          </div>
        </div>
      </div>

      <div className="container">
        <div className=" max-w-full w-full bg-gray-100 p-4 shadow rounded-lg mt-3 ml-44">
          <div className="flex justify-start items-center">
            <div className="text-gray-500">
              <span className="">Dashboard</span> <span>/</span>{" "}
              <span className="font-semibold text-black">Home</span>
            </div>

            <div className="flex items-center space-x-4 ml-auto">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="border rounded-md py-1 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center space-x-4">
                <i className="ri-user-line text-gray-500 text-lg"></i>
                <span className="text-gray-500">Sign In</span>
                <i className="ri-notification-3-line text-gray-500 text-lg"></i>
                <i className="ri-settings-3-line text-gray-500 text-lg"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
