// import Navigation from "../components/navigation";
export const metadata = {
    title: 'Home',
}

const URL = "https://nomad-movies.nomadcoders.workers.dev/movies"

async function getMovies(){
    // return fetch(URL).then(res => res.json());
    await new Promise((resolve) => setTimeout(resolve, 5000));
    const response = await fetch(URL);
    const json= await response.json();
    return json;
}

export default async function HomePage(){
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
    return(
        <div>
            {JSON.stringify(movies)}
        </div>
    )
}