import useFetch from "../useFetch";

const Hotels = () => {

    const{data, loading, error} = useFetch("https://be-4-4-hw-2.vercel.app/hotels")

    return(
        <div>
            <h2>All Hotels</h2>
            <ul>
            {data?.map((hotel) => (
                <li key={key._id}>{hotel.name}</li>
            ))}
            </ul>
        </div>
    )
}

export default Hotels;