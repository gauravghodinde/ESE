import React, { useState, useEffect } from 'react';

function ProductReviews() {
    const [starRating, setStarRating] = useState(0);
    const [writtenReview, setWrittenReview] = useState('');
    const [userId, setUserId] = useState('');
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetchReviews();
    }, []); // Fetch reviews when component mounts

    const handleStarClick = (value) => {
        setStarRating(value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('starRating', starRating);
        formData.append('writtenReview', writtenReview);
        formData.append('userId', userId);

        try {
            const response = await fetch('/reviews/add', {
                method: 'POST',
                body: formData
            });

            if (!response.ok) {
                throw new Error('Failed to add review');
            }

            const newReview = await response.json();
            setReviews([...reviews, newReview]);
            setWrittenReview('');
            setStarRating(0);
            setUserId('');
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    const fetchReviews = async () => {
        try {
            const response = await fetch('/reviews');
            const reviewsData = await response.json();
            setReviews(reviewsData);
        } catch (error) {
            console.error('Error:', error.message);
        }
    };

    return (
        <div className="container">
            <h1>Product Reviews</h1>
            <form onSubmit={handleSubmit}>
                <div className="rating-heading">Rating</div>
                <div className="stars">
                    {[1, 2, 3, 4, 5].map((value) => (
                        <span
                            key={value}
                            className={`star ${value <= starRating ? 'selected' : ''}`}
                            onClick={() => handleStarClick(value)}
                        >
                            &#9733;
                        </span>
                    ))}
                </div>
                <textarea
                    id="writtenReview"
                    name="writtenReview"
                    placeholder="Written Review (Max 500 characters)"
                    maxLength="500"
                    value={writtenReview}
                    onChange={(e) => setWrittenReview(e.target.value)}
                    required
                ></textarea>
                <input
                    type="text"
                    id="userId"
                    name="userId"
                    placeholder="User ID"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    required
                />
                <button type="submit">Submit Review</button>
            </form>
            <div id="reviewList">
                {reviews.map((review, index) => (
                    <div key={index} className="review">
                        <p><strong>Star Rating:</strong> {review.starRating}</p>
                        <p><strong>Written Review:</strong> {review.writtenReview}</p>
                        <p><strong>User ID:</strong> {review.user.id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductReviews;