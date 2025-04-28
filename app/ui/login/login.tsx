const Login = () => {
  return (
    <section className="m-3">
      <div className="flex justify-center py-10 text-center">
        <img src="customer_logo.svg" width="150px" alt="Logo" />
      </div>

      <div className="flex justify-center">
        <div className="p-8 rounded-lg w-full max-w-sm">
          <form action="#" method="POST" className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="text-gray-400 text-sm mb-2 block"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Example@email.com"
                className="w-full px-3 placeholder:mb-3 placeholder:text-sm bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
                style={{
                  borderColor: "#343B4F",
                  borderWidth: "1px",
                }}
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="text-gray-400 text-sm mb-2 block"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="At least 8 characters"
                className="w-full bg-gray-800 text-white placeholder-gray-500 rounded-lg p-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>

            <div className="flex justify-end">
              <a href="#" className="text-sm text-gray-400 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full text-white py-1 rounded-lg bg-gradient-to-r from-purple-500 to-blue-400 hover:opacity-90 transition"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;

{
  /* <div>
          <form action="POST">
            <div className="flex-column max-w-7xl justify-center text-center">
              <div className="flex items-center justify-center mb-4">
                <label htmlFor="email" className="block text-sm font-bold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-bold mb-2"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  className="border border-gray-300 rounded px-3 py-2 w-full"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded w-full hover:bg-blue-600 transition duration-200 ease-in-out"
              >
                Login
              </button>
            </div>
          </form>
        </div> */
}
