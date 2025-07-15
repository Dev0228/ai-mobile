import { Redirect } from "expo-router";
import { useSelector } from "react-redux";
import { RootState } from "@/store";

type Props = {
    allowedRoles: string[];
    children: React.ReactNode;
};

export default function RoleGuard({ allowedRoles, children }: Props) {
    const currentUser = useSelector(
        (state: RootState) => state.auth.currentUser
    );
    const role = currentUser?.role;

    if (!role || !allowedRoles.includes(role)) {
        return <Redirect href="/auth/unauthorized" />;
    }

    return <>{children}</>;
}