import type { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios"
import axios from "axios"
import type { ApiError } from "../types/apiError.types"

/**
 * Manager for handling all requests to the SavePoint API
 * 
 * Responsibilities:
 * - Handle HTTP requests to the API
 * - Centralised error handling
 * - Provide singleton that can be accessed throughout the app
 */
class SavePointApiManager {
	private static instance: SavePointApiManager
	private client: AxiosInstance

	private constructor() {
		// Create axios instance
		this.client = axios.create({
			baseURL: import.meta.env.VITE_API_BASE_URL,
			headers: {
				"Content-Type": "application/json",
			}
		})

		// Auth token interceptor, no-op for now
		this.client.interceptors.request.use((config) => {
			return config;
		})

		// Error handling interceptor
		this.client.interceptors.response.use(
			// If the request is successful, return response and ignore error handling
			(response: AxiosResponse) => response,
			// If the request fails, return normalised error and reject promise
			(error: AxiosError) => {
				const apiError = this.normaliseError(error);
				console.error("API Error:", apiError);
				return Promise.reject(apiError);
			}
		)
	}

	/**
	 * @param error - AxiosError for a failed request
	 * @returns Normalised ApiError object
	*/
	private normaliseError(error: AxiosError): ApiError {
		// Check error response isn't null or undefined AND check the type of data is an object
		if (error.response?.data && typeof error.response?.data === 'object') {
			
			// Extract error from axios response data, backend does not
			// return status code in response body so we use Partial
			const data = error.response?.data as Partial<ApiError>
			
			// Create ApiError object using response status code and 'error' from api response body
			const apiError = {
				statusCode: error.response.status,
				error: data.error
			} as ApiError;

			return apiError;
		}

		// If request is made but no response is received return network error
		if (error.request) {
			const apiError: ApiError = {
				statusCode: 503,
				error: error.message || "Network Error"
			}

			return apiError;
		}

		// Default error
		const apiError: ApiError = {
			statusCode: 520,
			error: error.message || "Unknown Error"
		}

		return apiError;
	}

	/**
	 * Create an instance of the SavePointApiManager class if it doesn't exist already
	 * @returns Instance of SavePointApiManager
	*/
	public static getInstance(): SavePointApiManager {
		if (!SavePointApiManager.instance) {
			SavePointApiManager.instance = new SavePointApiManager();
		}
		return SavePointApiManager.instance
	}
	
	// HTTP Methods

	/**
	 * GET Request
	 * @param url - API URL
	 * @param config - Configuration parameters (e.g. Pagaination, search, etc)
	 * @returns API response
	*/
	public get<T = unknown>(url: string, config?: AxiosRequestConfig) {
		return this.client.get<T>(url, config);
	}
	
	/**
	 * POST Request
	 * @param url - API URL
	 * @param body - Request body
	 * @param config - Configuration parameters (e.g. Pagaination, search, etc)
	 * @returns API response
	*/
	public post<T = unknown, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig) {
		return this.client.post<T, B>(url, body, config);
	}
	
	/**
	 * PUT Request
	 * @param url - API URL
	 * @param body - Request body
	 * @param config - Configuration parameters (e.g. Pagaination, search, etc)
	 * @returns API response
	*/
	public put<T = unknown, B = unknown>(url: string, body?: B, config?: AxiosRequestConfig) {
		return this.client.put<T, B>(url, body, config);
	}
	
	/**
	 * DELETE Request
	 * @param url - API URL
	 * @param config - Configuration parameters (e.g. Pagaination, search, etc)
	 * @returns API response
	*/
	public delete<T = unknown>(url: string, config?: AxiosRequestConfig) {
		return this.client.delete<T>(url, config)
	}
}

// export get instance
export default SavePointApiManager.getInstance();