/*eslint-disable*/
import React from "react";
import { useUsers } from "../../../../hooks/useUsers";
import { DataGrid, GridColDef } from "@material-ui/data-grid";

const UsersData = () => {
  const { data, fetchData } = useUsers();

  React.useEffect(() => {
    fetchData("/users");
  }, []);

  const columns: GridColDef[] = [
    {
      field: "_id",
      headerName: "ID",
      width: 150,
      editable: true,
      flex: 0.5,
    },
    {
      field: "email",
      headerName: "Email",
      width: 150,
      editable: true,
      flex: 0.5,
    },
    {
      field: "name",
      headerName: "First name",
      width: 150,
      editable: true,
      flex: 1,
    },
  ];

  return (
    <div>
      {data ? (
        <DataGrid
          rows={data}
          getRowId={(row) => row._id}
          columns={columns}
          autoPageSize
          disableSelectionOnClick
          style={{
            height: "50vh",
            width: "80%",
            margin: "0 auto",
            marginTop: "5vh",
          }}
        />
      ) : null}
    </div>
  );
};

export default UsersData;
