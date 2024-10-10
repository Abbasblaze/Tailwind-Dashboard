import { Link } from 'react-router-dom';

function SignUp() {
    return ( 
        <>
        <div className="bg-white">
  
        <div className="flex justify-center items-center h-screen ">
        <img src="src/assets/pattern.png" alt="" className="mr-48 rounded-lg" />
      <div className=" p-8 rounded  w-96">
        <h2 className="text-4xl font-bold mb-6 text-center">Join Us Today</h2>
        <p className="text-center mb-4">Enter your email and password to register.</p>
        <form >
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Your email</label>
            <input
              type="email"
              placeholder="name@mail.com"
              className="w-96 p-2  border border-gray-300 rounded focus:outline-none focus:border-black"
              required
            />
          </div>

          <div className="mb-4 flex items-center">
            <input
              type="checkbox"
              className="mr-2"
              required
            />
            <label>
              I agree the <a href="#" className="text-black-600 font-bold underline">Terms and Conditions</a>
            </label>
          </div>

          <button
            type="submit"
            className="w-96 bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300"
          >
            Register Now
          </button>
        </form>

        <div className="mt-6">
          <button className="w-96 bg-gray-100 text-black py-2 rounded flex items-center justify-center mb-2 hover:bg-gray-200 transition duration-300">
            <img
              src="src/assets/Icon-Google.png"
              alt="Google"
              className="w-5 h-5 mr-2"
            />
            Sign in with Google
          </button>
          <button className="w-96 bg-gray-100 text-black py-2 rounded flex items-center justify-center hover:bg-gray-200 transition duration-300">
            <img
              src="https://logos-world.net/wp-content/uploads/2023/08/X-Logo.png"
              alt="Twitter"
              className="w-5 h-5 mr-2"
            />
            Sign in with Twitter
          </button>
        </div>

        <p className="text-center text-sm mt-6 ml-10 text-gray-600 ">
Already have an account?{" "}
<Link to="/signin" className="text-black-600 font-bold">
Sign in
</Link>
</p>
      </div>
    </div>
    </div>
        </>
     );
}

export default SignUp;

