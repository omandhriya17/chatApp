import React from "react";

const Register = () => {
  return (
    <>
      <div class="bg-gray-100 flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg w-96">
          <h2 class="text-2xl font-bold mb-6 text-center">Register</h2>
          <form action="#" method="POST">
            <div class="mb-4">
              <label for="username" class="block text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              class="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
