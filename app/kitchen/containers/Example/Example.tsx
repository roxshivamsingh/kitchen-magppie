import { useMemo } from "react"
import { _example } from "./Example.spec"
import _ from "lodash"

export default function Example() {
    const renderContent = useMemo(() => {
        return _.sortBy(_example, 'orderId')?.map((example, i) => {
            const { content, name } = example
            switch (name) {
                case 'buy-step':
                    return <div className="grid grid-cols-2 bg-blue-300" key={i}>
                        <div>
                            {_.has(content, 'messages') ? _.get(content, 'messages', [])?.map((msg, j) => {
                                return <div className='' key={j}>{_.get(msg, 'remark', '')}</div>
                            }) : ''}
                        </div>
                        <div>
                            {_.has(content, 'items') ? _.get(content, 'items', [])?.map((msg, j) => {
                                return <div className='' key={j}>{_.get(msg, 'remark', '')}</div>
                            }) : ''}
                        </div>
                    </div>
                case 'footer':
                    return <div className="bg-orange-300" key={i}>{_.isString(content) ? content : ''}</div>
                default:
                    return <div key={i}>{_.isString(content) ? content : ''}</div>
            }
        })

    }, [])
    return <div>{renderContent}</div>
}
