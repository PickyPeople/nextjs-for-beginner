"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigation() {
  const path = usePathname(); ///지금의 경로를 나타내어 준다
  const [count, setCount] = useState(0);

  const onClick = () => {
    setCount(count + 1);
  }

  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us/company">company</Link>
          {path === "/aboutus/company" ? "🔥" : ""}
        </li>
        <li><button onClick={onClick}>{count}</button></li>
      </ul>
    </nav>
  )
}