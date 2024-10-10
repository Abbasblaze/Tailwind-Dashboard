
import { Link } from 'react-router-dom';

function SignIn() {
    return ( 
        <>

     <div className="bg-white">
         <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-md p-8   rounded-lg">
        <h2 className="text-4xl font-bold text-center mb-4">Sign In</h2>
        <p className="text-center text-gray-600 mb-6">
          Enter your email and password to Sign In.
        </p>

        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="name@mail.com"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 text-indigo-600 focus:ring-gray-500 border-gray-300 rounded"
            />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree the <a href="#" className="text-black-600 underline ">Terms and Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg text-sm font-medium hover:bg-gray-800 transition duration-300"
          >
            SIGN IN
          </button>

          <div className="flex justify-between text-sm text-gray-600">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="subscribe"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="subscribe" className="ml-2">
                Subscribe me to newsletter
              </label>
            </div>
            <a href="#" className="text-black-600 font-bold">Forgot Password</a>
          </div>

          <div className="my-6">
            <div className="relative">
              <hr className="border-gray-300" />
              <span className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-white px-2 text-sm text-gray-600">OR</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-lg mb-3 text-sm font-medium hover:bg-gray-100"
          >
           <img src="src/assets/Icon-Google.png" alt="" className="mr-2" />
            SIGN IN WITH GOOGLE
          </button>

          <button
            type="button"
            className="w-full flex items-center justify-center bg-white border border-gray-300 text-gray-700 py-2 rounded-lg text-sm font-medium hover:bg-gray-100"
          >
           <img src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png" alt=""  className="w-5 h-5 mr-2" />
            SIGN IN WITH TWITTER
          </button>
        </form>

        <p className="text-center text-sm text-gray-600 mt-6">
      Not registered?{' '}
      <Link to="/signup" className="text-black-600 font-bold">
        Create account
      </Link>
    </p>
      </div>
      <img src="src/assets/pattern.png" alt="" className="ml-48 rounded-lg"/>
    </div>
    </div>
        </>
     );
}

export default SignIn;