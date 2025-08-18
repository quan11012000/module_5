import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import imgbg from '../src/assets/image/4d-2560X1600-wallpaper-aunqtfw50416suzj.jpeg'

function App() {
  return (
      <>
          <div className="relative min-h-screen  items-center justify-center">
              <img src={imgbg} alt="bg" className="absolute inset-0 w-full h-full object-cover -z-10" />
              <div
                  className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
                  <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8">
                      <div className="flex justify-center mb-6">
                          <img className="h-16 w-auto"
                               src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png"
                               alt="Bootstrap Logo"/>
                      </div>
                      <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Welcome Back</h1>
                      <p className="text-sm text-center text-gray-500 mb-8">Please sign in to continue</p>
                      <form className="space-y-5">
                          <div>
                              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email
                                  Address</label>
                              <input type="email" id="email" placeholder="you@example.com"
                                     className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"/>
                          </div>

                          <div>
                              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                              <input type="password" id="password" placeholder="••••••••"
                                     className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"/>
                          </div>

                          <div className="flex items-center justify-between">
                              <label className="flex items-center text-sm text-gray-600">
                                  <input type="checkbox"
                                         className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
                                  <span className="ml-2">Remember me</span>
                              </label>
                              <a href="#" className="text-sm font-medium text-indigo-600 hover:underline">Forgot
                                  password?</a>
                          </div>

                          <button type="submit"
                                  className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg shadow-md hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 transition">
                              Sign In
                          </button>
                      </form>
                      <p className="mt-8 text-center text-xs text-gray-500">© 2017–2025. All rights reserved.</p>
                  </div>
              </div>
          </div>


      </>
  )
}

export default App
