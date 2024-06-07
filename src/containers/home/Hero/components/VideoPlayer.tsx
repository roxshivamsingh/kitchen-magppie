import { MediaPlayer, MediaProvider } from '@vidstack/react'
import KitchenHome from '../../../../assets/videos/kitchen-home.mp4'

const VideoPlayer = () => {
    return (
        <MediaPlayer
            title="Sprite Fight"
            autoPlay
            loop
            muted
            src={KitchenHome}
            className="object-cover w-full h-full"
        >
            <MediaProvider />
        </MediaPlayer>
    )
}
export default VideoPlayer
