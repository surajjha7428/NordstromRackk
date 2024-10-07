import React from 'react';

function MadewellContainer() {
    return (
       
        <>
         <h1 style={{ textAlign: "center", fontSize: "30px", fontFamily: "sans-serif", fontWeight: "bolder", marginTop: "50px" }}>More to Know</h1>
        <div style={{ display: "flex", width: "100%", height: "326px", marginTop: "50px" }}>
           
           {/* Card 1 */}
           <div style={{ width: "400px", height: "500px", padding: "10px", }}>
               <div style={{  padding: "10px", }}>
                   <img 
                       style={{ width: "238px", height: "111px", margin: "0 auto", display: "block" }} 
                       src="https://n.nordstrommedia.com/it/9574e96f-0156-4175-aee0-75154d86b996.jpeg?h=188&w=402" 
                       alt="Get a $40 Bonus Note!" 
                   />
                   <p style={{ fontSize: "13px", fontFamily: "sans-serif", fontWeight: "bold", marginTop: "10px", textAlign: "center" }}>
                       Get a $40 Bonus Note!
                   </p>
                   <p style={{ fontSize: "13px", fontFamily: "sans-serif", fontWeight: "medium", marginTop: "5px", textAlign: "center" }}>
                       And shop the Nordstrom <br /> Anniversary Sale early as a new <br /> Nordstrom credit cardmember. <br /> Restrictions apply.
                   </p>
                   <a 
                       style={{ fontSize: "13px", fontFamily: "sans-serif",textDecoration:"underline", fontWeight: "medium", color: "#186adc", display: "block", textAlign: "center", marginTop: "10px" }} 
                       href="https://www.nordstromrack.com/creditcard/entry?cc=RA1023"
                   >
                       Apply Now
                   </a>
               </div>
           </div>
           {/* Card 2 */}
           <div style={{ width: "400px", height: "500px", padding: "10px", }}>
               <div style={{  padding: "10px", }}>
                   <img 
                       style={{ width: "238px", height: "111px", margin: "0 auto", display: "block" }} 
                       src="https://n.nordstrommedia.com/id/2961092c-5387-4c52-9c94-1379fe2ac7ec.jpeg?h=188&w=402" 
                       alt=" We Launched a Podcast!" 
                   />
                   <p style={{ fontSize: "14px",color:"black", fontFamily: "sans-serif", fontWeight: "bold", marginTop: "10px", textAlign: "center" }}>
                   We Launched a Podcast!
                   </p>
                   <p style={{ fontSize: "13px", fontFamily: "sans-serif", fontWeight: "medium", marginTop: "5px", textAlign: "center" }}>Join Pete Nordstrom and special <br /> guests for a behind-the-scenes <br /> look at Nordstrom. </p>
                   <a style={{ fontSize: "13px", fontFamily: "sans-serif", fontWeight: "medium",textDecoration:"underline", color: "#186adc", display: "block", textAlign: "center", marginTop: "10px" }} href="https://www.nordstromrack.com/promo/nordy-podcast#anchor-link-listen"> Listen to All Episodes</a>
               </div>
           </div>
           {/* Card 3 */}
           <div style={{ width: "400px", height: "500px", padding: "10px", }}>
               <div style={{  padding: "10px", }}>
                   <img 
                       style={{ width: "238px", height: "111px", margin: "0 auto", display: "block" }} 
                       src="https://n.nordstrommedia.com/id/85d3dc83-dfea-418b-8e3c-061e1b4909d1.jpeg?h=188&w=402" 
                       alt="Wide Leg Pants" 
                   />
                   <p style={{ fontSize: "14px", fontFamily: "sans-serif", fontWeight: "bold", marginTop: "10px", textAlign: "center" }}>
                   Download Our App
                   </p>
                   <p style={{ fontSize: "13px", fontFamily: "sans-serif", fontWeight: "medium", marginTop: "5px", textAlign: "center" }}>Get notifications right away for <br /> markdowns on your Wish List, <br /> deals and more!</p>
                   <div style={{ display: "flex", justifyContent: "center",gap:"10px" }}>
                   <a style={{ fontSize: "13px", fontFamily: "sans-serif", fontWeight: "medium", textDecoration:"underline", color: "#186adc", display: "block", textAlign: "center", marginTop: "10px" }} href="https://apps.apple.com/app/apple-store/id853330019">App Store</a>
                   <a style={{ fontSize: "13px", fontFamily: "sans-serif", fontWeight: "medium", color: "#186adc",textDecoration:"underline", display: "block", textAlign: "center", marginTop: "10px" }} href="https://play.google.com/store/apps/details?id=com.nordstrom.rack.app">Google Play</a>
                   </div>
               </div>
           </div>
           {/* Card 4 */}
           <div style={{ width: "400px", height: "500px", padding: "10px", }}>
               <div style={{  padding: "10px", }}>
                   <img 
                       style={{ width: "238px", height: "111px", margin: "0 auto", display: "block" }} 
                       src="https://n.nordstrommedia.com/it/744335a3-85de-441a-8428-eab4174dfe2c.jpeg?h=188&w=402" 
                       alt="Mens Polos" 
                   />
                   <p style={{ fontSize: "14px", fontFamily: "sans-serif", fontWeight: "bold", marginTop: "10px", textAlign: "center" }}>
                   Celebrating Pride
                   </p>

                   <p style={{ fontSize: "13px", fontFamily: "sans-serif", fontWeight: "medium", marginTop: "5px", textAlign: "center" }}>Join us as we stand with, <br /> celebrate and support the <br /> LGBTQIA+ community.</p>
                   <a style={{ fontSize: "13px", fontFamily: "sans-serif", fontWeight: "medium", textDecoration:"underline", color: "#186adc", display: "block", textAlign: "center", marginTop: "10px" }} href="https://www.nordstromrack.com/promo/diversity-at-nordstrom">Learn More</a>
               </div>
           </div>
       </div>
        </>
    );
}

export default MadewellContainer;
