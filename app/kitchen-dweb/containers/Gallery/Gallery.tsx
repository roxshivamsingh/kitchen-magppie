// import { TComponentItem } from '../../../../types'
import gallerImg from '../../assets/Rectangle 71.png'

export function Gallery() {
    return (
        <div
            id="Gallery"
            className="flex flex-col items-center justify-center bg-[#f9f5ef] py-10"
        >
            {/* <h1
                className="mb-10 px-5 text-5xl font-extralight text-center"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            /> */}
            <h1 className="text-5xl mb-5 text-center mt-10 font-extralight">
                Explore our{' '}
                <span className="italic font-thin uppercase">Gallery</span>
            </h1>
            {/* {props.item.gallery.map((feature, i) => ( */}
            {/* <> */}
            <div className="grid grid-cols-2 gap-5 mx-10">
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={gallerImg}
                        alt="Description"
                        className="w-50 h-50 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={gallerImg}
                        alt="Description"
                        className="w-50 h-50 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={gallerImg}
                        alt="Description"
                        className="w-50 h-50 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
                <div className="relative w-full h-full overflow-hidden">
                    <img
                        src={gallerImg}
                        alt="Description"
                        className="w-50 h-50 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
                    />
                </div>
            </div>
            {/* </> */}
            {/* ))} */}
        </div>
    )
}

// type TProps = { item: TComponentItem }
// props: TProps
