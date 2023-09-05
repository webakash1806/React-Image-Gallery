import axios from 'axios'
import { useEffect, useState } from 'react'
import Gallery from './Gallery'
import Loading from './Loading'

const GalleryData = () => {

    const [dataFetched, setDataFetched] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    // Image data is fetched with axios
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

    // console.log(dataFetched)

    // useEffect is used 
    useEffect(() => { imageData() }, [])

    return (

        <div className="image-container flex flex-wrap items-center justify-center gap-7">
            {isLoading ? <Loading /> :
                dataFetched.map((d) => <Gallery key={d.id} image={d.image} id={d.id} />)}
        </div>
    )
}

export default GalleryData
