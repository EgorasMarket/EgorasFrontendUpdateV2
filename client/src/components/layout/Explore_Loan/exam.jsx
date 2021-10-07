import React from 'react';
import './exam.css';
import NumberFormat from 'react-number-format';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { fetch} from "../../../actions/loans";


const Exam = ({loans, fetch}) => {

    const [loanData, setLoanData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

 useEffect(() => {
        if (loans.length == 0 && typeof loans.data == "undefined") {
          fetch(100);
        }
    
        if (typeof loans.data !== "undefined" && loans.data.length > 0) {
            setIsLoading(false);
            setLoanData(loans.data);
    
            console.log(loans.data);
        }
    
       
      }, [loans]);

      

    return (
        <div>
            <div className="relax">
                <div className=""> </div>
                <p className=""></p>
                <p className=""></p>
                <p className=""></p>
            </div>
            
        </div>
    )
}

export default Exam;
