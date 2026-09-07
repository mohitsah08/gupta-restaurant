export interface CustomerReview {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  comment: string;
  highlightDish: string;
}

export const reviewsData = {
  rating: 3.8,
  totalReviewsCount: '300+',
  source: 'Google Reviews & Local Diners',
  googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Gupta+Restaurant+Near+V+Mart+Ward+No+15+Thawe+Gopalganj+Bihar+841428',
  reviews: [
    {
      id: 'rev-1',
      author: 'Rajesh Kumar',
      location: 'Gopalganj',
      rating: 5,
      date: 'Recent Patron',
      comment: 'The Mutton Handi here is truly special. Perfectly cooked meat, tender texture, and rich authentic gravy with garlic aroma. Great taste and very affordable price compared to other places.',
      highlightDish: 'Mutton Handi & Tandoori Roti',
    },
    {
      id: 'rev-2',
      author: 'Amitabh Sharma',
      location: 'Thawe',
      rating: 4,
      date: 'Local Guide',
      comment: 'Very good family restaurant near V-Mart Thawe. We ordered Chicken Dum Biryani and Kadai Paneer. Both were fresh, well-seasoned and served hot. Ample seating and quick service.',
      highlightDish: 'Chicken Dum Biryani & Kadai Paneer',
    },
    {
      id: 'rev-3',
      author: 'Pooja Verma',
      location: 'Siwan / Gopalganj',
      rating: 4,
      date: 'Family Dining',
      comment: 'Went with family after visiting Thawe temple. Clean environment, friendly staff, and the Butter Naan with Paneer Butter Masala was delicious. Good value for money.',
      highlightDish: 'Paneer Butter Masala & Butter Naan',
    },
    {
      id: 'rev-4',
      author: 'Manish Pandey',
      location: 'Thawe Road',
      rating: 5,
      date: 'Regular Visitor',
      comment: 'One of the most reliable food stops on the main road. Their rolls and Chinese chowmein are super tasty for quick bites, and handi curries are rich.',
      highlightDish: 'Special Egg Chicken Roll & Handi Curry',
    },
  ] as CustomerReview[],
};
