const map = {
  grass: "#7AC74C", // Light green
  fire: "#F57C00", // Orange
  water: "#3295FF", // Blue
  bug: "#9A72AC", // Lavender
  normal: "#AA98A9", // Gray
  flying: "#A890F0", // Light blue
  poison: "#A332C9", // Purple
  electric: "#FFC90F", // Yellow
  ground: "#E0C068", // Light brown
  psychic: "#FF9F9B", // Pink
  rock: "#B6A136", // Brown
  ice: "#C6EAFC", // Light blue
  ghost: "#706D7B", // Dark gray
  fighting: "#C22E28", // Red
  dark: "#59575F", // Black
  steel: "#B7B7CE", // Light gray
  fairy: "#EBAE8B", // Light pink
  dragon: "#7037FF", // Purple
  stellar: "#283c62",
};

export function mapTypeToColor(type) {
  return map[type];
}
