import axios from 'axios';
import { Book, OpenLibrarySearchResponse } from '../types/book';
import { getMockRating } from '../utils/mockRatings';

const API_URL = 'https://openlibrary.org/search.json';

export const fetchBooks = async (query: string): Promise<Book[]> => {
    if (!query) return [];

    try {
        const response = await axios.get<OpenLibrarySearchResponse>(API_URL, {
            params: { q: query },
        });

        // Map response and add mock ratings
        return response.data.docs.map((book) => ({
            ...book,
            ...getMockRating(),
        }));
    } catch (error) {
        throw error;
    }
};
