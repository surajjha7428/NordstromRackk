import React from 'react';

function Email() {
    return (
        <div style={{ position: 'relative', width: '100%', height: '106px' }}>
            <img
                style={{ width: '100%', height: '106px',marginTop:"120px" }}
                src="https://n.nordstrommedia.com/id/9124cf9a-7133-4e76-85dc-d7052869884a.png?h=179&w=1608"
                alt="image"
            />
            <a
                href="https://www.nordstromrack.com/my-account/marketing-email-opt-in/"
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '106px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textDecoration: 'none',
                    color: '#186adc',
                    fontSize: '16px',
                    fontWeight: 'bold',
                    opacity: '0',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    transition: 'opacity 0.3s ease',
                }}
            >
                Click Here to Subscribe
            </a>
        </div>
    );
}

export default Email;
