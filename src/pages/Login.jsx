// src/pages/Login.jsx
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import auth from "../services/auth";
import { setUser } from "../store/features/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  // console.log(user)
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(" ")
    try {
      const res = await auth.login(form);
      localStorage.setItem('token', res.data.token)
      if (res.request.status === 200) {
        console.log(true)
        const me = await auth.me() 
        dispatch(setUser(me.data.user))
        navigate('/')
      }
    }

    catch (err) {
      console.error(err);
      setError(err.response.data.message);
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow">
        <h2 className="text-2xl font-bold text-center text-purple-700 mb-6">Login</h2>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              required
              value={form.email}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded mt-1"
              placeholder="admin@stylezone.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              required
              value={form.password}
              onChange={handleChange}
              className="w-full border px-3 py-2 rounded mt-1"
              placeholder="Enter password"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition"
          >
            Login
          </button>
        </form>

        {/* 🔗 Signup Link */}
        <p className="text-sm text-center mt-4">
          Don’t have an account?{" "}
          <span
            onClick={() => navigate("/signup")}
            className="text-purple-600 cursor-pointer hover:underline"
          >
            Create one
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
