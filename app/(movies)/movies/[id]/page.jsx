import { Suspense } from "react";
import MovieInfo, {getMovie} from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

//다른 페이지의 컴포넌트를 받아올 때는 괄호가 필요하지 않지만, 함수를 받아올 때는 괄호가 필요하다.

export async function generateMetadata( {params: { id } } ) {
  const movie = await getMovie(id);
  return {
    title: movie.title,
  };
}

export default async function MovieDetail({ params: { id } } ) { //파라미터로 주소창의 id 와 search파라미터를 나에게 준다 백엔드로 실행된다.
  //params: id 로 주소창의 id를 받아온다.
  //suspense컴포넌트는 동시에 렌더링을 시작한다.
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info</h1>}> 
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
};