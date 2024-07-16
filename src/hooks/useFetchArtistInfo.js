// import {useEffect, useState} from "react";
//
// export const useFetchArtistInfo = (apiPath, artistName) => {
//     const [data, setData] = useState([]);
//
//     // console.log(">> Query Term - useFetch >>");
//     // console.log(queryTerm);
//     // console.log(">> API Path >>");
//     // console.log(apiPath);
//
//     const url = `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${artistName}&api_key=${process.env.REACT_APP_API_KEY_LAST_FM}&format=json`;
//
//     useEffect(() => {
//         async function fetchArtistInfo(){
//             const response = await fetch(url);
//             const json = await response.json();
//             console.log(json.artists.artist);
//
//             // Remove any artists with mbid as empty
//             const filteredArtistsNew = [];
//             for (let i = 0; i < json.artists.artist.length; i++) {
//                 if (json.artists.artist[i].mbid !== '') {
//                     filteredArtistsNew.push(json.artists.artist[i]);
//                 }
//             }
//             setData(filteredArtistsNew);
//         }
//         fetchArtistInfo();
//     }, [url])
//
//     return { data }
// }