import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface RatingProps {
    rating?: number;
    reviewCount?: number;
}

export const Rating: React.FC<RatingProps> = ({ rating = 0, reviewCount = 0 }) => {
    return (
        <View style={styles.container}>
            <Ionicons name="star" size={16} color="#FFD700" />
            <Text style={styles.rating}>{rating}</Text>
            <Text style={styles.reviews}>({reviewCount} reviews)</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    rating: {
        marginLeft: 4,
        fontWeight: 'bold',
        color: '#333',
    },
    reviews: {
        marginLeft: 4,
        color: '#666',
        fontSize: 12,
    },
});
