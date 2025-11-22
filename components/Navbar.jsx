"use client"
import { Link } from "react-scroll"
import { motion } from "framer-motion"
import { useState, useEffect, useRef } from "react"

const navItems = [
  { name: "Projects", id: "projects", color: "blue" },
  { name: "CAD", id: "CAD", color: "orange" },
  { name: "Music", id: "music", color: "purple" },
  { name: "About", id: "about", color: "green" },
  { name: "Contact", id: "contact", color: "pink" },
]

export default function Navbar() {
  const [active, setActive] = useState(null)
  const [hovered, setHovered] = useState(null)

  // hide when scrolled down; show when near top, pointer near top, or nav hovered
  const [hidden, setHidden] = useState(false)
  const SCROLL_THRESHOLD = 120   // px (scroll past this -> hide)
  const HOTSPOT = 70            // px from top to reveal when pointer moves there

  // initialize hidden based on current scroll
  useEffect(() => {
    setHidden(window.scrollY > SCROLL_THRESHOLD)
  }, [])

  useEffect(() => {
    let ticking = false

    function onScroll() {
      if (!ticking) {
        ticking = true
        window.requestAnimationFrame(() => {
          const y = window.scrollY || window.pageYOffset
          setHidden(y > SCROLL_THRESHOLD)
          ticking = false
        })
      }
    }

    function onPointerMove(e) {
      // pointer event (mouse or pen)
      const y = e.clientY ?? -1
      if (y >= 0 && y <= HOTSPOT) {
        setHidden(false)
        return
      }
      // if not near top: if scrolled past threshold keep hidden, otherwise show
      if (window.scrollY > SCROLL_THRESHOLD) setHidden(true)
      else setHidden(false)
    }

    function onTouchStart(e) {
      // touch devices: reveal if initial touch is near top
      const t = e.touches && e.touches[0]
      if (t && t.clientY <= HOTSPOT) {
        setHidden(false)
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("touchstart", onTouchStart, { passive: true })

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("touchstart", onTouchStart)
    }
  }, [])

  // helper for color classes (same as before)
  const getColor = (color, type) => {
    const colors = {
      blue: { text: "text-blue-400", bg: "bg-blue-500/20" },
      orange: { text: "text-orange-400", bg: "bg-orange-500/20" },
      purple: { text: "text-purple-400", bg: "bg-purple-500/20" },
      green: { text: "text-green-400", bg: "bg-green-500/20" },
      pink: { text: "text-pink-400", bg: "bg-pink-500/20" },
    }
    return colors[color]?.[type] || colors.blue[type]
  }

  // glow class map used by your CSS
  const glowFor = (color) =>
    color === "blue" ? "bg-blue-glow" :
    color === "orange" ? "bg-orange-glow" :
    color === "purple" ? "bg-purple-glow" :
    color === "green" ? "bg-green-glow" :
    "bg-pink-glow"

  return (
    <>
      {/* Mobile/touch handle — when nav is hidden, this small bar is clickable/tappable to reveal the nav */}
      <div
        className={`nav-handle ${hidden ? "visible" : ""}`}
        onClick={() => setHidden(false)}
        aria-hidden="true"
      />

      <motion.nav
        // slide up when hidden; slide down when visible
        initial={{ y: -70, opacity: 0 }}
        animate={{ y: hidden ? -90 : 0, opacity: hidden ? 0 : 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 28 }}
        className="fixed top-0 left-0 w-full bg-neutral-950/70 backdrop-blur-lg text-white px-6 py-3 flex justify-between items-center z-50 border-b border-neutral-800"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onPointerEnter={() => setHidden(false)} // keep visible while pointer is in nav
      >
        <a href="/" className="text-xl font-bold hover:text-gray-300 transition">
          Divine<span className="text-red-700">.</span>
        </a>

        <div className="flex gap-5 text-sm">
          {navItems.map((item) => {
            const isActive = active === item.id
            const isHovered = hovered === item.id
            const color = getColor(item.color, "text")
            const bgColor = getColor(item.color, "bg")
            const glowClass = glowFor(item.color)

            return (
              <motion.div
                key={item.id}
                className="relative cursor-pointer"
                onMouseEnter={() => setHovered(item.id)}
                onMouseLeave={() => setHovered(null)}
              >
                <Link
                  to={item.id}
                  smooth={true}
                  spy={true}
                  offset={-70}
                  duration={600}
                  onSetActive={() => setActive(item.id)}
                  className={`relative px-3 py-1 font-medium transition-colors duration-300 ${isActive ? color : "text-gray-400"}`}
                >
                  {(isHovered || isActive) && (
                    <motion.span
                      layoutId={`bubble-${item.id}`}
                      className={`absolute inset-0 rounded-full ${bgColor} ${glowClass}`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0, opacity: 0 }}
                      transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    />
                  )}

                  <span className="relative z-10">{item.name}</span>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </motion.nav>
    </>
  )
}
