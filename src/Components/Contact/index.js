import React from "react";
const Contact=()=>{
 return(
<>
<Contactcontainer>
<Contacth1>Contact Us</Contacth1>
<Contactwrapper>
<Col lg='7'className="d-flex align-itema-center">

    <form className="contact__form w-100">
        <Row>
            <Col lg='6'className="form-group">
                <input
                className="form-control"
                id="name"
                />
            </Col>
        </Row>
    </form>
</Col>


</Contactwrapper>

</Contactcontainer>



</>

 )
}