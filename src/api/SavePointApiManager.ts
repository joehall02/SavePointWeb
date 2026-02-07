import type { AxiosError, AxiosInstance, AxiosResponse } from "axios"
import axios from "axios"

// API error type
type ApiError = {
	statusCode: number
	error: string
}

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

	// Normalise error method
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
				error: "Network Error"
			}

			return apiError;
		}

		// Default error
		const apiError: ApiError = {
			statusCode: 520,
			error: "Unknown Error"
		}

		return apiError;
	}

	// Get instance method (creates new instance if it doesn't exist already)
	public static getInstance(): SavePointApiManager {
		if (!SavePointApiManager.instance) {
			SavePointApiManager.instance = new SavePointApiManager();
		}
		return SavePointApiManager.instance
	}
	
	// HTTP Methods

}

// export get instance
export default SavePointApiManager.getInstance();