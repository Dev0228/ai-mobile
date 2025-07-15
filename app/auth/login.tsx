import Login from "@/components/Login";
import { login } from "@/services";
import { useAppDispatch } from "@/store/hooks";
import { setCurrentUser } from "@/store/slices/authSlice";
import { useRouter } from "expo-router";
import { useState } from "react";
import { GestureResponderEvent } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const handleSubmit = async (e: GestureResponderEvent) => {
    setLoading(true);
    setError(null);

    const response = await login({ email, password });
    setLoading(false);

    if (!response || !response.success) {
      setError("Invalid credentials or server error");
      return;
    }

    // Update Redux store with user data
    if (response.data?.user) {
      dispatch(setCurrentUser(response.data.user));
      router.navigate("/dashboard");
    }
  };

  return (
    <SafeAreaView>
      <Login
        email={email}
        password={password}
        loading={loading}
        error={error}
        onEmailChange={setEmail}
        onPasswordChange={setPassword}
        onSubmit={handleSubmit}
      />
    </SafeAreaView>
  );
}
