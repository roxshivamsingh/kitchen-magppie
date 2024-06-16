import Header from './components/Header'
import Sidebar from './components/Sidebar'
// import VideoPlayer from './components/VideoPlayer'
import KitchenHome from '../../../../../assets/videos/kitchen-home.mp4'

export default function Hero() {
    return (<div className="relative min-h-screen overflow-hidden">
        <video
            className="object-cover w-full min-h-screen"
            autoPlay
            loop
            muted
            playsInline
        >
            <source src={KitchenHome} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
        <div className="absolute top-0 left-0 right-0 py-8">
            <Header />
        </div>
        <div className="absolute top-1/2 left-0 transform px-8 -translate-y-1/2 text-right">
            <p className="text-6xl font-light mb-6 text-white text-left">
                Keep yourself and your <br />{' '}
                <span className="mt-4">family healthy</span>
            </p>
            <p className="text-4xl font-bold text-white text-left">
                with the world's first{' '}
                <span className="underline">wellness kitchen</span>
            </p>
        </div>
        <div className="absolute top-0 min-h-screen right-0">
            <Sidebar />
        </div>
    </div>
    )
}
