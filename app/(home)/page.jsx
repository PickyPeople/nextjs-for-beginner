import Movie from "../../components/movie";
import styles from "../../syles/home.module.css";

// import Navigation from "../components/navigation";
export const metadata = {
    title: 'Home',
}

export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies() {
    // return fetch(URL).then(res => res.json());
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const response = await fetch(API_URL);
    const json = await response.json();
    return json;
}

export default async function HomePage() {
    // const [isLoading, setIsLoading] = useState(true);
    // const [movies, setMovies] = useState([]);
    // const getMovies = async () => {
    //     const response = await fetch(
    //         "https://nomad-movies.nomadcoders.workers.dev/movies"
    //     );
    //     const json = await response.json();
    //     setMovies(json);
    //     setIsLoading(false);
    // }
    // useEffect(() => {
    //     getMovies();
    // }, []);

    const movies = await getMovies();
    return (
        <div className={styles.container}>
            {movies.map((movie) => (
                <Movie 
                    key={movie.id} 
                    id={movie.id} 
                    poster_path={movie.poster_path} 
                    title={movie.title} 
                />
            ))}
        </div>
    )
}

//<Loading />
//const html = await Homepage()

//위의 결과 값이 isLoading ? <Loading> : html 이러한 과정으로 프로그램이 돌아간다는 것이다.