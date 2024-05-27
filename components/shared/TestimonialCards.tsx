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
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const { data } = await axios.get(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJW6c_TQPchVQR4JjVq5hIi9I&fields=review&key=AIzaSyB9Uim_Tz_rDsJGI-ia54ozxcs0vkTrjYY`
      );

      setReviews(data.result.reviews);
    };

    fetchReviews();
  }, []);

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