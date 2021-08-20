import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { RootState } from "../../types/hooks";
import Unauth from "./Unauth";

const Admin = () => {
  const admin: any = useSelector((state: RootState) => state.currentUser);
  return admin._id ? <Redirect to={`/admin/${admin._id}`} /> : <Unauth />;
};

export default Admin;
