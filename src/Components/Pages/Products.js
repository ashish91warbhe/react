import React from 'react';
const imgw = {
    display: "flex",
    width: "100%",
    height: "500px"
}
function Products() {

    return (
        <div>
            <div className='container text-center bg-light'>
                <h2><u>Manufacture Products</u></h2>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-4  mt-4 shadow p-2 mb-2 bg-body' ><img src='./image1.jpg' style={imgw} /></div>
                        <div className='col-md-4 mt-4 shadow p-2 mb-2 bg-body'><img src='./image2.jpg' style={imgw} /></div>
                        <div className='col-md-4 mt-4 shadow p-2 mb-2 bg-body'><img src='./image3.jpg' style={imgw} /> </div>
                    </div>
                </div>
                <div className='container text-center'>
                    <h2><u>Other Compony Products</u></h2>

                    <div className='for-pdf'>
                        <h6>-: pdf product list :-</h6>
                        <a target="_blank" href="warbhe pharma product list.pdf"><img src='./PDF.png' style={{ height: "50px" }} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Products;