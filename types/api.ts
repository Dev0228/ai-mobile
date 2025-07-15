// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  message?: string;
}

export interface LoginResponse {
  user: {
    id: string;
    email: string;
    name: string;
    role: "admin" | "user";
  };
  token: string;
}

export interface UserResponse {
  user: {
    id: string;
    email: string;
    name: string;
    role: "admin" | "user";
  };
}
