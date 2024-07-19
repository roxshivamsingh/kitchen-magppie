// import { TComponentItem } from '../../../../types'
import gallerImg from '../../assets/Rectangle 71.png'

export function Gallery() {
    return (
        <div className="flex flex-col items-cente justify-center bg-[#f9f5ef] py-10">
            {/* <h1
                className="mb-10 px-5 text-5xl font-extralight text-center"
                dangerouslySetInnerHTML={{ __html: props.item.typography.main }}
            /> */}
            <h1 className="text-5xl mb-5 text-center mt-10">
                Explore our <span className="italic font-thin">Gallery</span>
            </h1>
            {/* {props.item.gallery.map((feature, i) => ( */}
            {/* <> */}
            <div className='container grid grid-cols-2 mx-auto max-w-7xl gap-5'>
                <img
                    // key={i}
                    src={gallerImg}
                    alt="logo"
                    className="w-full h-full object-cover transition-transform duration-500 ease-in-out transform hover:scale-125"
                />
                <img
                    // key={i}
                    src={gallerImg}
                    alt="logo"
                    className="w-full h-full object-contain"
                />
                <img
                    // key={i}
                    src={gallerImg}
                    alt="logo"
                    className="w-full h-full object-contain"
                />
                <img
                    // key={i}
                    src={gallerImg}
                    alt="logo"
                    className="w-full h-full object-contain"
                />
            </div>
            {/* </> */}
            {/* ))} */}
        </div>
    )
}

// type TProps = { item: TComponentItem }
// props: TProps
