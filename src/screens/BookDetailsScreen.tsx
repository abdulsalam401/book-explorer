import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../../App';
import { Rating } from '../components/Rating';

type BookDetailsScreenRouteProp = RouteProp<RootStackParamList, 'BookDetails'>;

export const BookDetailsScreen = () => {
    const route = useRoute<BookDetailsScreenRouteProp>();
    const { book } = route.params;

    const coverUrl = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : 'https://via.placeholder.com/300x450.png?text=No+Cover';

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Image source={{ uri: coverUrl }} style={styles.cover} resizeMode="contain" />

            <View style={styles.info}>
                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>
                    by {book.author_name?.join(', ') || 'Unknown Author'}
                </Text>

                <View style={styles.ratingContainer}>
                    <Rating rating={book.rating} reviewCount={book.reviewCount} />
                </View>

                <Text style={styles.year}>
                    First Published: {book.first_publish_year || 'N/A'}
                </Text>

                {/* Placeholder for description since search API doesn't return it */}
                <Text style={styles.sectionTitle}>Overview</Text>
                <Text style={styles.description}>
                    This is a placeholder description. The Open Library Search API primarily returns metadata.
                    To get a full description, a separate API call to the Works endpoint would be required.
                    {'\n\n'}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 20,
    },
    cover: {
        width: 200,
        height: 300,
        borderRadius: 8,
        marginBottom: 20,
        backgroundColor: '#f0f0f0',
    },
    info: {
        width: '100%',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        textAlign: 'center',
        marginBottom: 8,
    },
    author: {
        fontSize: 18,
        color: '#666',
        textAlign: 'center',
        marginBottom: 16,
    },
    ratingContainer: {
        alignItems: 'center',
        marginBottom: 16,
    },
    year: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
        color: '#444',
        lineHeight: 24,
    },
});
