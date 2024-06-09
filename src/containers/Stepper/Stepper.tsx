import review from '../../assets/photos/review.png'
import Sidebar from '../home/Hero/components/Sidebar'

export default function Stepper() {
    return (<div
        className={`relative min-h-screen bg-cover bg-center`}
        style={{ backgroundImage: `url(${review})` }}
    >

        <div className="container lg:mx-auto pt-10 p-3 ">
            <div className="text-5xl uppercase text-white font-extrabold lg:my-10 md:my-10">
                MAGPPIE
            </div>
            <div className="text-2xl text-white font-extrabold my-5">
                Get a Quote in 3 easy steps
            </div>
            <div className="grid lg:grid-flow-col lg:grid-cols-4 md:grid-flow-col md:grid-cols-3 gap-4 my-10 text-sm lg:text-lg uppercase">
                {STEPPER_OPTIONS?.map((row, i) => (<div key={i}>
                    <div className="shadow-lg bg-white rounded-md p-4 min-h-full">
                        <div className="flex gap-2 flex-row align-middle py-1">
                            <div className="my-auto">Step</div>
                            <div className='border px-2 rounded-2xl border-black'>{i + 1}</div>
                        </div>
                        <div className='py-1'>CHOOSE YOUR <span className='font-bold'>KITCHEN {row}</span></div>
                    </div>
                </div>))}
            </div>
        </div>

        <div className="absolute top-0 min-h-screen right-0 invisible lg:visible md:visible">
            <Sidebar />
        </div>

        <div className='absolute bottom-10 left-8 text-white transition delay-1000 duration-300 ease-in-out cursor-pointer invisible md:visible lg:visible'>
            <div className="flex gap-3 justify-center align-middle">
                <div className="border border-white p-2 rounded-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" width="0.57em" height="1em" viewBox="0 0 9 16"><path fill="currentColor" d="M4.5 13c-.28 0-.5-.22-.5-.5v-9c0-.28.22-.5.5-.5s.5.22.5.5v9c0 .28-.22.5-.5.5"></path><path fill="currentColor" d="M4.5 14a.47.47 0 0 1-.35-.15l-3.5-3.5c-.2-.2-.2-.51 0-.71s.51-.2.71 0l3.15 3.15l3.15-3.15c.2-.2.51-.2.71 0s.2.51 0 .71l-3.5 3.5c-.1.1-.23.15-.35.15Z"></path></svg>
                </div>
                <div className="py-1 ">Scroll down to select a style</div>
            </div>

        </div>
    </ div>)

}

const STEPPER_OPTIONS = ['Style', 'Size', 'Shape']
