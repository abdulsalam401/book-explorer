export const getMockRating = () => {
    const rating = (Math.random() * (5.0 - 3.5) + 3.5).toFixed(1);
    const reviewCount = Math.floor(Math.random() * 500) + 10;
    return {
        rating: parseFloat(rating),
        reviewCount,
    };
};
