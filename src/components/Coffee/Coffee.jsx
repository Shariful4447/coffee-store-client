
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import EditIcon from '@mui/icons-material/Edit';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
const Coffee = ({coffee}) => {
    const {_id, name, quatity, supplier, taste, category, details, image} = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
            //   Swal.fire({
            //     title: "Deleted!",
            //     text: "Your file has been deleted.",
            //     icon: "success"
            //   });
            fetch (`http://localhost:3000/coffee/${_id}`,{
                method: "DELETE",
                
            })
                .then(res=>res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount >0){
                        Swal.fire(
                                    "Deleted!",
                                    "Your file has been deleted.",
                                    "success"
                             )
                    }
                })
            
            }
          });

    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl max-h-64">
                <figure className="max-w-64 max-h-64"><img src={image} alt="Movie"/></figure>
                <div className="flex">
                    <div className='p-4'>
                        <h2 className="card-title"> Name : {name}</h2>
                        <p>Description : {details}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-4 p-4 mt-4 ">
                            <button className="btn join-item"><PreviewIcon></PreviewIcon></button>
                            <Link to ={`updateCoffee/${_id}`}>
                            <button className="btn join-item"><EditIcon></EditIcon></button>
                            </Link>
                            <button 
                            onClick={() =>handleDelete(_id)}
                             className="btn join-item bg-orange-500"><DeleteIcon></DeleteIcon></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;