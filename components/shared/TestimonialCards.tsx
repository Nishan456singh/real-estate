"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';

type Review = {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  text: string;
};

const GoogleReviews = () => {
  const [reviews, setReviews] = useState<Review[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axios.get('/google/review');

        if (Array.isArray(data)) {
          setReviews(data);
        } else {
          setError('API response is not an array');
        }
      } catch (error) { 
        return error
      }
    };

    fetchReviews();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!reviews) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {reviews.map((review, index) => (
        <div key={index} className="p-4 border rounded shadow">
          <img src={review.profile_photo_url} alt={review.author_name} className="w-12 h-12 rounded-full" />
          <p className="font-bold">{review.author_name}</p>
          <p className="text-yellow-500">{'⭐'.repeat(review.rating)}</p>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
};

export default GoogleReviews;