import {useEffect, useState} from "react";

export const useFetchArtists = (methodGet) => {

    const [data, setData] = useState([]);
    const url = `https://ws.audioscrobbler.com/2.0/?method=${methodGet}&api_key=${process.env.REACT_APP_API_KEY_LAST_FM}&format=json`;
    console.log(">> Calling URL <<");
    console.log(url);

    useEffect(() => {
        async function fetchTopArtists(){
            const response = await fetch(url);
            const json = await response.json();

            // Remove any artists with mbid as empty
            const filteredArtistsNew = [];
            for (let i = 0; i < json.artists.artist.length; i++) {
                if (json.artists.artist[i].mbid !== '') {
                    filteredArtistsNew.push(json.artists.artist[i]);
                }
            }

            console.log(">> FILTERED ARTISTS <<");
            console.log(filteredArtistsNew);

            setData(filteredArtistsNew);
        }
        fetchTopArtists();
    }, [url])

     return { data }
}