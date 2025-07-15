import { RootState } from "@/store";
import { Redirect } from "expo-router";
import { useSelector } from "react-redux";

export default function DashboardScreen() {
    const currentUser = useSelector(
        (state: RootState) => state.auth.currentUser
    );
    const role = currentUser?.role;

    if (role === "admin") {
        return <Redirect href="/dashboard/admin" />
    }

    if (role === "user") {
        return <Redirect href="/dashboard/user" />
    }

    return <Redirect href="/auth/unauthorized" />
}