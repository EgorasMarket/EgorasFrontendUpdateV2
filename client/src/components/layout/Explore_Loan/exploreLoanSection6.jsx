import React from 'react';


const ExploreLoanSection2 = () => {

     const Roll =[{img:'pages3.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages10.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages11.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages13.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages2.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages10.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'}]


    return (
        <div>
            <div className="section2DivHolder_img">
                  { Roll.map((bag) =>(
                <div className="exploreLoanSection2">
                     <div className="DivIMG"  style={{ backgroundImage: `url(${bag.img})` }}></div>
                    {/* <img src={bag.img}  alt=""  className="farmyardImg"/> */}
                    <p className="retailButton">{bag.tag}</p>
                    <div className="pTag">{bag.price}</div>
                    <div className="forIdentity">{bag.header}</div>
                    <div><span className="interestSpan">{bag.interest}</span> <span  className="percentageSpan">{bag.interest2}</span></div>
                </div>
                )) }
            </div>
            
        </div>
    )
}

export default ExploreLoanSection2;
