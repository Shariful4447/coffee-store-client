import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2';




const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quatity, supplier, taste, category, details, image} = coffee;

    const handleUpdateCoffee = event => {
        event.preventDefault();
        const form = event.target;
        const name =form.name.value;
        const quatity =form.quatity.value;
        const supplier =form.supplier.value;
        const taste =form.taste.value;
        const category =form.category.value;
        const details =form.details.value;
        const image =form.image.value;
        const updateCoffee = {name, quatity, supplier, taste, category, details, image}
        console.log(updateCoffee);

        //send data to the server
        fetch (`http://localhost:3000/coffee/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'user Updated SuccessFully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
    }

    
    return (

        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl">update your coffee : ID: {_id}, Name: {name}</h2>

            <form onSubmit={handleUpdateCoffee} className="border-2">
                {/* row 1 */}
                <div className="p-5 flex gap-5">
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="cofee Name" className="input input-bordered w-full" />
                    </div>
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Quantity</span>
                        </label>
                        <input type="text" name="quatity" defaultValue={quatity} placeholder="Quantity" className="input input-bordered w-full" />
                    </div>


                </div>
                {/* row 2 */}
                <div className="p-5 flex gap-5">
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Supplier</span>
                        </label>
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" />
                    </div>
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Tastes</span>
                        </label>
                        <input type="text" name="taste" defaultValue={taste} placeholder="Tastes" className="input input-bordered w-full" />
                    </div>


                </div>

                {/* row 3 */}
                <div className="p-5 flex gap-5">
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Category</span>
                        </label>
                        <input type="text" name="category" defaultValue={category} placeholder="Category name" className="input input-bordered w-full" />
                    </div>
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Details</span>
                        </label>
                        <input type="text" name="details" defaultValue={details} placeholder="Details" className="input input-bordered w-full" />
                    </div>


                </div>

                <div className="p-5 mb-5">
                    <div className="">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Image Url</span>
                        </label>
                        <input type="text" name="image" defaultValue={image} placeholder="Image Url here" className="input input-bordered w-full" />
                    </div>



                </div>
                <input type="submit" value="Update your Coffee" className="btn btn-block mb-5" />
                
            </form>
        </div>
    );
};


export default UpdateCoffee;