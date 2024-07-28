const _data = {
    bg: {
        video: 'https://firebasestorage.googleapis.com/v0/b/magppie-e89d7.appspot.com/o/landing%2Fdesktop-reel.mp4?alt=media&token=a7eeb7dc-61e1-45c2-bed3-336d769ee064',
    },
}

export function Video() {
    return (
        <div className="w-full h-screen overflow-hidden">
            <video
                className="w-full min-h-screen object-cover"
                src={_data.bg.video}
                autoPlay
                loop
                muted
                playsInline
            />
        </div>
    )
}
