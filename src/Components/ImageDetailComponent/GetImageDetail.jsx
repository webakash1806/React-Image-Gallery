import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import Loading from "../Loading"

const GetImageDetail = () => {

    const { id } = useParams()
    const [fetchedData, setFetchedData] = useState({})
    const [loading, setLoading] = useState(false)

    const ImageData = async () => {
        setLoading(true)
        const data = await axios.get(`https://api.slingacademy.com/v1/sample-data/photos/${id}`)
        // console.log(data)
        setFetchedData({
            title: data.data.photo.title,
            description: data.data.photo.description,
            image: data.data.photo.url
        })
        setLoading(false)
    }

    const { title, description, image } = fetchedData



    useEffect(() => { ImageData() }, [])

    return (
        <>
            {loading ? <Loading /> :
                <div className="flex flex-col items-center bg-[#8d00ca] p-4 sm:p-6 m-2 sm:m-4 rounded-md py-8 sm:py-10 sm:max-w-[30rem] max-w-[25rem] md:flex-row md:min-w-[47rem] md:pr-2 lg:min-w-[56rem]">
                    <img className="w-[22rem] sm:w-[27rem] rounded-lg  shadow-slate-200 shadow-[3px_3px_10px] md:w-[22rem] lg:w-[24rem]" src={image} alt="" />
                    <div className="detail text-white my-4 md:ml-6 lg:mx-10" >
                        <div className="title text-3xl font-bold my-6 sm:text-4xl md:text-3xl">{title}</div>
                        <div className="text-lg tracking-wide sm:text-xl md:text-lg">{description}</div>
                    </div>
                </div>}
        </>
    )
}

export default GetImageDetail
