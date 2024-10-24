import "./App.css";
import Hotels from "./components/Hotels";
import HotelByTitle from "./components/HotelByTitle";

export default function App (){
    return(
        <main>
            <Hotels />
            <HotelByTitle title=" New Hotel 1"/>
        </main>
    )
}