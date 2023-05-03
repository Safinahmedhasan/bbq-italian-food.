import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';


const Favorite = () => {


    const [isFavorite, setIsFavorite] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(true);
        setShowToast(true);
        toast.success('Added To Favorite ❤️')
    };


    return (
        <div>
            <div>
                <button onClick={handleFavoriteClick} disabled={isFavorite}>
                    {isFavorite ? 'Favorite' : 'Add to Favorites'}
                </button>
                {showToast && (
                    <div className="toast">
                        Recipe added to favorites!
                    </div>
                )}
            </div>
            <Toaster />
        </div>
    );
};

export default Favorite;