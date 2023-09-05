const Gallery = ({ image }) => {
    return (
        <>
            <img src={image} alt="" className="sm:hover:scale-[1.1] duration-[0.3s] w-[18.5rem] h-[17rem] object-cover rounded-[1rem] hover:cursor-pointer shadow-md shadow-slate-500 hover:shadow-xl hover:shadow-slate-700" />
        </>
    )
}

export default Gallery
