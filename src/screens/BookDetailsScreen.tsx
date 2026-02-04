import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { RouteProp, useRoute, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from '../../App';
import { Rating } from '../components/Rating';

type BookDetailsScreenRouteProp = RouteProp<RootStackParamList, 'BookDetails'>;

export const BookDetailsScreen = () => {
    const route = useRoute<BookDetailsScreenRouteProp>();
    const navigation = useNavigation();
    const { book } = route.params;

    const coverUrl = book.cover_i
        ? `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`
        : 'https://via.placeholder.com/300x450.png?text=No+Cover';

    const authorName = book.author_name?.[0] || 'Unknown Author';

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.container}>
                {/* Header Actions (Custom placement to match design if needed, but using default header for now) */}

                <View style={styles.coverContainer}>
                    <Image source={{ uri: coverUrl }} style={styles.cover} resizeMode="cover" />
                </View>

                <Text style={styles.title}>{book.title}</Text>
                <Text style={styles.author}>{authorName}</Text>
                <Text style={styles.year}>Published in {book.first_publish_year || 'N/A'}</Text>

                <View style={styles.ratingContainer}>
                    <Rating rating={book.rating} reviewCount={book.reviewCount} />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>About the author</Text>
                    <Text style={styles.description}>
                        {authorName} is a celebrated writer known for their compelling storytelling and unique voice.
                        Their work often explores themes of human connection and resilience, resonating with readers worldwide.
                    </Text>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Overview</Text>
                    <Text style={styles.description}>
                        This engaging book captures the imagination with its vivid characters and intricate plot.
                        Set against a rich backdrop, the story unfolds with surprising twists and deep emotional currents
                        that keep pages turning until the very end. A must-read for fans of the genre.
                    </Text>
                </View>

                <TouchableOpacity style={styles.readButton} onPress={() => { }}>
                    <Ionicons name="checkmark" size={20} color="white" style={{ marginRight: 8 }} />
                    <Text style={styles.readButtonText}>Book Read</Text>
                </TouchableOpacity>

            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    container: {
        padding: 24,
        alignItems: 'center',
    },
    coverContainer: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 8,
        marginBottom: 24,
        borderRadius: 12,
        backgroundColor: '#fff',
    },
    cover: {
        width: 200,
        height: 300,
        borderRadius: 12,
    },
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#1a1a1a',
        textAlign: 'center',
        marginBottom: 8,
        fontFamily: 'sans-serif-medium', // Trying to match the bold look
    },
    author: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 4,
    },
    year: {
        fontSize: 14,
        color: '#888',
        textAlign: 'center',
        marginBottom: 16,
    },
    ratingContainer: {
        marginBottom: 32,
    },
    section: {
        width: '100%',
        marginBottom: 24,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: '#1a1a1a',
        marginBottom: 8,
        alignSelf: 'flex-start',
    },
    description: {
        fontSize: 14,
        color: '#666',
        lineHeight: 22,
        textAlign: 'left',
    },
    readButton: {
        backgroundColor: '#50C2C9', // Matching the teal/green color
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingVertical: 16,
        borderRadius: 12,
        marginTop: 8,
        marginBottom: 20,
        shadowColor: '#50C2C9',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4,
    },
    readButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
});
