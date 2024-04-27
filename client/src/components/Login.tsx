import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import Header from "./Header";
import { useGoogleLogin } from "@react-oauth/google"; // Importing the useGoogleLogin hook

const initialValues = {
  username: "",
  password: "",
};

export default function Login({
  setLoggedIn,
  setUsername,
}: {
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
  setUsername: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const [form, setForm] = useState(initialValues);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.username || !form.password) {
      toast.error("All field are required");
      return;
    }

    // login
    toast.success(`Welcome, ${form.username}`);
    localStorage.setItem("username", JSON.stringify(form.username));
    setUsername(form.username);
    setTimeout(() => {
      setLoggedIn(true);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newForm = { ...form, [e.target.name]: e.target.value };
    setForm(newForm);
  };
  const logino = useGoogleLogin({
    onSuccess: (credentialResponse) => {
      console.log(credentialResponse);
      toast.success("Logged in with Google");
      setUsername("Aniket");

      setTimeout(() => {
        setLoggedIn(true);
      }, 1000);
    },
    onError: (error) => {
      console.error(error);
      toast.error("Google Login Failed");
    },
  });
  return (
    <>
      <Header />
      <div className="bg-gradient-to-br from-pink-500 to-purple-600 w-full h-screen flex items-center justify-center">
        <div className="sm:w-[400px] w-full flex flex-col gap-4">
          <form
            className="bg-gray-100 text-gray-900 rounded-lg shadow-lg px-8 py-6 flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <h1 className="text-3xl font-bold text-center mb-4">Log In</h1>
            <div className="flex flex-col gap-2">
              <label htmlFor="username" className="font-bold">
                Username <b className="text-red-400">*</b>
              </label>
              <input
                type="text"
                name="username"
                id="username"
                value={form.username}
                onChange={handleChange}
                placeholder="Enter Username"
                className="px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="password" className="font-bold">
                Password <b className="text-red-400">*</b>
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={form.password}
                onChange={handleChange}
                placeholder="Enter Password"
                className="px-4 py-2 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <button
              className="bg-blue-500 text-white font-bold py-2 rounded-md hover:bg-blue-600 transition-colors"
              type="submit"
            >
              Log In
            </button>
            {/* <p className="mt-2 text-center text-gray-500 text-sm">
              Don't have an account?{" "}
              <a href="/signup" className="text-blue-500 font-bold">
                Sign Up
              </a>
            </p> */}
            <div className="  mt-4 text-center">
              <p className="text-gray-600">Or </p>
              <button
                className="flex gap-2 mt-3 rounded-lg items-center border-2 border-black bg-gray-900 w-fit m-auto p-2 font-medium cursor-pointer hover:bg-black"
                onClick={logino}
                type="submit"
              >
                <img src="search (2).png" className="w-6" />
                <h1 className="text-white">Login with Google</h1>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
