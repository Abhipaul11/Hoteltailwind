import React from 'react';

function Modalbox({ isOpen, closeModal, title, content }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0  flex justify-center items-center z-[1000]">
            <div className="bg-white px-4 py-2 rounded-lg max-w-[500px] w-[90%] relative text-center">
                <h2 className="font-roboto text-xl font-semibold">{title}</h2>
                <p className="text-left mt-1 font-light leading-10" style={{ marginLeft: "10px" }}>
                    {content}
                </p>
                <button
                    onClick={closeModal}
                    className="absolute top-1 right-1 text-black text-[25px] hover:text-neutral-700"
                >
                    X
                </button>
            </div>
        </div>
    );
}

export default Modalbox;
