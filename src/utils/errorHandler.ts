import axios from 'axios';

export const getErrorMessage = (error: any): string => {
    if (axios.isAxiosError(error)) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            return `Server error: ${error.response.status}`;
        } else if (error.request) {
            // The request was made but no response was received
            return 'Network error. Please check your internet connection.';
        }
    }
    return error.message || 'Something went wrong. Please try again.';
};
