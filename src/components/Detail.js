import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Blogs from "../data/Blogs";
import "./Detail.css"

export default function Detail(){
    const {id} = useParams();
    const [title,setTitle] = useState("");
    const [image,setImage] = useState("");
    const [content,setContent] = useState("");
    const [author,setAuthor] = useState("");

    useEffect(()=>{
        const r = Blogs.find((item)=>item.id === parseInt(id))
        setTitle(r.title)
        setImage(r.image_url)
        setContent(r.content)
        setAuthor(r.author)
        // eslint-disable-next-line
    },[])
    return(
        <div className="containner">
        <h2 className="title">{title}</h2>
        <img src={image} alt={title}/>
        <div className="blog-detail">
            <strong>{author}</strong>
            <p>{content}</p>
        </div>
        </div>
    );
}