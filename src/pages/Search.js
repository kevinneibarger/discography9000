import { useSearchParams } from "react-router-dom";
import {AlbumCard} from "../component";
import {useFetch} from "../hooks/useFetch";
import {useTitle} from "../hooks/useTitle";

export const Search = (apiPath, title) => {
    const [searchParams] = useSearchParams();
    const queryTerm = searchParams.get("q");
    console.log(">> Query Term >>");
    console.log(queryTerm);

    const { data: movies } = useFetch(apiPath.apiPath, queryTerm);
    useTitle(`Search result for ${queryTerm}    `);

    return (
        <main>
            <section className="py-7">
                <p className="text-3xl text-gray-700 dark:text-white">
                    {movies.length === 0 ? `No results found for '${queryTerm}'` : `Search results for '${queryTerm}'`}
                </p>
            </section>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    {movies.map((movie) => (
                        <AlbumCard key={movie.id} movie={movie}/>
                    ))}
                </div>
            </section>
        </main>
    )
}