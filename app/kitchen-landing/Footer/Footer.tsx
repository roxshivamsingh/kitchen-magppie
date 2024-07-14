import { TComponentItem } from "../../../types"
import { Link } from "react-router-dom"
export function Footer(props: TProps) {
    return (<div>
        <div className="grid grid-cols-2">
            {props.item.items?.map((item, i) => {
                return <Link to={`landing/${item.secondary}`} key={i}>{item.main}</Link>
            })}
        </div>
        <div className="grid grid-cols-2">
            <div>{props.item.typography.main}</div>
            <div>{props.item.typography.action}</div>
        </div>
        <div className="">
            {props.item.typography.description}
        </div>
    </div>)
}

type TProps = { item: TComponentItem }
