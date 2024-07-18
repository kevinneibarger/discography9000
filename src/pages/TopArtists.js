import {useTitle} from "../hooks/useTitle";
import {ArtistCard} from "../component/ArtistCard";
import {useFetchArtists} from "../hooks/useFetchArtists";

export const TopArtists = ({methodGet, title}) => {
    console.log(" Passing in Method Get ["+methodGet+"]");
    const { data: artistsList } = useFetchArtists(methodGet);
    useTitle(`${title} `);

    return (
        <main>
            <section className="max-w-7xl mx-auto py-7">
                <div className="flex justify-start flex-wrap other:justify-evenly">
                    { artistsList.map((artist) => (
                        <ArtistCard key={artist.mbid} artist={artist} />
                    )) }
                </div>
            </section>
        </main>
    )
}