export function formatDate(dateString) {
  // Convert string to Date object
  const dateObj = new Date(dateString);

  // Format the date
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
    label: "Streaming",
    value: "streaming",
    apiUrl: "https://api.themoviedb.org/3/tv/airing_today",
  },
  {
    label: "On TV",
    value: "tv",
    apiUrl: "https://api.themoviedb.org/3/trending/tv",
  },
  {
    label: "For Rent",
    value: "rent",
    apiUrl: "https://api.themoviedb.org/3/tv/on_the_air",
  },
  {
    label: "In Theaters",
    value: "theaters",
    apiUrl: "https://api.themoviedb.org/3/tv/popular",
  },
];
