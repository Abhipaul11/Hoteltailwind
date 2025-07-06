import React from 'react';

function Layout({ children }) {
    return (
        <div style={{ position: 'relative', minHeight: '100vh' }}>
            <div className="fixed right-5 bottom-1 translate-y-[-50%] z-[1000]">
                <a href="https://wa.me/918240913778" target="_blank" rel="noopener noreferrer">
                    <img src="/images/whatsapp.webp" alt="WhatsApp" className='w-[50px] h-[50px] cursor-pointer mb-1' />
                </a>
                <a href="tel:+918240913778">
                    <img src="/images/call.png" alt="Phone" className='w-[50px] h-[50px] cursor-pointer ' />
                </a>
            </div>

            {children}
        </div>
    );
};

export default Layout;