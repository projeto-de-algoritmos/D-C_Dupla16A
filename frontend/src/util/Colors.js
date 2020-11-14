const types = {
  normal: {
    background: "#A8A878",
    border: "#6D6D4E",
  },
  fighting: {
    background: "#C03028",
    border: "#7D1F1A",
  },
  flying: {
    background: "#A890F0",
    border: "#6D5E9C",
  },
  poison: {
    background: "#A040A0",
    border: "#682A68",
  },
  ground: {
    background: "#E0C068",
    border: "#927D44",
  },
  rock: {
    background: "#B8A038",
    border: "#786824",
  },
  bug: {
    background: "#A8B820",
    border: "#6D7815",
  },
  ghost: {
    background: "#705898",
    border: "#493963",
  },
  steel: {
    background: "#B8B8D0",
    border: "#787887",
  },
  fire: {
    background: "#F08030",
    border: "#9C531F",
  },
  water: {
    background: "#6890F0",
    border: "#445E9C",
  },
  grass: {
    background: "#78C850",
    border: "#4E8234",
  },
  electric: {
    background: "#F8D030",
    border: "#A1871F",
  },
  psychic: {
    background: "#F85888",
    border: "#A13959",
  },
  ice: {
    background: "#98D8D8",
    border: "#638D8D",
  },
  dragon: {
    background: "#7038F8",
    border: "#4924A1",
  },
  dark: {
    background: "#705848",
    border: "#49392F",
  },
  fairy: {
    background: "#EE99AC",
    border: "#9B6470",
  },
};

export default function getType(type, color) {
  return types[type][color];
}
