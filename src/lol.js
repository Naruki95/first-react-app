import { useState, useEffect } from 'react';

export default function lol() {
  const animes = ["Mystery","Romance","Action","Adventure"];
  const [images, setImages] = useState([])
  const [ids, setIds] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    async function animeCoverImageFetching(genre) {
      var i = 0;
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
      myHeaders.append("Cookie", "laravel_session=3ywtTox2oRvUS1KTpXQ2kXWMIpEOIdKZtnul5sFe");
      var graphql = JSON.stringify({
        query: "query ($id: Int, $page: Int, $perPage: Int, $genre: String) { Page (page: $page, perPage: $perPage) { pageInfo { total currentPage lastPage hasNextPage perPage } media (id: $id, genre: $genre, sort: SCORE_DESC, type: ANIME) { id coverImage { large } } } }",
        variables: { "page": 1, "perPage": 20, "genre": `${genre}` }
      })
      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: graphql,
        redirect: 'follow'
      };

      await fetch("https://graphql.anilist.co/", requestOptions)
        .then(response => response.text())
        .then(result => {
          let dataParsed = JSON.parse(result)['data']['Page']['media'];
          console.log(ids)
          while (ids.includes(dataParsed[i]['id'])) {
            i++;
            console.log(`dans la boucle${i}`);
          }
          console.log(i);
          setIds([...ids, dataParsed[i]['id']])
          //ids.push(dataParsed[i]['id'])
          console.log(ids)
          //images.push(dataParsed[i]['coverImage']['large'])
          setImages([...images,[dataParsed[i]['coverImage']['large']]])
          console.log(`data parsed: ${dataParsed[i]['coverImage']['large']}`)
          console.log(images)
          //genres.push(genre)
          setGenres([...genres,])
        })
        .catch(error => console.log('error', error));
    }

    animes.forEach((genre)=> {
      if(!genres.includes(genre)){
        animeCoverImageFetching(genre)
      }
    })

    return () => {
      console.log(images);
    }
  }, [genres])

  return(
    <>
      <ul>
        {ids.map((id, idx) => (
          <li key={idx}>
            id: {id}
          </li>
        ))}
      </ul>
      <ul>
        {images.map((image, idx) => (
          <li key={idx}>
            <img src={image} alt={image}></img>
          </li>
        ))}
      </ul>
    </>
  );
}
