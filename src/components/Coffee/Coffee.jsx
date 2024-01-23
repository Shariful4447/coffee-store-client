
import DeleteIcon from '@mui/icons-material/Delete';
import PreviewIcon from '@mui/icons-material/Preview';
import EditIcon from '@mui/icons-material/Edit';
const Coffee = ({coffee}) => {
    const {name, quatity, supplier, taste, category, details, image} = coffee;
    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl max-h-96">
                <figure className="max-w-64"><img src={image} alt="Movie"/></figure>
                <div className="flex">
                    <div className='p-4'>
                        <h2 className="card-title">{name}</h2>
                        <p>{details}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="join join-vertical space-y-4 p-4 mt-4">
                            <button className="btn join-item"><PreviewIcon></PreviewIcon></button>
                            <button className="btn join-item"><EditIcon></EditIcon></button>
                            <button className="btn join-item"><DeleteIcon></DeleteIcon></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Coffee;