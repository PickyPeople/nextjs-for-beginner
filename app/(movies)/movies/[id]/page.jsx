import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";



export default async function MovieDetail({ params: { id } }) { //파라미터로 주소창의 id 와 search파라미터를 나에게 준다 백엔드로 실행된다.
  //params: id 로 주소창의 id를 받아온다.
  //suspense컴포넌트는 동시에 렌더링을 시작한다.
  return (
    <div>
      <h3>Movie detail page</h3>
      <Suspense fallback={<h1>Loading movie info</h1>}> 
        <MovieInfo id={id} />
      </Suspense>
      <h3>Movie show videos</h3>
      <Suspense fallback={<h1>Loading movie videos</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  )
};