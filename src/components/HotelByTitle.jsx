import useFetch from "../useFetch";

const HotelByTitle = ({name}) => {

    const {data, loading, error} = useFetch(`https://be-4-4-hw-2.vercel.app/hotels/${name}`)

    return(
        <div>
            {data?.map((hotel) => (
                <div>
                    <h2>{hotel.name}</h2>
                    <p><b>Location: </b>{hotel.location}</p>
                    <p><b>Rating: </b>{hotel.rating}</p>
                    <p><b>Price Range: </b>{hotel.priceRange}</p>
                </div>
            ))}
        </div>
    )
}

export default HotelByTitle;