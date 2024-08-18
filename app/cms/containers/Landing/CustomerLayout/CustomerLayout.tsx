import { Outlet } from "react-router-dom";
import { useFirebaseLandingListener } from "../../../utils/firebase";

export default function CustomerLayout() {
    useFirebaseLandingListener()
    return <Outlet />
}
