import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter, FaDownload } from 'react-icons/fa';
import './Footer.css'; // Make sure to create this CSS file

function Footer() {
    const customerServiceLinks = [
        "Order Status",
        "Guest Returns",
        "Shipping & Return Policy",
        "Gift Cards",
        "Product Recalls",
        "FAQ",
        "Contact Us"
    ];

    const aboutUsLinks = [
        "About Our Brand",
        "The Nordy Club",
        "Store Locator",
        "All Brands",
        "Careers",
        "Get Email Updates",
        "Nordstrom Blog",
        "Nordy Podcast",
        "Store Openings"
    ];

    const communityLinks = [
        "Nordstrom Rack & The Community",
        "Corporate Social Responsibility",
        "Diversity, Equity, Inclusion & Belonging",
        "Big Brothers Big Sisters",
        "Donate Clothes"
    ];

    const nordstromCardLinks = [
        "Apply for a Nordstrom Card",
        "Pay My Bill",
        "Manage my Nordstrom Card"
    ];

    const nordstromIncLinks = [
        "Nordstrom",
        "HauteLook",
        "Investor Relations",
        "Press Releases",
        "Nordstrom Media Network"
    ];

    const legalLinks = [
        "Top",
        "Privacy",
        "Your Privacy Rights",
        "Terms & Conditions",
        "California Supply Chain Act",
        "©2024 Nordstrom Rack"
    ];

    return (
        <div style={{ width: "100%", backgroundColor: "#F0F3F5", padding: "20px", display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginBottom: "20px" }}>
                <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
                    <h3 style={{ fontWeight: "bolder", color: "black" }}>Customer Service</h3>
                    {customerServiceLinks.map(link => <div key={link} className="footer-link">{link}</div>)}
                </div>
                <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
                    <h3 style={{ fontWeight: "bolder", color: "black" }}>About Us</h3>
                    {aboutUsLinks.map(link => <div key={link} className="footer-link">{link}</div>)}
                </div>
                <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
                    <h3 style={{ fontWeight: "bolder", color: "black" }}>Nordstrom Rack & The Community</h3>
                    {communityLinks.map(link => <div key={link} className="footer-link">{link}</div>)}
                </div>
                <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
                    <h3 style={{ fontWeight: "bolder", color: "black" }}>Nordstrom Card</h3>
                    {nordstromCardLinks.map(link => <div key={link} className="footer-link">{link}</div>)}
                </div>
                <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
                    <h3 style={{ fontWeight: "bolder", color: "black" }}>Nordstrom, Inc.</h3>
                    {nordstromIncLinks.map(link => <div key={link} className="footer-link">{link}</div>)}
                </div>
                <div style={{ flex: "1 1 200px", marginBottom: "20px" }}>
                    <div style={{ display: "flex", gap:"10px"}}>
                        <FaDownload style={{ fontSize: "24px", marginBottom: "10px" }} />
                        <h3 style={{ fontWeight: "lighter", color: "black" }}>Download Our Apps</h3> 
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
                        <div style={{ display: "flex", marginTop: "10px" }}>
                            <a href="https://facebook.com/NordstromRack" className="footer-link"><FaFacebook style={{ fontSize: "24px", margin: "5px", color: "black" }} /></a>
                            <a href="https://instagram.com/nordstromrack" className="footer-link"><FaInstagram style={{ fontSize: "24px", margin: "5px", color: "black" }} /></a>
                            <a href="https://pinterest.com/nordstromrack" className="footer-link"><FaPinterest style={{ fontSize: "24px", margin: "5px", color: "black" }} /></a>
                            <a href="https://twitter.com/nordstromrack" className="footer-link"><FaTwitter style={{ fontSize: "24px", margin: "5px", color: "black" }} /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", marginTop: "20px", textAlign: "center", justifyContent:"flex-start", gap:"30px" }}>
                {legalLinks.map(link => <div key={link} className="footer-link">{link}</div>)}
            </div>
        </div>
    );
}

export default Footer;
