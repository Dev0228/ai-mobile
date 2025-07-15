import { View, Text } from "react-native";

interface LoadingProps {
  message?: string;
}

export function Loading({ message = "Loading..." }: LoadingProps) {
  return (
    <View className="bg-black border-gray-700 border-2 w-full max-w-full p-4 flex items-center justify-center min-h-[200px]">
      <View className="text-gray-400 text-center">
        <Text className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-400 mx-auto mb-2"></Text>
        <Text>{message}</Text>
      </View>
    </View>
  );
}

interface ErrorProps {
  message: string;
  onRetry?: () => void;
}

export function Error({ message, onRetry }: ErrorProps) {
  return (
    <div className="bg-black border-gray-700 border-2 w-full max-w-full p-4 flex items-center justify-center min-h-[200px]">
      <div className="text-red-400 text-center">
        <p className="mb-2">Error: {message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
}
