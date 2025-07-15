import { apiClient } from "@/utils/apiClient";
import type { ApiResponse } from "@/types/api";
import type {
  LastDataItem,
  LastIncomeItem,
  NormalsChartItem,
} from "@/types/adminDashboard";
import type { CodersTypeItem, NewEmployesItem } from "@/types/userDashboard";

export async function getLastData(): Promise<LastDataItem[] | null> {
  try {
    const response = await apiClient.get<ApiResponse<LastDataItem[]>>(
      "/dashboard/last-data"
    );
    return response.data || null;
  } catch (error) {
    return null;
  }
}

export async function getLastIncome(): Promise<{
  lastIncomeData: LastIncomeItem[];
  increaseIncomeRate: number;
  increaseIncomeValue: number;
} | null> {
  try {
    const response = await apiClient.get<
      ApiResponse<{
        lastIncomeData: LastIncomeItem[];
        increaseIncomeRate: number;
        increaseIncomeValue: number;
      }>
    >("/dashboard/last-income");
    return response.data || null;
  } catch (error) {
    return null;
  }
}

export async function getNormalsChart(): Promise<{
  normalData: NormalsChartItem[];
  increaseNormalRate: number;
} | null> {
  try {
    const response = await apiClient.get<
      ApiResponse<{
        normalData: NormalsChartItem[];
        increaseNormalRate: number;
      }>
    >("/dashboard/normal-data");
    return response.data || null;
  } catch (error) {
    return null;
  }
}

export async function getCodersTypes(): Promise<CodersTypeItem[] | null> {
  try {
    const response = await apiClient.get<ApiResponse<CodersTypeItem[]>>(
      "/dashboard/coders-type"
    );
    return response.data || null;
  } catch (error) {
    return null;
  }
}

export async function getNewEmployes(): Promise<NewEmployesItem[] | null> {
  try {
    const response = await apiClient.get<ApiResponse<NewEmployesItem[]>>(
      "/dashboard/new-employees"
    );
    return response.data || null;
  } catch (error) {
    return null;
  }
}

export async function getSolidProducts(): Promise<{
  solidProductsData1: any[];
  solidProductsData2: any[];
  increaseSolidRate: number[];
} | null> {
  try {
    const response = await apiClient.get<
      ApiResponse<{
        solidProductsData1: any[];
        solidProductsData2: any[];
        increaseSolidRate: number[];
      }>
    >("/dashboard/solid-products");
    return response.data || null;
  } catch (error) {
    return null;
  }
}
