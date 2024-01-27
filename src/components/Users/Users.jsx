import { useLoaderData } from "react-router-dom";
import DataTable from "../dataTable/DataTable";


const Users = () => {

    const users = useLoaderData();
    return (
        <div>
            <h2>all user :  {users.length}</h2>
            <DataTable></DataTable>
        {/* {
          users.map(user => <DataTable key={user._id} user={user}></DataTable>)
        } */}
        </div>
    );
};

export default Users;