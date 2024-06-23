import React, { useState } from "react";
import { app } from "../firebase/config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { registerUser } from "../firebase/writeToDB";

const auth = getAuth(app);

const Register = () => {
  const [userCredentials, setUserCredentials] = useState({
    username: null,
    email: null,
    password: null,
  });

  const handleChange = (e) => {
    setUserCredentials((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleSubmit = () => {
    createUserWithEmailAndPassword(
      auth,
      userCredentials.email,
      userCredentials.password
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        registerUser(user.uid, userCredentials.username);
        console.log("user", user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <>
      <div class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
          <div class="mb-4">
            <label for="username" class="block text-gray-700">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onChange={handleChange}
              required
            />
          </div>
          <div class="mb-4">
            <label for="email" class="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div class="mb-4">
            <label for="password" class="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={handleSubmit}
          >
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
