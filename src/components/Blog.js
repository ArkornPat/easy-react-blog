import Blogs from "../data/Blogs"
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Blog.css"

export default function Blog (){
    const [search,setSearch] = useState("");
    const [filter,setFilter] = useState([]);
    useEffect(()=>{
        const r = Blogs.filter((item)=>item.title.includes(search))
        setFilter(r)
    },[search])
    return(
        <div className="blog-container">
            <div className="search-containner">
                <input type="text" className="search-input" placeholder="ค้นหาบทความ" value={search} onChange={(e)=> setSearch(e.target.value)}/>
            </div>
            <article>
                {filter.map((item)=>(
                    <Link to={`/blog/${item.id}`} key={item.id}>
                    <div className="card">
                        <h2>{item.title}</h2>
                        <p>{item.content.substring(0,300)}</p>
                        <hr/>
                    </div>
                    </Link>
                ))}
            </article>
        </div>
    );
}