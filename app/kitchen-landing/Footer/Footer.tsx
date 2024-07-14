import { Link } from "react-router-dom"
import { TComponentItem } from "../../../types"
export function Footer(props: TProps) {
    return (<div className="px-5">
        <div className=" text-2xl container">MAGPPIE</div>

        <div className="grid grid-cols-2">
            {props.item.items?.map((item, i) => {
                return <Link to={`landing/${item.secondary}`} key={i}>{item.main}</Link>
            })}
        </div>
        <div className="grid grid-cols-2">
            <div>{props.item.typography.main}</div>
            <div>{props.item.typography.action}</div>
        </div>
        <div className="text-center">
            {props.item.typography.description}
        </div>
    </div>)
}

type TProps = { item: TComponentItem }
