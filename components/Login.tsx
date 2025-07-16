import {
  Button,
  GestureResponderEvent,
  Text,
  TextInput,
  View,
} from "react-native";

interface LoginProps {
  email: string;
  password: string;
  loading: boolean;
  error: string | null;
  onEmailChange: (email: string) => void;
  onPasswordChange: (password: string) => void;
  onSubmit: (event: GestureResponderEvent) => void;
}

export default function Login({
  email,
  password,
  loading,
  error,
  onEmailChange,
  onPasswordChange,
  onSubmit,
}: LoginProps) {
  return (
    <View className="min-h-screen bg-black flex items-center justify-center p-4">
      <View className="bg-black border-gray-700 border-2 w-full max-w-md rounded-lg p-6">
        <Text className="text-gray-400 text-lg sm:text-xl font-normal mb-6">
          Welcome Back
        </Text>

        {error && (
          <Text className="bg-red-900 border border-red-700 text-red-300 px-3 py-2 rounded text-sm mb-4">
            {error}
          </Text>
        )}

        <View className="flex flex-col">
          <View className="mb-4">
            <TextInput
              id="email"
              value={email}
              onChangeText={(v) => onEmailChange(v)}
              className="w-full bg-gray-800 border-gray-600 text-white rounded px-3 py-2"
              placeholder="Enter your email"
              placeholderTextColor="green"
              inputMode="email"
            />
          </View>

          <View className="mb-4">
            <TextInput
              id="password"
              value={password}
              secureTextEntry={true}
              onChangeText={(v) => onPasswordChange(v)}
              className="w-full bg-gray-800 border-gray-600 text-white rounded px-3 py-2"
              placeholder="Enter your password"
              placeholderTextColor="green"
            />
          </View>

          <Button
            disabled={loading}
            title={loading ? "Signing in..." : "Sign In"}
            onPress={onSubmit}
          />
        </View>
      </View>
    </View>
  );
}
