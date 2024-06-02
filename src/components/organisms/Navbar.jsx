import React, { useState, useEffect } from "react"
import { NavLink, Outlet } from "react-router-dom"
import Logo from "@/assets/images/logo.png"

export default function Navbar() {
  const [activePage, setActivePage] = useState(window.location.pathname)
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)

  const handleClick = (page) => {
    setActivePage(page)
  }

  const navbarClasses = Array(8)
    .fill("")
    .map(() => useState(""))

  const handleScroll = (setNavbarClass, delayUp, delayDown) => () => {
    const currentScrollPos = window.pageYOffset
    const isScrollingUp =
      prevScrollPos > currentScrollPos || currentScrollPos < 10

    if (isScrollingUp) {
      setNavbarClass(`translate-y-0 ${delayUp}`)
    } else {
      setNavbarClass(`-translate-y-full ${delayDown}`)
    }

    setPrevScrollPos(currentScrollPos)
  }

  const delaysDown = [
    "delay-100 duration-1000",
    "delay-300",
    "delay-500",
    "delay-300",
    "delay-150",
    "",
    "delay-150",
    "bottom-6",
  ]
  const delaysUp = [
    "delay-300 duration-1000",
    "delay-150",
    "",
    "delay-150",
    "delay-300",
    "delay-500",
    "delay-700",
    "",
  ]

  useEffect(() => {
    navbarClasses.forEach(([_, setNavbarClass], i) => {
      window.addEventListener(
        "scroll",
        handleScroll(setNavbarClass, delaysUp[i], delaysDown[i])
      )
    })
    return () => {
      navbarClasses.forEach(([_, setNavbarClass], i) => {
        window.removeEventListener(
          "scroll",
          handleScroll(setNavbarClass, delaysUp[i], delaysDown[i])
        )
      })
    }
  }, [prevScrollPos, visible])

  return (
    <div className="root-layout">
      <nav
        className={`font-serif h-14 flex fixed text-slate-800 overflow-hidden opacity-95 ${
          visible ? "" : "hidden"
        }`}
      >
        <div
          className={`h-full w-max pb-0.5 bg-gradient-to-r from-green-400 to-green-300 border-stone-400 border-solid border-b ${navbarClasses[0][0]}`}
        >
          <NavLink
            to="/"
            className={`${activePage === "/" ? "" : ""}`}
            onClick={() => handleClick("/")}
          >
            <img className="float-left h-full pr-2.5" src={Logo} alt="logo" />
          </NavLink>
        </div>
        <div
          className={`fixed w-screen h-14 bg-green-300 z-[-1] border-stone-400 border-solid border-b ${navbarClasses[0][0]}`}
        ></div>
        <div className="h-full w-max">
          <NavLink
            to="/about"
            className={`float-left bg-gradient-to-t from-teal-500 to-emerald-500 ml-2 rounded-b-xl border-x border-b-2 border-slate-700 duration-1000 text-center px-3 py-2 hover:text-slate-100 hover:border-slate-600 hover:from-teal-600 hover:to-emerald-600 hover:pt-4 hover:duration-1000 ${
              navbarClasses[1][0]
            } ${
              activePage === "/about"
                ? "bg-gradient-to-t from-teal-700 to-emerald-700 text-slate-100 border-slate-600 pt-3"
                : ""
            }`}
            onClick={() => handleClick("/about")}
          >
            About Us
          </NavLink>
          <NavLink
            to="/projects"
            className={`float-left bg-gradient-to-t from-teal-500 to-emerald-500 ml-2 rounded-b-xl border-x border-b-2 border-slate-700 duration-1000 text-center px-3 py-2 hover:text-slate-100 hover:border-slate-600 hover:from-teal-600 hover:to-emerald-600 hover:pt-4 hover:duration-1000 ${
              navbarClasses[2][0]
            } ${
              activePage === "/projects"
                ? "bg-gradient-to-t from-teal-700 to-emerald-700 text-slate-100 border-slate-600 pt-3"
                : ""
            }`}
            onClick={() => handleClick("/projects")}
          >
            Projects
          </NavLink>
          <NavLink
            to="/events"
            className={`float-left bg-gradient-to-t from-teal-500 to-emerald-500 ml-2 rounded-b-xl border-x border-b-2 border-slate-700 duration-1000 text-center px-3 py-2 hover:text-slate-100 hover:border-slate-600 hover:from-teal-600 hover:to-emerald-600 hover:pt-4 hover:duration-1000 ${
              navbarClasses[3][0]
            } ${
              activePage === "/events"
                ? "bg-gradient-to-t from-teal-700 to-emerald-700 text-slate-100 border-slate-600 pt-3"
                : ""
            }`}
            onClick={() => handleClick("/events")}
          >
            Events
          </NavLink>
          <NavLink
            to="/getinvolved"
            className={`float-left bg-gradient-to-t from-teal-500 to-emerald-500 ml-2 rounded-b-xl border-x border-b-2 border-slate-700 duration-1000 text-center px-3 py-2 hover:text-slate-100 hover:border-slate-600 hover:from-teal-600 hover:to-emerald-600 hover:pt-4 hover:duration-1000 ${
              navbarClasses[4][0]
            } ${
              activePage === "/getinvolved"
                ? "bg-gradient-to-t from-teal-700 to-emerald-700 text-slate-100 border-slate-600 pt-3"
                : ""
            }`}
            onClick={() => handleClick("/getinvolved")}
          >
            Get Involved
          </NavLink>
          <NavLink
            to="/resources"
            className={`float-left bg-gradient-to-t from-teal-500 to-emerald-500 ml-2 rounded-b-xl border-x border-b-2 border-slate-700 duration-1000 text-center px-3 py-2 hover:text-slate-100 hover:border-slate-600 hover:from-teal-600 hover:to-emerald-600 hover:pt-4 hover:duration-1000 ${
              navbarClasses[5][0]
            } ${
              activePage === "/resources"
                ? "bg-gradient-to-t from-teal-700 to-emerald-700 text-slate-100 border-slate-600 pt-3"
                : ""
            }`}
            onClick={() => handleClick("/resources")}
          >
            Resources
          </NavLink>
          <NavLink
            to="/news"
            className={`float-left bg-gradient-to-t from-teal-500 to-emerald-500 ml-2 rounded-b-xl border-x border-b-2 border-slate-700 duration-1000 text-center px-3 py-2 hover:text-slate-100 hover:border-slate-600 hover:from-teal-600 hover:to-emerald-600 hover:pt-4 hover:duration-1000 ${
              navbarClasses[6][0]
            } ${
              activePage === "/news"
                ? "bg-gradient-to-t from-teal-700 to-emerald-700 text-slate-100 border-slate-600 pt-3"
                : ""
            }`}
            onClick={() => handleClick("/news")}
          >
            News
          </NavLink>
        </div>
        <div
          className={`h-full w-64 bg-gradient-to-l text-3xl text-slate-700 from-green-600 to-green-300 border-stone-400 border-solid border-b flex items-center ${navbarClasses[0][0]}`}
        >
          <NavLink to="#" className="ml-32 duration-500 hover:text-sky-100">
            <i className="fa fa-facebook"></i>
          </NavLink>
          <NavLink to="#" className="ml-5 duration-500 hover:text-sky-100">
            <i className="fa fa-instagram"></i>
          </NavLink>
          <NavLink to="#" className="ml-5 duration-500 hover:text-sky-100">
            <i className="fa fa-twitter"></i>
          </NavLink>
        </div>
        <div className="fixed right-24 top-6 z-10 h-14 text-lg flex flex-col items-end">
          <NavLink
            to="/support"
            className={`relative bg-amber-500 font-sans rounded duration-300 text-center font-bold pr-4 pl-6 pt-1 pb-2 text-white hover:bg-indigo-500 hover:duration-200 ${
              navbarClasses[7][0]
            } ${
              activePage === "/support"
                ? "bg-gradient-to-t from-teal-700 to-emerald-700 text-slate-100 border-slate-600 pt-3"
                : ""
            }`}
            onClick={() => handleClick("/support")}
            style={{
              clipPath: "polygon(0 0, 100% 0, 100% 100%, 12% 100%)",
            }}
          >
            Donate
          </NavLink>
        </div>
        <div
          className={`h-full w-screen bg-green-600 border-stone-400 border-solid border-b ${navbarClasses[0][0]}`}
        ></div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
