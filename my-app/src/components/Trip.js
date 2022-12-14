import "./Trip.css";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";
import TripData from "./Tripdata";

function Trip(){
    return(
        <div className="trip">
            <h1>Recent Trips</h1>
            <p>You can discover unique destination using Google Maps.</p>
            <div className="trip-card">
                <TripData
                image={Trip1}
                heading="Trip In Indonesia"
                text="Indonesia, is a country in South East Asia and Oceania between the Indian and Pacific Oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi and parts of Borneo and New Guinea."
                />
                <TripData
                image={Trip2}
                heading="Trip In Indonesia"
                text="Indonesia, is a country in South East Asia and Oceania between the Indian and Pacific Oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi and parts of Borneo and New Guinea."
                />
                <TripData
                image={Trip3}
                heading="Trip In Indonesia"
                text="Indonesia, is a country in South East Asia and Oceania between the Indian and Pacific Oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi and parts of Borneo and New Guinea."
                />
            </div>
        </div>
    )
}
export default Trip;