import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  const { login, googleLogin, githubLogin } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
    .then((result) => {
        const loggedUser = result.user;
        navigate(from, { replace: true });
      })
    .catch((error) => {
        console.log(error.message);
      });
  };

  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    setError("");

    login(email, password)
      .then((result) => {
        const loggedUser = result.user;
        form.reset();
        navigate(from, { replace: true });
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="bg-gray-100 flex flex-col h-screen justify-center items-center">
      <div className="bg-white rounded-lg p-8 shadow-md">
        <h2 className="text-3xl font-bold mb-4">Login Your account</h2>
        <p className="text-error font-semibold">{error}</p>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              required
            />
          </div>
          <div>
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              name="password"
              type="password"
              placeholder="********"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Login
            </button>
            <Link className="inline-block font-bold text-sm text-blue-500 hover:text-blue-800">
              Forgot Password?
            </Link>
          </div>
          <div>
            <span className="mr-2">or log in with:</span>
            <div className="mt-4 flex items-center justify-center gap-5">
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
              >
                <span className="flex items-center">
                  <FaGoogle className="text-blue-600 mr-2" />
                  Google
                </span>
              </button>
              <button
                type="button"
                onClick={handleGithubLogin}
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 rounded-lg shadow-md focus:outline-none focus:shadow-outline"
              >
                <span className="flex items-center">
                  <FaGithub className="text-gray-800 mr-2" />
                  GitHub
                </span>
              </button>
            </div>
          </div>
          <div className="text-center">
            New to this site?{" "}
            <Link to="/register" className="text-blue-500">
              Register here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
