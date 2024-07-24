import { ReactNode, useCallback, useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

interface IProps {
    title: string;
    isExpanded?: true,
    children: ReactNode;
}

export function MinimalAccordion(props: IProps) {

    const [toggle, setToggle] = useState(props?.isExpanded || false);
    const onToggle = useCallback(() => { setToggle((prev) => !prev); }, []);
    return (<div className="block w-full border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm my-2">
        <button
            className="w-full flex justify-between items-center p-2 text-left focus:outline-none"
            onClick={onToggle}
        >
            <span className="text-lg font-medium">{props.title}</span>
            <span>
                {toggle ? <FaChevronUp /> : <FaChevronDown />}
            </span>
        </button>
        {toggle && (<div className="p-4">{props.children}</div>)}
    </div>
    );
}

