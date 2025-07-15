import RoleGuard from "@/components/RoleGuard";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function DashboardLayout() {
  return (
    <RoleGuard allowedRoles={["admin", "user"]}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="admin" />
        <Stack.Screen name="user" />
      </Stack>
    </RoleGuard>
  );
}
