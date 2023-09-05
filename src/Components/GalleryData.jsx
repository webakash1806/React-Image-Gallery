import axios from 'axios'
import { useEffect, useState } from 'react'
import Gallery from './Gallery'

const GalleryData = () => {

    const [dataFetched, setDataFetched] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const imageData = async () => {
        setIsLoading(true)
        const response = await axios.get("https://api.slingacademy.com/v1/sample-data/photos")
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

    useEffect(() => { imageData() }, [setDataFetched])

    return (
        <>
            <p>Image Gallery</p>
            {isLoading ? <div className='w-[3.5rem] h-[3.5rem] border-[6.2px] rounded-full border-r-blue-500 animate-spin'></div> :
                dataFetched.map((d) => <Gallery key={d.id} image={d.image} />)}
        </>
    )
}

export default GalleryData
