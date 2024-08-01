import { useEffect, useMemo, useState } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";

export default function DarkDropdown(props: TProps) {
    const { label = 'Select Options' } = props;
    const [corpus, setCorpus] = useState({ open: false, value: '' })

    const filteredValues = useMemo(() => {
        if (props?.isAutocomplete)
            return props.options?.filter((item) => {
                return corpus.value?.length ? item.label.toLowerCase()?.includes(corpus.value?.toLowerCase()) : true
            })
        return props.options;
    }, [corpus.value, props.isAutocomplete, props.options])
    useEffect(() => {
        setCorpus((prev) => ({ ...prev, open: !!(filteredValues?.length && corpus.value?.length) }))
    }, [corpus.value.length, filteredValues?.length])

    return <div className=" text-left">
        <div>
            <div
                onClick={() => {
                    if (!props.isAutocomplete)
                        setCorpus((prev) => ({ ...prev, open: !prev.open }))
                }}

                className="text-3xl border rounded-full border-gray-300 bg-[#1E1E1E] focus:ring-white focus:border-white w-full text-gray-300 px-9 flex justify-between items-center"
            >
                {props?.isAutocomplete ? (<input
                    placeholder={label}

                    value={corpus.value}
                    onChange={(e) => {
                        setCorpus((prev) => ({ ...prev, value: e.target.value }))

                        props.onChange(e.target.value)
                    }}
                    className="text-3xl border-0 bg-transparent focus:ring-transparent  w-full py-6 placeholder-gray-300 "
                    type="text"
                    onClick={() => { setCorpus((prev) => ({ ...prev, open: !prev.open })) }}
                />) : <div
                    className="text-3xl border-0 bg-transparent focus:ring-transparent  w-full py-6 placeholder-gray-300 "

                >
                    {corpus.value || label}
                </div>}
                <div className="cursor-pointer" onClick={() => { setCorpus((prev) => ({ ...prev, open: !prev.open })) }}>
                    {corpus.open ? <RiArrowDropUpLine /> :
                        <RiArrowDropDownLine />}
                </div>
            </div>
        </div>
        {corpus.open && filteredValues?.length ? (
            <div className="absolute left-0 right-0 mx-10 z-10  mt-2 origin-top-right bg-[#1E1E1E] bg-opacity-95  divide-y  rounded-xl   border-gray-300 border max-h-96 overflow-y-scroll">
                <div className="py-1 ">
                    {filteredValues?.map((value, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                setCorpus((prev) => ({
                                    value: value.value,
                                    open: props?.isAutocomplete ? prev.open : false
                                }))
                                if (!props.isAutocomplete) {
                                    props.onChange(value.value)
                                }
                            }}
                            className={`text-white text-3xl block w-full p-6 px-10 cursor-pointer text-center border ${i === 0 ? 'border-t-0' : ''} ${i === filteredValues?.length - 1 ? 'border-b-0' : ''}`}
                        >
                            {value.value}
                        </div>
                    ))}
                </div>
            </div>
        ) : ''}
    </div>

}

type TProps = {
    isAutocomplete?: boolean,
    label?: string,
    options: { label: string, value: string }[],
    onChange: (e: string) => void
}
