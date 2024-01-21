

const AddCoffee = () => {
    return (
        <div className="bg-[#F4F3F0] p-24">
            <h2 className="text-3xl">Add your coffee</h2>

            <form className="border-2">
                {/* row 1 */}
                <div className="p-5 flex gap-5">
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="cofee Name" className="input input-bordered w-full" />
                    </div>
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Quantity</span>
                        </label>
                        <input type="text" name="quatity" placeholder="Quantity" className="input input-bordered w-full" />
                    </div>


                </div>
                {/* row 2 */}
                <div className="p-5 flex gap-5">
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Supplier</span>
                        </label>
                        <input type="text" name="supplier" placeholder="Supplier" className="input input-bordered w-full" />
                    </div>
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Tastes</span>
                        </label>
                        <input type="text" name="taste" placeholder="Tastes" className="input input-bordered w-full" />
                    </div>


                </div>

                {/* row 3 */}
                <div className="p-5 flex gap-5">
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Category name" className="input input-bordered w-full" />
                    </div>
                    <div className="md:w-1/2">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Details</span>
                        </label>
                        <input type="text" name="details" placeholder="Details" className="input input-bordered w-full" />
                    </div>


                </div>

                <div className="p-5 mb-5">
                    <div className="">
                        <label className="label">
                            <span className="label-text border bg-slate-300 m-2 p-2">Image Url</span>
                        </label>
                        <input type="text" name="image" placeholder="Image Url here" className="input input-bordered w-full" />
                    </div>



                </div>
                <input type="submit" value="Add Coffee" className="btn btn-block mb-5" />
            </form>
        </div>
    );
};

export default AddCoffee;