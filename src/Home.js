import { useState, useEffect } from "react";
import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
    const {data:blogs, IsPending, error} = useFetch('https://localhost:8000/blogs')

    return (
        <div className="home">
        {error && <div>{error}</div>}
{IsPending && <div>Loading...</div>}
{blogs && <Bloglist blogs={blogs} title="All Blogs"/>}
            </div>
        );
}

export default Home;