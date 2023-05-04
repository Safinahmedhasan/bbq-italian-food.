import React, { useState } from 'react';

 export const ToolTrip = ({text, children}) => {
    const [isVisible, setIsVisible] = useState(false)
    return (
        <div>
            <div onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            >
              {children} {isVisible && <div>{text}</div>} 
            
            </div>
        </div>
    );
};

export default ToolTrip;