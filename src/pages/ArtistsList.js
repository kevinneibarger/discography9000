
import {useTitle} from "../hooks/useTitle";
import {useFetchArtists} from "../hooks/useFetchArtists";
import {ArtistCard} from "../component/ArtistCard";

export const ArtistsList = (apiPath, title) => {
    const { data: artists } = useFetchArtists(apiPath.apiPath);
    useTitle(`${title} `);

    console.log(">> Artists from Artist List <<")
    console.log(artists);

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    { artists.map((artist) => (
                        <ArtistCard key={artist.mbid} artist={artist}/>
                    )) }
                </div>
            </section>
        </main>
    )
}