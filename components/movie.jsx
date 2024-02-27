"use client";

import Link from 'next/link'
import styles from "../syles/movie.module.css";
import { useRouter } from "next/navigation";


export default function Movie({title, id, poster_path}) {
  const router = useRouter(`/movies/${id}`);
  const onClick = () => {
    router.push(`/movies/${id}`);
  }
  return (
    <div className={styles.movie}>
      <img src={poster_path} alt={title} onClick={onClick}/>
      <Link prefetch href={`/movies/${id}`}>{title}</Link>
    </div>
  )
}