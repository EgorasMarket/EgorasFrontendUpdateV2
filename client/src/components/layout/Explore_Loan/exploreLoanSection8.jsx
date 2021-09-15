import React from 'react';


const ExploreLoanSection8 = () => {

     const Roll =[{img:'farmyard.png', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'cattle.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'reimg.png', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'farmyard.png', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'cattle.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'cattle.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'cattle.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'}]


    return (
        <div>
            <div className="section2DivHolder_img">
                  { Roll.map((bag) =>(
                <div className="exploreLoanSection2">
                    <img src={bag.img}  alt=""  className="farmyardImg"/>
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

export default ExploreLoanSection8;
