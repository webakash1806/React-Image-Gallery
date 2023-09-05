import { Link } from "react-router-dom"

const Gallery = ({ image, id }) => {
    return (
        <>
            <Link to={`/React-Image-Gallery/detail/${id}`}>
                <img src={image} alt="" className="sm:hover:scale-[1.1] duration-[0.3s] w-[18.5rem] h-[17rem] object-cover rounded-[1rem] hover:cursor-pointer shadow-lg shadow-[#8D00CA] hover:shadow-xl hover:shadow-slate-900" />
            </Link>
        </>
    )
}

export default Gallery
