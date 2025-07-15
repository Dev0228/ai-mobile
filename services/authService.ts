import { apiClient } from "@/utils/apiClient";
import type { ApiResponse, LoginResponse, UserResponse } from "@/types/api";
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function login(credentials: {
  email: string;
  password: string;
}): Promise<ApiResponse<LoginResponse> | null> {
  try {
    const response = await apiClient.post<ApiResponse<LoginResponse>>(
      "/auth/login",
      credentials
    );
    if (response.success && response.data?.token) {
      await AsyncStorage.setItem("token", response.data.token);
    }
    return response;
  } catch (error) {
    console.log("Hey Error", error)
    return null;
  }
}

export async function logout(): Promise<ApiResponse | null> {
  try {
    const response = await apiClient.post<ApiResponse>("/auth/logout", {});
    await AsyncStorage.removeItem("token");
    return response;
  } catch (error) {
    await AsyncStorage.removeItem("token");
    return null;
  }
}

export async function getCurrentUser(): Promise<ApiResponse<UserResponse> | null> {
  try {
    const response = await apiClient.get<ApiResponse<UserResponse>>("/auth/me");
    return response;
  } catch (error) {
    return null;
  }
}
