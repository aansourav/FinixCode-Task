import EventDetails from "./components/EventDetails";
import EventsCarousel from "./components/EventsCarousel";
import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallary";

export default function Home() {
    return (
        <>
            <div className="min-h-screen">
                <Navbar />
                <div className="bg-light-yellow">
                    <PhotoGallery />
                    <EventDetails />
                </div>
                <EventsCarousel />
            </div>
        </>
    );
}
