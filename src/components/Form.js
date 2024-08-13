import * as React from "react";

export default function Form() {
  return (
    <div className="bg-white px-10 py-20 rounded-3xl border-2 border-gray-200">
      <h1 className="text-5xl font-semibold">Welcome Back</h1>
      <p className="font-medium text-lg text-gray-500 mt-4">
        Welcome back! Please enter your details.
      </p>

      {/* Email and Password */}
      <div className="mt-8">
        <div>
          <label className="text-lg font-medium">Email</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your email"
            type="email"
          />
        </div>
        <div>
          <label className="text-lg font-medium">Password</label>
          <input
            className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent"
            placeholder="Enter your password"
            type="password"
          />
        </div>
      </div>

      {/* Remember and Forgot Password */}
      <div className="mt-8 flex justify-between items-center border-2 border-green-700">
        <div>
          <input type="checkbox" name="" id="remember" />
          <label className="ml-2 font-medium text-base" for="remember">
            Remember for 30 days
          </label>
        </div>
        <button className="font-medium text-base text-violet-500">
          Forgot Password
        </button>
      </div>

      {/* Login Button */}
      <div className="mt-8 flex flex-col gap-y-4">
        <button className="py-3 rounded-xl bg-violet-500 text-white text-lg font-bold">Sign in</button>
        <button>Sign in with Google</button>
      </div>
    </div>
  );
}
