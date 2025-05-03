import EventDetails from "./components/EventDetails";
import EventsCarousel from "./components/EventsCarousel";
import Navbar from "./components/Navbar";
import PhotoGallery from "./components/PhotoGallary";

export default function Home() {
    return (
        <>
            <div className="min-h-screen">
                <div className="px-4 sm:px-0">
                    <Navbar />
                </div>
                <div className="bg-light-yellow">
                    <div className="px-4 sm:px-0">
                        <PhotoGallery />
                    </div>
                    <EventDetails />
                </div>
                <div className="px-4 sm:px-0">
                    <EventsCarousel />
                </div>
            </div>
        </>
    );
}
