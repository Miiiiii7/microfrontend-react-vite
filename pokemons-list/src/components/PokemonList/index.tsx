import style from "./PokemonList.module.css";
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid";

const PokemonList = () => {
  const rows: GridRowsProp = [
    { id: 1, name: "Hello", type: "World" },
    { id: 2, name: "DataGridPro", type: "is Awesome" },
    { id: 3, name: "MUI", type: "is Amazing" },
  ];

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name", width: 150 },
    { field: "type", headerName: "Type", width: 150 },
  ];

  return (
    <div className={style.container}>
      <h1>Pokémon List Micro Frontend</h1>
      <div className={style.pokemonCardContainer}>
        <DataGrid rows={rows} columns={columns} />
      </div>
    </div>
  );
};

export default PokemonList;
