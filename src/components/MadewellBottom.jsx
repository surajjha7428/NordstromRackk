function MadewellContainer() {
    return (
       <div style={{display:"flex",gap:"15px",width:"100%",height:"226px",marginTop:"50px"}}>
         <div style={{width:"238px",height:"224px"}}>
            <div style={{width:"150px" , height:"170px",marginTop:"50px",marginLeft:"50px"}}>
            <p><span style={{fontSize:"25px",fontFamily:"sans-serif" ,fontWeight:"bold"}}>These,<br />please <br /></span> <span style={{fontSize:"13px",fontFamily:"sans-serif" ,fontWeight:"medium"}}>The pieces you <br /> can't stop thinking <br /> about—all in one <br /> place.</span></p>
            </div>
        </div>
        {/* card-2 */}
        <div  style={{width:"238px",height:"226px",marginLeft:"50px"}}>
            <img  src="https://n.nordstrommedia.com/it/f1b65a5c-3bda-4a79-9ef0-8c45377c3834.jpeg?h=382&w=402" alt="card-2" />
            <p style={{fontSize:"14px", fontFamily:"sans-serif",fontWeight:"medium",marginTop:"5px",padding:"1px 0px ",textDecoration:"underline"}}>Womens Cropped Denim</p>
        </div>

        {/* card-3 */}

        <div  style={{width:"238px",height:"226px",marginLeft:"50px"}}>
           <img  src="https://n.nordstrommedia.com/it/8f6ade3c-30c4-4d29-ba57-15764edac13d.jpeg?h=382&w=402" alt="card-3" />
           <p style={{fontSize:"14px", fontFamily:"sans-serif",fontWeight:"medium",marginTop:"5px",padding:"1px 0px ",textDecoration:"underline"}}>Wide Leg Pants</p>
        </div>

        {/* card-4 */}

        <div  style={{width:"238px",height:"226px",marginLeft:"50px"}}>
           <img src="https://n.nordstrommedia.com/it/8bb85333-4a99-464f-8861-a5aff0d95424.jpeg?h=382&w=402" alt="card-4" />
           <p style={{fontSize:"14px", fontFamily:"sans-serif",fontWeight:"medium",marginTop:"5px",padding:"1px 0px ",textDecoration:"underline"}}>Mens Polos</p>
        </div>
       </div>
    );
}

export default MadewellContainer;