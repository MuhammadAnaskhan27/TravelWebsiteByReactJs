import Mountain1 from "../assets/1.jpg"
import Mountain2 from "../assets/5.jpg"
import Mountain3 from "../assets/3.jpg"
import Mountain4 from "../assets/4.jpg"
import DestinationData from "./Destinationdata";

import "./Destination.css"
function Destination(){
    return(
        <>
        <div className="destination">
            <h1>Popular Destinations</h1>
            <p>Tours give you the opportunity to see a lot,within a time frame.</p>
            <DestinationData
            heading = "Taal Volcano, Batangas"
            text = "One of the most iconic views in Luzon,Mt. Taal boasts a volcano inside a lake of an island.If you fancy a closer, the hike up to the crater is a mere 45minutes, and is easy enough for beginners. Guides will assist you most of the way, and you will see the peccullar enviroment found on an active volcano, including volconic rocks and steam vents. The hike can be dusty and hot, so plan for an early morning trip, and the unwind wwith some bulalo before heading back home!"
            img1={Mountain1}
            img2={Mountain2}
            />
            <DestinationData
            heading = "Mt. Daguldul, Batangas"
            text = "If you are lookin for a hike that's a little more challenging but still good for a beginner mountaineer, check out Mt.Daguldul in San Juan, Batangos. You'll start your hike from the beach and pass through tropical forest, different rock formations, and small streams. There's a small store halfway up the trai where you can take a break and drink buko juice, and thought the summit itself may not have the best view, the breeze is fantastic. Once you've made it back down, head straight to the beach for a refreshing,well-deserved swim."
            img1={Mountain3}
            img2={Mountain4}
            />
                </div>
        </>
    )
}
export default Destination;