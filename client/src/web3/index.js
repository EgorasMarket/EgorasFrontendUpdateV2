import { Contract } from '@ethersproject/contracts'
import loanABI  from "./contracts/Loan.json";
import erc20  from "./contracts/erc20.json";


  const contractInstance = (signer) => {
    return new Contract(loanABI.address, loanABI.abi, signer);
  };
  
  const erc20Instance = (signer) => {
    return new Contract(erc20.address, erc20.abi, signer);
  };

  const approveCompany = async (address, signer) =>{
    try {
      const instance = contractInstance(signer);
      let result = await instance.approveLoanCompany(address);
      return {
        message: result.hash,
      status: true,
      }
     } catch (error) {
       console.log(error);
      return {
        message: error,
        status: false,
      };
     }
  }


  const voteInCompany = async (company, type, votingPower, signer) => {
    try {
      const instance = contractInstance(signer);
      let result = await instance.voteinCompany(company, votingPower, type);
      return {
        message: result.hash,
      status: true,
      }
     } catch (error) {
      return {
        message: error,
        status: false,
      };
     }
  }

const systemInfo = async (signer) =>{
  const instance = contractInstance(signer);
  let result = await instance.systemInfo();
  console.log(result);

}
const loanInfo = async (loanID, signer) =>{
  try{
    const instance = contractInstance(signer);
    let result = await instance.getLoanInfo(loanID);
    return {
     
    status: result,
    }
  }catch(err){
    console.log(err);

  }
}
const claimable = async (signer) =>{
  try {
  const instance = contractInstance(signer);
    let result = await instance.claimable();
    return {
     
    status: result,
    }
  }catch (error) {
    return {
          status: false,
    };
    
}
}


const distributeFee = async (signer) =>{
  try {
    const instance = contractInstance(signer);
    let result = await instance.distributeFee();
    return {
      message: result.hash,
    status: true,
    }
   } catch (error) {
    return {
      message: error,
      status: false,
    };
   }
}


const rewardHoldersByVotePower = async (signer) =>{
  try {
    const instance = contractInstance(signer);
    let result = await instance.rewardHoldersByVotePower();
    return {
      message: result.hash,
    status: true,
    }
   } catch (error) {
    return {
      message: error,
      status: false,
    };
   }
}
const transactReceipt = async (hash, library) =>{
  try {
    let result = await library.getTransactionReceipt(hash);
    return {
      message: result,
    status: true,
    }
  } catch (error) {
    return {
      message: error,
      status: false,
    };
  }
  
}
const payLoan = async (loanID, amount, signer) => {
  try {
    const instance = contractInstance(signer);
    let result = await instance.repayLoan(loanID, amount);
    return {
      message: result.hash,
    status: true,
    }
  } catch (error) {
    return {
      message: error,
      status: false,
    }
  }
}

const activateLoan = async (loanID, signer) => {
  try {
    const instance = contractInstance(signer);
    let result = await instance.approveLoan(loanID);
    return {
      message: result.hash,
    status: true,
    }
  } catch (error) {
    return {
      message: error,
      status: false,
    }
  }
}

  const acceptLoan = async (loanID, type, votingPower, signer) => {
    try {
      const instance = contractInstance(signer);
      let result = await instance.vote(loanID, votingPower, type);
      return {
        message: result.hash,
      status: true,
      }
     } catch (error) {
      return {
        message: error,
        status: false,
      };
     }
  }
  const checkAllowance = async (owner, amount, signer) =>{
    try {
      const instance = erc20Instance(signer);
      let result = await instance.allowance(owner, loanABI.address);
    console.log(result);
      if (parseFloat(result.toString()) >= parseFloat(amount.toString())) {
        return {
        status: true,
        }
      }else{
        return {
          status: false,
          }
      }
     
    } catch (error) {
      return {
        status: false,
        }
    }
  }
  const unluckToken = async(amount, signer) => {
    try {
      const instance = erc20Instance(signer);
      let result = await instance.approve(loanABI.address, amount);
      return {
        message: result.hash,
      status: true,
      }
    } catch (error) {
      console.log(error);
      return {
        message: error,
        status: false,
      };
    }
  }
  
  

  const addUploader = async ( address, reward_address, signer) =>{

    try {
      const instance = contractInstance(signer);
      let result = await instance.addUploader(
        address, reward_address);
      return {
        message: result.hash,
      status: true,
      }
     } catch (error) {
       console.log(error);
      return {
        message: error,
        status: false,
      };
     }
  }
  const creatLoan = async ( amount, title, length, image_url, category, story, branch_name, signer) =>{

    try {
      const instance = contractInstance(signer);
      let result = await instance.applyForLoan(
        title,
        story,
        branch_name,
        category,
        amount,length, image_url);
      return {
        message: result.hash,
      status: true,
      }
     } catch (error) {
       console.log(error);
      return {
        message: error,
        status: false,
      };
     }
  }
  const getSystemConfig = async (signer) => {
   try {
    const instance = contractInstance(signer);
    let result = await instance.systemInfo();
    return {
      requestpower: result._requestpower,
      loanFee: result._loanFee,
      totalIncentive: result._totalIncentive,
      weeklyIncentive: result._weeklyIncentive,
      treasuryCut: result._treasuryCut,
      nextClaimDate: result._nextClaimDate,
      status: true
      }
   } catch (error) {
     console.log(error);
    return {
      status: false,
    }
   }
  }
   const registerCompany = async (companyName, signer) => {
   try {
    const instance = contractInstance(signer);
    let result = await instance.registerLoanCompany(companyName);
  
      return {
      message: result.hash,
      status: true,
      }
    
   } catch (error) {
    return {
      message: error,
      status: false,
    };
   }
    
   
   }
   const confirmLoan = async (loanID,signer) =>{
     console.log(loanID, signer);
    try {
      const instance = contractInstance(signer);
      let result = await instance.confirmLoan(loanID);
    
        return {
        message: result.hash,
        status: true,
        }
      
     } catch (error) {
      return {
        message: error,
        status: false,
      };
     }
   }
  const makeRequest = async (requestType,value, reason, withdrawEGR, signer) => {
    try {
     const instance = contractInstance(signer);
     let result = await instance.createRequest(requestType,value, reason, withdrawEGR);
   
       return {
       message: result.hash,
       status: true,
       }
     
    } catch (error) {
     return {
       message: error,
       status: false,
     };
    }
     
    
    }

    const voteRequest = async (requestType, requestID, votePower, accept, signer) => {
      try {
       const instance = contractInstance(signer);
       let result = await instance.governanceVote(requestType, requestID, votePower, accept);
       
         return {
         message: result.hash,
         status: true,
         }
       
      } catch (error) {
       return {
         message: error,
         status: false,
       };
      }
       
      
      }

      const initiateRequest = async (requestID, signer) => {
        try {
         const instance = contractInstance(signer);
         let result = await instance.validateRequest(requestID);
         
           return {
           message: result.hash,
           status: true,
           }
         
        } catch (error) {
         return {
           message: error,
           status: false,
         };
        }
         
        
        }

   export {
    voteInCompany,
    registerCompany,
    creatLoan,
    approveCompany,
    acceptLoan,
    unluckToken,
    checkAllowance,
    transactReceipt,
    activateLoan,
    makeRequest,
    voteRequest,
    initiateRequest,
    payLoan,
    getSystemConfig,
    rewardHoldersByVotePower,
    claimable,
    addUploader,
    confirmLoan,
    loanInfo
    
   };