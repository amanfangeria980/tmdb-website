export function formatDate(dateString) {
  const dateObj = new Date(dateString);

  const formattedDate = dateObj.toLocaleDateString("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  });

  return formattedDate;
}

export const trendingOptions = [
  {
    label: "Today",
    value: "today",
    apiUrl: "https://api.themoviedb.org/3/trending/all/day",
  },
  {
    label: "This Week",
    value: "thisWeek",
    apiUrl: "https://api.themoviedb.org/3/trending/all/week",
  },
];

export const popularOptions = [
  {
    label: "Featured",
    value: "featured",
    apiUrl: "https://api.themoviedb.org/3/movie/popular",
  },
  {
    label: "Shows",
    value: "shows",
    apiUrl: "https://api.themoviedb.org/3/tv/popular",
  },
  {
    label: "Top Rated",
    value: "rated",
    apiUrl: "https://api.themoviedb.org/3/movie/top_rated",
  },
  {
    label: "Latest",
    value: "latest",
    apiUrl: "https://api.themoviedb.org/3/trending/all/week",
  },
];
