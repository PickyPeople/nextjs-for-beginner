"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../syles/navigation.module.css";
// import { useState } from "react";

export default function Navigation() {
  const path = usePathname(); ///지금의 경로를 나타내어 준다

  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
          {path === "/" ? "🔥" : ""}
        </li>
        <li>
          <Link href="/about-us">About Us</Link>
          {path === "/about-us" ? "🔥" : ""}
        </li>
      </ul>
    </nav>
  )
}