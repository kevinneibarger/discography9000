// import {Link} from "react-router-dom";
// import Backup from "../assets/images/backup2.png";
// import {useState} from "react";
//
// export const ArtistCard = ({artist}) => {
//     // const {id, original_title, overview, poster_path} = artist;
//     console.log(">> Artist Card <<");
//     console.log(artist);
//
//     const {mbid, name, url, artist_art} = artist;
//     const image = artist_art ? `https://image.tmdb.org/t/p/w500/${artist_art}` : Backup ;
//     const [flip, setFlip] = useState(false);
//
//     return (
//         // <div
//         //     className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">
//          //   {/*<Link to={`/music/${mbid}`}>*/}
//
//             <div className={`card ${flip ? "flip" :""}`}>
//
//                 <div className="front" onClick={() => setFlip(!flip)}>
//
//                     {/*<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">*/}
//                     {/*    <img className="rounded-t-lg" src={image} alt=""/>*/}
//                         <div className="p-5">
//                             <Link to={`/music/${mbid}`}>
//                                 <h5 className="mb-2 text-md align-top font-bold tracking-tight text-gray-700 dark:text-white">{name}</h5>
//                             </Link>
//                             <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{url}</p>
//                         </div>
//                     {/*</div>*/}
//                 </div>
//
//                 <div className="back" onClick={() => setFlip(!flip)}>
//                     {/*<div className="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-3">*/}
//                         <h1>List the albums here!</h1>
//                     {/*</div>*/}
//
//                 </div>
//             </div>
//
//         // </div>
//     )
// }