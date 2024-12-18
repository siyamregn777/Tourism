'use client';
import { useEffect, useState } from 'react';
import style from './comques.module.css';

type Accommodation = {
  id: string;
  name: string;
  location: string;
  price: number;
  rating: number;
  description: string;
};

const Comques = () => {
  const [accommodations, setAccommodations] = useState<Accommodation[]>([]);

  useEffect(() => {
    // Fetch accommodation data from your API
    const fetchAccommodations = async () => {
      try {
        const response = await fetch('/api/accommodations'); // Update with your API endpoint
        const data: Accommodation[] = await response.json();
        setAccommodations(data);
      } catch (error) {
        console.error('Error fetching accommodations:', error);
      }
    };

    fetchAccommodations();
  }, []);

  return (
    <div className={style.container}>
      <h1>Accommodation Listings</h1>
      <div className={style.list}>
        {accommodations.length > 0 ? (
          accommodations.map((accommodation) => (
            <div key={accommodation.id} className={style.accommodationCard}>
              <h2>{accommodation.name}</h2>
              <p>{accommodation.location}</p>
              <p>Price: ${accommodation.price} per night</p>
              <p>Rating: {accommodation.rating} ⭐</p>
              <p>{accommodation.description}</p>
              <button className={style.bookButton}>Book Now</button>
            </div>
          ))
        ) : (
          <p>No accommodations available at this time.</p>
        )}
      </div>
    </div>
  );
};

export default Comques;
