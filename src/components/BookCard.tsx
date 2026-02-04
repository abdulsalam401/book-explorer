import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Book } from '../types/book';
import { Rating } from './Rating';

interface BookCardProps {
    book: Book;
    onPress: (book: Book) => void;
}

export const BookCard: React.FC<BookCardProps> = ({ book, onPress }) => {
    const coverUrl = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
        : 'https://via.placeholder.com/150x200.png?text=No+Cover';

    return (
        <TouchableOpacity style={styles.card} onPress={() => onPress(book)}>
            <Image source={{ uri: coverUrl }} style={styles.cover} resizeMode="cover" />
            <View style={styles.info}>
                <Text style={styles.title} numberOfLines={2}>
                    {book.title}
                </Text>
                <Text style={styles.author} numberOfLines={1}>
                    {book.author_name?.join(', ') || 'Unknown Author'}
                </Text>
                <Text style={styles.year}>{book.first_publish_year || 'N/A'}</Text>
                <Rating rating={book.rating} reviewCount={book.reviewCount} />
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 5,
        backgroundColor: 'white',
        borderRadius: 8,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,
    },
    cover: {
        width: 60,
        height: 90,
        borderRadius: 4,
        backgroundColor: '#eee',
    },
    info: {
        flex: 1,
        marginLeft: 10,
        justifyContent: 'center',
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    author: {
        fontSize: 14,
        color: '#666',
        marginTop: 2,
    },
    year: {
        fontSize: 12,
        color: '#888',
        marginTop: 2,
    },
});
