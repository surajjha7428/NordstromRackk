import React from 'react';

function Signin() {
    return (
        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "180px", width: "100%", height: "106px", alignItems: "center" }}>
            <p style={{ fontSize: "18px", fontFamily: "sans-serif", marginRight: "20px", fontWeight: "bolder", marginTop: "0" }}>
                Get Email <br /> updates:
            </p>
            <div style={{ display: "flex", alignItems: "center", marginRight: "20px" }}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                        padding: "10px",
                        borderRadius: "4px",
                        border: "1px solid #ccc",
                        marginRight: "10px",
                        fontSize: "16px",
                        width: "185px",
                        height: "40px"
                    }}
                />
                <button
                    style={{
                        backgroundColor: "#186adc",
                        color: "white",
                        border: "none",
                        padding: "10px 20px",
                        fontSize: "16px",
                        cursor: "pointer",
                        width:"185px",
                        height:"40px"
                    }}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
}

export default Signin;
