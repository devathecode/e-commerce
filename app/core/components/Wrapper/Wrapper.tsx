import React from 'react';

const Wrapper = ({children, classes}: any) => {
    return (
        <div className={`w-full max-w-[1280px] px-5 md:px-10 mx-auto ${classes || ''}`}>
            {children}
        </div>
    );
};

export default Wrapper;