import { NavLink, Outlet } from "react-router-dom"
import React from "react"

export default function Footer() {
  return (
    <div className="root-layout">
      <footer>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <div className="bg-stone-600 py-8 font-sans text-center mt-10 text-zinc-300">
          <div className="text-2xl pb-3">
            <NavLink to="#" className="mx-2 hover:text-white">
              <i className="fa fa-facebook"></i>
            </NavLink>
            <NavLink to="#" className="mx-2 hover:text-white">
              <i className="fa fa-instagram"></i>
            </NavLink>
            <NavLink to="#" className="mx-2 hover:text-white">
              <i className="fa fa-twitter"></i>
            </NavLink>
          </div>
          <button className="px-4 py-2 mb-1 font-bold text-xl border-2 border-white bg-stone-800 hover:bg-white hover:text-white">
            Donate
          </button>
          <div className="row">
            <ul>
              <li>
                <NavLink to="/signs" className="hover:text-white">
                  Signs
                </NavLink>
              </li>
              <li>
                <NavLink to="/events" className="hover:text-white">
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" className="hover:text-white">
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink to="/groups" className="hover:text-white">
                  Groups
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-white">
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="row text-sm pt-4">
            © 2024 North Central Ohio Pollinator Pathway
          </div>
        </div>
      </footer>

      <main>
        <Outlet />
      </main>
    </div>
  )
}
