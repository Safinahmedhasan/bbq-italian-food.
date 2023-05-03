import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';


const Favorite = () => {


    const [isFavorite, setIsFavorite] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(true);
        toast.success('Added To Favorite ❤️')
    };


    return (
        <div>
            <div>
                <button onClick={handleFavoriteClick} disabled={isFavorite}>
                    {isFavorite ? <button className="btn btn-info text-white">❤️ Added To Favorite</button> : <button className="btn btn-warning ">🤍 Favorite</button>}
                </button>
            </div>
            <Toaster />
        </div>
    );
};

export default Favorite;