import { useQuery } from "@tanstack/react-query";


const Newuser = () => {

    // const handleDelete = _id => {
    //     console.log(_id);
    //     Swal.fire({
    //         title: "Are you sure?",
    //         text: "You won't be able to revert this!",
    //         icon: "warning",
    //         showCancelButton: true,
    //         confirmButtonColor: "#3085d6",
    //         cancelButtonColor: "#d33",
    //         confirmButtonText: "Yes, delete it!"
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //         //   Swal.fire({
    //         //     title: "Deleted!",
    //         //     text: "Your file has been deleted.",
    //         //     icon: "success"
    //         //   });
    //         fetch (`http://localhost:3000/coffee/${_id}`,{
    //             method: "DELETE",
                
    //         })
    //             .then(res=>res.json())
    //             .then(data => {
    //                 console.log(data);
    //                 if(data.deletedCount >0){
    //                     Swal.fire(
    //                                 "Deleted!",
    //                                 "Your file has been deleted.",
    //                                 "success"
    //                          )
    //                 }
    //             })
            
    //         }
    //       });

    // }

    const {data:users} = useQuery({
        queryKey: ["users"],
        queryFn: async () =>{
            const res = await fetch('http://localhost:8000/user');
            return res.json();
        }
    })
    return (
        <div>
            <h2>With tanstack query: {users?.length}</h2>
        </div>
    );
};

export default Newuser;