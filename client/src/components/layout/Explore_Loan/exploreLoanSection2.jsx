import React from 'react';


const ExploreLoanSection2 = () => {

     const Roll =[{img:'pages8.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages1.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages2.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages3.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages4.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages5.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages6.jpg', price:'#800,000',tag:'RETAIL', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'},{img:'pages7.jpg', price:'#800,000',tag:'AGRICULTURE', interest:'interest :',interest2:'50% APY', header:'For identity photo studio'}]


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

export default ExploreLoanSection2;
