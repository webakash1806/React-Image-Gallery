import axios from 'axios'
import { useEffect, useState } from 'react'
import Gallery from './Gallery'

const GalleryData = () => {

    const [dataFetched, setDataFetched] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const imageData = async () => {
        setIsLoading(true)
        const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos?offset=0&limit=20")
        const mainData = response.data.photos
        const originalData = mainData.map((d) => {
            return {
                id: d.id,
                image: d.url
            }
        })
        setDataFetched(originalData)
        setIsLoading(false)
    }

    console.log(dataFetched)

    useEffect(() => { imageData() }, [])

    return (
        <div className='w-screen flex flex-col justify-center items-center gap-4'>
            <p className='font-bold font-serif text-4xl py-4 w-full text-center tracking-wide'>Image Gallery</p>

            <div className="image-container flex flex-wrap items-center justify-center gap-7">
                {isLoading ? <div className='w-[3.7rem] h-[3.7rem] border-[6.2px] rounded-full border-r-blue-500 animate-spin mt-[7rem]'></div> :
                    dataFetched.map((d) => <Gallery key={d.id} image={d.image} />)}
            </div>
        </div>
    )
}

export default GalleryData
