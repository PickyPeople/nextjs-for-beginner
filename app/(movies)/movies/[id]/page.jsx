import {API_URL} from "../../../(home)/page";

async function getMovie(){
  const response = await fetch(`${API_URL}/${id}`);
  return response.json();
}

export default async function MovieDetail({params: {id }}){
  return(
    <h1>Movie {id}</h1>
  )
};