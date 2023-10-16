"use client"

import Link from "next/link"
import logo from "../app/assets/STACKY.svg"
import Image from "next/image"
import { usePathname } from "next/navigation"
import classnames from "classnames"

const NavBar = () => {
  const currentPath = usePathname()
  const links = [
    { label: "Browse", href: "/browse" },
    { label: "Collection", href: "/collection" },
    { label: "Drumkits", href: "/drumkits" },
    { label: "My Sounds", href: "/mysounds" },
  ]

  return (
    <nav className="flex space-x-6 mb-5 px-5 h-14 items-center bg-[#0b0101] shadow-xl">
      <Link href="/">
        <Image src={logo} alt="clickable logo" className="w-44" />
      </Link>
      <ul className="flex space-x-6 text-sm ">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-slate-50": link.href !== currentPath,
              "text-slate-300 font-semibold": link.href === currentPath,
              "hover:text-slate-300 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default NavBar
