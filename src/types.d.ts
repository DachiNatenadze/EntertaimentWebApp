type Movie = {
  title: string;
  thumbnail: {
    trending?: {
      small: string;
      medium?: string;
      large: string;
    };
    regular?: {
      small: string;
      medium: string;
      large: string;
    };
  };
  year: number;
  category: string;
  rating: string;
  isBookmarked: boolean;
  isTrending: boolean;
};
