import {Link} from "react-router-dom";
import Backup from "../assets/images/backup2.png";
import {useState} from "react";

export const ArtistCard = ({artist}) => {
    // const {id, original_title, overview, poster_path} = artist;
    console.log(">> Artist Card <<");
    console.log(artist);

    const {mbid, name, url, artist_art} = artist;
    const image = artist_art ? `https://image.tmdb.org/t/p/w500/${artist_art}` : Backup ;
    const [isFlipped, setFlipped] = useState(false);

    const handleFlip = () => {
        setFlipped(!isFlipped);
    };


    return (
        // <div
        //     className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
        //   {/*<Link to={`/music/${mbid}`}>*/}

        <div className={`flip-card ${isFlipped ? "flipped" : ""}`}>

            {/*<div className="flip-card-inner">*/}
                <div className="flip-card-front">
                    {/*<div className="card-content">*/}

                        <div
                            className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">

                            <img className="rounded-t-lg" src={image} alt=""/>
                            <div className="p-5t">
                                <Link to={`/music/${mbid}`}>
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                                </Link>
                            </div>
                        </div>
                    {/*</div>*/}
                    <button
                        className="flip-button"
                        onClick={handleFlip}>
                        See Albums
                    </button>
                </div>
                <div className="flip-card-back">
                    <div className="card-content">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name} Albums</h5>
                    </div>
                    <button
                        className="flip-button"
                        onClick={handleFlip}>
                        Back To Artist
                    </button>
                </div>
            {/*</div>*/}

            {/*<div*/}
            {/*    className="front card-content max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3" onClick={() => handleFlip(!isFlipped)}>*/}
            {/*    <img className="rounded-t-lg" src={image} alt=""/>*/}
            {/*    <div className="p-5t">*/}
            {/*        <Link to={`/music/${mbid}`}>*/}
            {/*            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>*/}
            {/*        </Link>*/}
            {/*        /!*<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{url}</p>*!/*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div*/}
            {/*    className="back card-content max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3" onClick={() => handleFlip(!isFlipped)}>*/}
            {/*    <h1 className="dark:text-white">List the albums here!</h1>*/}
            {/*</div>*/}

        </div>
    )
}