import { Icon } from "@iconify/react"
import { Button } from "flowbite-react";
export default function Kitchen() {
    return <div className="container mx-auto space-y-2">

        <Button className="bg-indigo-500">
            <div className="flex justify-center align-middle gap-2">
                <Icon icon='gridicons:create' className="my-1" />
                ADD KITCHEN
            </div>

        </Button>
        {[...Array.from({ length: 5 })]?.map((i: number) => (
            <KitchenCard i={i} key={i} />
        ))
        }
    </div>


}

type TKitchenCardProps = {
    i: number
};
function KitchenCard(props: TKitchenCardProps) {

    return <div className=" p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
            <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                Item {props.i}
            </h5>
        </a>
        <p className="mb-2 font-normal text-gray-500 dark:text-gray-400">
            Item remark {props.i}
        </p>
        <a
            href="#"
            className="flex gap-2 font-medium items-center text-blue-600 hover:underline"
        >
            Detail
            <Icon icon='mdi:external-link' />
        </a>
    </div>

}
