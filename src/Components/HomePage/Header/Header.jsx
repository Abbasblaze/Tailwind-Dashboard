function Header() {
    return ( 
        <>
       <div className="Headercontainer">
          <div className="max-w-full flex flex-col lg:flex-row justify-between p-8 lg:ml-80 gap-2">
            {/* Card 1 - Today's Money */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-96">
              <div className="flex items-center justify-between">
                <i className="ri-money-dollar-circle-fill text-4xl text-gray-700"></i>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Todays Money</p>
                  <p className="text-2xl font-semibold ">$53k</p>
                </div>
              </div>
              <div className="mt-4 text-lg text-green-500 border-t-2 border-gray">
                <span className="font-bold">+55%</span> <span className="text-black">than last week</span>
              </div>
            </div>

            {/* Card 2 - Today's Users */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-96">
              <div className="flex items-center justify-between">
                <i className="ri-user-fill text-4xl text-gray-700"></i>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Todays Users</p>
                  <p className="text-2xl font-semibold">2,300</p>
                </div>
              </div>
              <div className="mt-4 text-lg text-green-500 border-t-2 border-gray">
                <span className="font-bold">+3%</span> <span className="text-black">than last month</span>
              </div>
            </div>

            {/* Card 3 - New Clients */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-96">
              <div className="flex items-center justify-between">
                <i className="ri-user-add-fill text-4xl text-gray-700"></i>
                <div className="text-right">
                  <p className="text-sm text-gray-500">New Clients</p>
                  <p className="text-2xl font-semibold">3,462</p>
                </div>
              </div>
              <div className="mt-4 text-lg text-red-500 border-t-2 border-gray">
                <span className="font-bold">-2%</span> <span className="text-black">than yesterday</span>
              </div>
            </div>

            {/* Card 4 - Sales */}
            <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-96">
              <div className="flex items-center justify-between">
                <i className="ri-bar-chart-box-fill text-4xl text-gray-700"></i>
                <div className="text-right">
                  <p className="text-sm text-gray-500">Sales</p>
                  <p className="text-2xl font-semibold">$103,430</p>
                </div>
              </div>
              <div className="mt-4 text-lg text-green-500 border-t-2 border-gray">
                <span className="font-bold">+5%</span> <span className="text-black">than yesterday</span>
              </div>
            </div>
          </div>
        </div>
        </>
    );
}

export default Header;
