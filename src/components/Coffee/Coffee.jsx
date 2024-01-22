
const Coffee = ({coffee}) => {
    const {name, quatity, supplier, taste, category, details, image} = coffee;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure className="max-w-96"><img src={image} alt="Movie"/></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{details}</p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Watch</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;