import React from 'react';
import { render } from '@testing-library/react-native';
import { BookCard } from '../components/BookCard';
import { Book } from '../types/book';

const mockBook: Book = {
    key: '123',
    title: 'Test Book Title',
    author_name: ['Test Author'],
    cover_i: 12345,
    first_publish_year: 2021,
    rating: 4.5,
    reviewCount: 100,
};

describe('BookCard', () => {
    it('renders book title and author correctly', () => {
        const onPressMock = jest.fn();
        const { getByText } = render(<BookCard book={mockBook} onPress={onPressMock} />);

        expect(getByText('Test Book Title')).toBeTruthy();
        expect(getByText('Test Author')).toBeTruthy();
    });
});
