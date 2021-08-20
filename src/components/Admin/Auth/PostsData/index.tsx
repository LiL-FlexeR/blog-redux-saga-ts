/*eslint-disable*/
import React from "react";
import { usePosts } from "../../../../hooks/usePosts";
import { DataGrid, GridColDef } from "@material-ui/data-grid";

const PostsData = () => {
  const { fetchData, data } = usePosts();

  const columns: GridColDef[] = [
    {
      field: "_id",
      headerName: "ID",
      width: 150,
      editable: true,
      flex: 0.5,
    },
    {
      field: "title",
      headerName: "Title",
      width: 150,
      flex: 0.5,
      editable: true,
    },
    {
      field: "description",
      headerName: "Description",
      width: 400,
      flex: 1,
      editable: true,
    },
  ];

  React.useEffect(() => {
    fetchData("/posts");
  }, []);

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

export default PostsData;
