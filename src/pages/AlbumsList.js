// import {AlbumCard} from "../component";
// import {useFetch} from "../hooks/useFetch";
// import {useEffect} from "react";
// import {useTitle} from "../hooks/useTitle";
//
// export const AlbumsList = ({apiPath, title}) => {
//     const { data: movies } = useFetch(apiPath);
//     useTitle(`${title} `);
//
//     return (
//         <main>
//             <section className="max-w-7xl mx-auto py-7">
//                 <div className="flex justify-start flex-wrap other:justify-evenly">
//                     { movies.map((movie) => (
//                         <AlbumCard key={movie.id} movie={movie} />
//                     )) }
//                 </div>
//             </section>
//         </main>
//     )
// }