import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import getType from "../util/Colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > * + *": {
      marginLeft: theme.spacing(2),
    },
  },
}));

const PokeList = ({ pokemons, limit, offset }) => {
  const classes = useStyles();
  if (pokemons.length === 0) {
    return (
      <div className={classes.root}>
        <CircularProgress style={{ marginLeft: "auto", marginRight: "auto" }} />
      </div>
    );
  }
  const displayTypes = (types) => {
    return types.map((type) => (
      <div
        className="types-container"
        style={{
          background: getType(type.type.name, "background"),
          borderColor: getType(type.type.name, "border"),
        }}
      >
        <h5 style={{ marginLeft: "auto", marginRight: "auto" }}>
          {type.type.name}
        </h5>
      </div>
    ));
  };
  const pokemonsBackground = (types) => {
    var style;
    if (types.length === 1)
      style = `linear-gradient(90deg, ${getType(
        types[0].type.name,
        "background"
      )}, ${getType(types[0].type.name, "background")})`;
    else
      style = `linear-gradient(90deg, ${getType(
        types[0].type.name,
        "background"
      )}, ${getType(types[1].type.name, "background")})`;
    return style;
  };
  console.log(pokemons);
  return pokemons.map((pokemon, index) => {
    if (index < offset + limit && index >= offset)
      return (
        <div
          className="pokemons-container"
          style={{ background: pokemonsBackground(pokemon.types) }}
          key={pokemon.id}
        >
          <div style={{ display: "flex", marginLeft: "5px" }}>
            <img src={`${pokemon.sprites.front_default}`} />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5 style={{ marginRight: "20px" }}>{pokemon.name}</h5>
                {displayTypes(pokemon.types)}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5 style={{ fontSize: "50%", marginLeft: "5px" }}>
                  HP: {pokemon.stats[0].base_stat}
                </h5>
                <h5 style={{ fontSize: "50%", marginLeft: "5px" }}>
                  Attack: {pokemon.stats[1].base_stat}
                </h5>
                <h5 style={{ fontSize: "50%", marginLeft: "5px" }}>
                  Defense: {pokemon.stats[2].base_stat}
                </h5>
                <h5 style={{ fontSize: "50%", marginLeft: "5px" }}>
                  SP Attack: {pokemon.stats[3].base_stat}
                </h5>
                <h5 style={{ fontSize: "50%", marginLeft: "5px" }}>
                  SP Defense: {pokemon.stats[4].base_stat}
                </h5>
                <h5
                  style={{
                    fontSize: "50%",
                    marginLeft: "5px",
                    marginRight: "5px",
                  }}
                >
                  Speed: {pokemon.stats[5].base_stat}
                </h5>
              </div>
            </div>
          </div>
        </div>
      );
  });
};

export default PokeList;
