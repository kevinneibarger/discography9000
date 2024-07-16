import { Routes, Route } from "react-router-dom";
import { AlbumsList, AlbumDetails, Search, PageNotFound} from "../pages";

export const AllRoutes = () => {
    return (
        <div className="dark:bg-slate-800">
            <Routes>
                {/*<Route path="" element={<AlbumsList apiPath="movie/now_playing" title="Home" />} />*/}
                {/*<Route path="" element={<ArtistsList apiPath="method=chart.gettopartists" title="Home" />} />*/}
                {/*<Route path="music/:id" element={<AlbumDetails />} />*/}
                {/*<Route path="music/popular" element={<AlbumsList apiPath="method=chart.gettopartists" title="Popular" />} />*/}
                {/*<Route path="music/top" element={<AlbumsList apiPath="method=chart.gettopartists" title="Top Rated" />} />*/}
                {/*<Route path="music/upcoming" element={<AlbumsList apiPath="method=chart.gettopartists" title="Upcoming" />} />*/}
                {/*<Route path="search" element={<Search apiPath="search/movie" />} />*/}

                {/*<Route path="" element={<TopArtists methodGet="chart.gettopartists" title="Home" />} />*/}

                <Route path="" element={<AlbumsList apiPath="movie/now_playing" title="Home" />} />
                <Route path="music/:id" element={<AlbumDetails />} />
                <Route path="music/popular" element={<AlbumsList apiPath="movie/popular" title="Popular" />} />
                <Route path="music/top" element={<AlbumsList apiPath="movie/top_rated" title="Top Rated" />} />
                <Route path="music/upcoming" element={<AlbumsList apiPath="movie/upcoming" title="Upcoming" />} />
                <Route path="search" element={<Search apiPath="search/movie" />} />

                <Route path="*" element={<PageNotFound />} />
            </Routes>
        </div>
    )
}