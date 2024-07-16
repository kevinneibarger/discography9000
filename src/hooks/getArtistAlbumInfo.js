import {useEffect, useState} from "react";

export const getArtistAlbumInfo = (artistBand, methodGet) => {

    const [data, setData] = useState([]);
    const url = `https://ws.audioscrobbler.com/2.0/?method=${methodGet}&api_key=${process.env.REACT_APP_API_KEY_LAST_FM}&artist=${artistBand}&format=json`;

    useEffect(() => {
        async function setAlbumsByArtist(){
            const response = await fetch(url);
            const json = await response.json();

            console.log(">> Artists Albums <<")
            console.log(json);
            setData(json);
        }
        setAlbumsByArtist();
    }, [url]);
}