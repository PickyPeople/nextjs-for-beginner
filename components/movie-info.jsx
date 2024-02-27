import { API_URL } from "../app/(home)/page";
import styles from "../syles/movie-info.module.css";

export async function getMovie(id) {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieInfo({ id }) {
  const movie = await getMovie(id)
  return (
    <div className={styles.container}>
      <img src={movie.poster_path} className={styles.poset} alt={movie.title} />
      <div className={styles.info}>
        <h1 className={styles.title}>{movie.title}</h1>
        <h3 className={styles.average}>⭐️{movie.vote_average.toFixed(1)}</h3>
        <p className={styles.overview}> {movie.overview}</p>
        <a href={"_blank"}>Homepage  &rarr;</a>
      </div>
    </div>
  )
}