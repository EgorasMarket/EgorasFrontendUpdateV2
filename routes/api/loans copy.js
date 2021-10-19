const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");

const jwt = require("jsonwebtoken");
const config = require("config");
const imgur = require("imgur");
const Companies = require("../../models/Companies");
const Directors = require("../../models/Directors");
const Requests = require("../../models/Requests");
const Loans = require("../../models/V2");
const Blocks = require("../../models/Blocks");
const Stats = require("../../models/Stats");
const Voters = require("../../models/Voters");
const Op = require("sequelize").Op;
const db = require("../../database/connection");
const { check, validationResult } = require("express-validator");
const sequelize = require("sequelize");
var cron = require("node-cron");
var fs = require("fs");
var Web3 = require("web3");
const New_Loans = require("../../models/V2");
var infura = "https://mainnet.infura.io/v3/9d829b0bd9654959af7001c81f6da717";
var bscTestNet = "https://data-seed-prebsc-2-s1.binance.org:8545";
var bscMainNet = "https://bsc-dataseed.binance.org/";
var bscMainNet2 = "https://bsc-dataseed1.defibit.io/";

// var wss = "wss://rinkeby.infura.io/v3/049318b8624a4fb19c70fb853d1a620e";
//var infura = "https://rinkeby.infura.io/v3/9d829b0bd9654959af7001c81f6da717";
var web3 = new Web3(bscMainNet);


// var task = cron.schedule("* * * * *",  () =>  {
 
//  try {
//   Loans.update({
//     isActiveVotingPeriod: true,                
//     }, {
//       where: {
//         countDown:{
//         [Op.lte]: new Date()
//       }
//       }
//     }).then((res) => {
//       console.log(res);
//     })

// //UPDATE `companies` SET `isActiveVotingPeriod`= 1 WHERE NOW() >= ``

//  Blocks.findOne({
//     order: [
//       ['id', 'DESC']
//     ]
//   }).then((data) =>{
//     let blockNo = 0;
//     if (data) {
//       blockNo = data.dataValues.block_no;
//     }
//     var egoras = JSON.parse(
//       fs.readFileSync(__dirname + "/abi/loan.json", "utf8")
//     );

//     var contract = new web3.eth.Contract(egoras.abi, egoras.address);

    

//      //contract.getPastEvents("LoanCreated", {fromBlock: 0}, function(err, events){console.log(events)});
     
//     contract
//       .getPastEvents("allEvents", {
//         fromBlock: blockNo + 1,
//         toBlock: (blockNo + 5000)

//       })
//       .then(function (events) {
       
//        if(events.length > 0){
//         events.forEach(function (event) {
//           switch (event.event) {
//             case "RequestCreated":
//               let changeto = 0;
//               if(event.returnValues._requestType == 0){
//                 changeto = event.returnValues._changeTo;

//               }else{
//                 changeto = web3.utils.fromWei(event.returnValues._changeTo.toString())
//               }
//               Requests.findOne({ where: {requestID: event.returnValues._requestID} })
//         .then(function(obj) {
//             // update
//             if(obj)
//                 return obj.update({
//                 reason: event.returnValues._reason,
//                 requestID: event.returnValues._requestID, 
//                 changeTo: changeto, requestType: event.returnValues._requestType, 
//                 creator: event.returnValues._creator, transaction_hash: event.transactionHash, 
//                 isApproved: 0, isActiveVotingPeriod: 0, validated: 0,
//                 declined: 0, accepted: 0, countDown: new Date(event.returnValues._votingPeriod * 1000)
//                 } ).then((res) => {
//                   Blocks.create({block_no: event.blockNumber})
//                   console.log(res);
//                 })
//             // insert
//             return Requests.create(
//               {
//                 reason: event.returnValues._reason,
//                 requestID: event.returnValues._requestID, 
//                 changeTo: changeto, requestType: event.returnValues._requestType, 
//                 creator: event.returnValues._creator, transaction_hash: event.transactionHash, 
//                 isApproved: 0, isActiveVotingPeriod: 0, validated: 0,
//                 declined: 0, accepted: 0, countDown: new Date(event.returnValues._votingPeriod * 1000)
//                 }
//             ).then((res) => {
//               Blocks.create({block_no: event.blockNumber})
//               console.log(res);
//             })
//         })
              
//               break;
//             case "ApproveLoan":
//               Loans.update({
//                 validated: true,
//                 is_approved: event.returnValues.state
                                
//                 }, {
//                   where: {
//                     loanID: event.returnValues._loanID
//                   }
//                 }).then((res) => {
//                   Blocks.create({block_no: event.blockNumber})
//                   console.log(res);
//                 })

//               break;
//             case "CompanyApproved":
//               Companies.findOne({
//                 where: {
//                   address: event.returnValues.companyAddress
//                 },
//                 order: [
//                   ['id', 'DESC']
//                 ]
//               }).then((data) =>{
//                Companies.update({
//                 validated: true,
//                 isApproved: event.returnValues.state
                 
                  
//                 }, {
//                   where: {
//                     id: data.dataValues.id
//                   }
//                 }).then((res) => {
//                   Blocks.create({block_no: event.blockNumber})
//                   console.log(res);
//                 })
  
  
              
//               });
//               break;
//             case "VotedForRequest":
//               Requests.update({
//                 accepted: web3.utils.fromWei(event.returnValues._positiveVote.toString()),
//                 declined: web3.utils.fromWei(event.returnValues._negativeVote.toString())
                 
                  
//                 }, {
//                   where: {
//                     requestID: event.returnValues._requestID
//                   }
//                 }).then((res) => {
//                   Voters.create({
//                     tracker: event.returnValues._requestID,
//                     address: event.returnValues._voter,
//                     transaction_hash: event.transactionHash,
//                     type: event.returnValues._accept,
//                     which: "request"
//                   }).then((data) =>{
//                     Blocks.create({block_no: event.blockNumber})
//                   })
                  
//                 })
//               break;
          
//             case "Confirmed":
//               Loans.findOne({
//                 where: {
//                   loanID: event.returnValues._loanID
//                 },
//                 order: [
//                   ['id', 'DESC']
//                 ]
//               }).then((data) =>{
//                 Loans.update({
//                   votingThreshold: web3.utils.fromWei(event.returnValues._votingThreshold.toString()),
//                   is_display: true,
//                   isConfirmed: true
//                 }, {
//                   where: {
//                     id: data.dataValues.id
//                   }
//                 }).then((res) => {
//                   Blocks.create({block_no: event.blockNumber})
//                   console.log(res);
//                 })


              
//               });
            
//               break;
          
//             case "LoanCreated":
            
//               let meta = JSON.parse(event.returnValues._metadata);
              
//               console.log(meta);
//                Loans.create(
//                  {
//                   loanID: event.returnValues.newLoanID,
//                   loan_duration: meta.loan_duration,
//                   category: meta.loan_category,
//                   branch_name: meta.branch_name,
//                   story: meta.story,
//                   title: event.returnValues._title,
//                   cover_image: event.returnValues._image_url,
//                   other_images: meta.arrayImg.toString(),
//                   due_date: new Date(event.returnValues._length * 1000),
//                   backed: 0,
//                   isLoan: event.returnValues._isLoan,
//                   creator: event.returnValues._creator,
//                   transaction_hash: event.transactionHash,
//                   is_approved: false,
//                   loan_amount: web3.utils.fromWei(event.returnValues._amount.toString()),
//                   inventry_fee: web3.utils.fromWei(event.returnValues._inventoryFee.toString()),
//                   isConfirmed: event.returnValues._isConfirmed
//                  }
            
//                 ).then((res) => {
//                   Blocks.create({block_no: event.blockNumber})
//                   console.log(res);
//                 })
                
//               break;

//               case "Voted":
//               console.log(event);
//               Loans.update({
//                 backed: web3.utils.fromWei(event.returnValues._totalBackedAmount.toString()),
               
                 
                  
//                 }, {
//                   where: {
//                     loanID: event.returnValues.loanID
//                   }
//                 }).then((res) => {
//                   Voters.create({
//                     tracker: event.returnValues.loanID,
//                     address: event.returnValues.voter,
//                     transaction_hash: event.transactionHash,
//                     type: 1,
//                     which: "loan"
//                   }).then((data) =>{
//                     Blocks.create({block_no: event.blockNumber})
//                   })
//                 })
//                break;
             
               
//             default:
              
//               Blocks.create({block_no: event.blockNumber})
//               break;
//           }
          
//         });
//        }else {
//         web3.eth.getBlockNumber().then((blockN) => {
//           blockNumber = 0;
//           if((blockNo + 5000) > blockN){
//             blockNumber = blockN;
//             Blocks.create({block_no: blockNumber})
//           }else{
//             blockNumber = (blockNo + 5000)
//             Blocks.create({block_no: blockNumber})
//           }
         
//         })


       
        
//        }
//         // end of lop
        
//         // let data = await Product.decrement({quantity: qty}, { where: { id, quantity: {
//         //   [Op.gte]: qty
//         // } } });
       
//       }).catch(er =>{
//         console.log(er);
//       })
//     console.log("Running", blockNo);
//   })
//  } catch (error) {
//    console.log(error.message, "Topel");
//  }


 
// });


// @route Get api/users/get/managers
// @desc Get all managers on the system
// @access Private
router.get("/loan-created", async (req, res) => {
  let block = parseInt(req.params.block);
  Blocks.findOne({
    where: {blockType: "LoanCreated"},
    order: [
      ['id', 'DESC']
    ]
  }).then((data) =>{
    let blockNo = 0;
    if (data) {
      blockNo = data.dataValues.block_no;
    }
    var egoras = JSON.parse(
      fs.readFileSync(__dirname + "/abi/loan.json", "utf8")
    );

    var contract = new web3.eth.Contract(egoras.abi, egoras.address);

    try {
      contract
    .getPastEvents("LoanCreated", {
      fromBlock: block + 1,
      toBlock: (block + 5000)

    })
    .then(function (events) {
      if(events.length > 0){
        events.forEach(function (event) {
          if(event.event == "LoanCreated"){
            
            
              let meta = JSON.parse(event.returnValues._metadata);
              
              console.log(meta);
               Loans.create(
                 {
                  loanID: event.returnValues.newLoanID,
                  loan_duration: meta.loan_duration,
                  category: meta.loan_category,
                  branch_name: meta.branch_name,
                  story: meta.story,
                  title: event.returnValues._title,
                  cover_image: event.returnValues._image_url,
                  other_images: meta.arrayImg.toString(),
                  due_date: new Date(event.returnValues._length * 1000),
                  backed: 0,
                  isLoan: event.returnValues._isLoan,
                  creator: event.returnValues._creator,
                  transaction_hash: event.transactionHash,
                  is_approved: false,
                  loan_amount: web3.utils.fromWei(event.returnValues._amount.toString()),
                  inventry_fee: web3.utils.fromWei(event.returnValues._inventoryFee.toString()),
                  isConfirmed: event.returnValues._isConfirmed
                 }
            
                ).then((res) => {
                  Blocks.create({block_no: event.blockNumber})
                  console.log(res);
                })
                
            

          }
        })
      }else {
        web3.eth.getBlockNumber().then((blockN) => {
          blockNumber = 0;
          if((blockNo + 5000) > blockN){
            blockNumber = blockN;
            Blocks.create({block_no: blockNumber})
          }else{
            blockNumber = (blockNo + 5000)
            Blocks.create({block_no: blockNumber})
          }
         
        })


       
        
       }
    });
  } catch (error) {
      res.status(500).send({ status: false, events: [], message: "internal error"});
     
    console.log(error);
  }


  })
 
});

// @route Get api/users/get/managers
// @desc Get all managers on the system
// @access Private
router.get("/directors/:limit", async (req, res) => {
  console.log("directors requests");

  let limit = req.params.limit;
  try {
    let loans = await Companies.findAll({
      
      include: [
        {
          model: Directors,
          as: "directors",
         
        }
      ],
    });
    res.status(200).send({ data: loans });
  } catch (error) {
    console.log(error);

    res.status(400).send({ errors: [{ msg: "No Data" }] });
  }
});


// @route Get api/users/get/managers
// @desc Get all managers on the system
// @access Private
router.get("/get/total/supply", async (req, res) => {

  try {
    var egoras = JSON.parse(
      fs.readFileSync(__dirname + "/abi/erc20.json", "utf8")
    );
    var contract3 = new web3.eth.Contract(egoras.abi, egoras.address2);
    contract3.methods.totalSupply().call().then((data =>{
     

      Stats.update({
        value: web3.utils.fromWei(data),
          
          
        }, {
          where: {
            symbol: "NGNC",
            type: "supply",

          }
        }).then((res) => {
         
          
        })
        res.status(200).send();
    }))
   
  } catch (error) {
    console.log(error);

    res.status(400).send({ errors: [{ msg: "No Data" }] });
  }
});



// @route Get api/users/get/managers
// @desc Get all managers on the system
// @access Private
router.get("/get/balance/ngnc", async (req, res) => {

  try {
    var egoras = JSON.parse(
      fs.readFileSync(__dirname + "/abi/erc20.json", "utf8")
    );
    var contract3 = new web3.eth.Contract(egoras.abi, egoras.address2);
    contract3.methods.balanceOf("0x7a24C9DB6A9f22b650087f2D65F119B9B2bc2508").call().then((data =>{
     

      Stats.update({
        value: web3.utils.fromWei(data),
          
          
        }, {
          where: {
            symbol: "NGNC",
            type: "vault",

          }
        }).then((res) => {
         
          
        })
        res.status(200).send();
    }))
   
  } catch (error) {
    console.log(error);

    res.status(400).send({ errors: [{ msg: "No Data" }] });
  }
});

router.get("/get/by/category/:name", async (req, res) => {

  let name = req.params.name;
  try {
    let loans = await Loans.findAll({
      where: {
        loanID: 
          {[Op.ne]: null},
          loan_category: name,
          is_display: true
      },
      
    });
    res.status(200).send({ data: loans });
  } catch (error) {
    console.log(error);

    res.status(400).send({ errors: [{ msg: "No Data" }] });
  }
});


router.get("/get/by/status/:status", async (req, res) => {

  let status = req.params.status;

  
  switch (parseInt(status)) {
    case 0:
      try {
        let loans = await Loans.findAll({
          where: {
            loanID: 
              {[Op.ne]: null},
              validated: true,
              is_approved: false
          },
          include: [
            {
              model: Companies,
              as: "companies",
              include: {
                model: Directors,
                as: "directors",
                //attributes: ["name"],
                
              },
            }
          ],
        });
        res.status(200).send({ data: loans });
      } catch (error) {
        console.log(error);
    
        res.status(400).send({ errors: [{ msg: "No Data" }] });
      }
      break;
    case 1:
      try {
        let loans = await Loans.findAll({
          where: {
            loanID: 
              {[Op.ne]: null},
              validated: true,
              is_approved: true
          },
          include: [
            {
              model: Companies,
              as: "companies",
              include: {
                model: Directors,
                as: "directors",
                //attributes: ["name"],
                
              },
            }
          ],
        });
        res.status(200).send({ data: loans });
      } catch (error) {
        console.log(error);
    
        res.status(400).send({ errors: [{ msg: "No Data" }] });
      }
        break
    default:
      try {
        let loans = await Loans.findAll({
          where: {
            loanID: 
              {[Op.ne]: null},
              validated: false,
              isActiveVotingPeriod: false
          },
          include: [
            {
              model: Companies,
              as: "companies",
              include: {
                model: Directors,
                as: "directors",
                //attributes: ["name"],
                
              },
            }
          ],
        });
        res.status(200).send({ data: loans });
      } catch (error) {
        console.log(error);
    
        res.status(400).send({ errors: [{ msg: "No Data" }] });
      }

      break;
  }
});

router.get("/get/by/id/:id", async (req, res) => {

  let id = req.params.id;
  try {
    let loans = await Loans.findAll({
      where: {
        loanID: 
          {[Op.ne]: null},
          id: id
      },
     
    });
    res.status(200).send({ data: loans });
  } catch (error) {
    console.log(error);

    res.status(400).send({ errors: [{ msg: "No Data" }] });
  }
});


// @route Get api/users/get/managers
// @desc Get all managers on the system
// @access Private
router.get("/get/balance/egr", async (req, res) => {

  try {
    var egoras = JSON.parse(
      fs.readFileSync(__dirname + "/abi/erc20.json", "utf8")
    );
    var contract3 = new web3.eth.Contract(egoras.abi, egoras.address);
    contract3.methods.balanceOf("0x7a24C9DB6A9f22b650087f2D65F119B9B2bc2508").call().then((data =>{
     

      Stats.update({
        value: web3.utils.fromWei(data),
          
          
        }, {
          where: {
            symbol: "EGR",
            type: "vault",

          }
        }).then((res) => {
         
          
        })
        res.status(200).send();
    }))
   
  } catch (error) {
    console.log(error);

    res.status(400).send({ errors: [{ msg: "No Data" }] });
  }
});


router.get("/system/info/:id", async (req, res) => {
  
  var egoras = JSON.parse(
    fs.readFileSync(__dirname + "/abi/loan.json", "utf8")
  );

  var contract = new web3.eth.Contract(egoras.abi, egoras.address);

  contract.methods.getLoanInfo(req.params.id).call().then((data =>{
    let newdate = new Date().getTime();
    return res.status(200).send({data, newdate});

  }));
  
});

// @route Get api/users/get/managers
// @desc Get all managers on the system
// @access Private
router.get("/:limit", async (req, res) => {

  let size = parseInt(req.params.limit);
  try {
    let loans = await Loans.findAll({
      where: {
        loanID: 
          {[Op.ne]: null},
          is_display: true
      },
      limit: size,
      order: [
        ['id', 'DESC']
      ],
  
    });
    res.status(200).send({ data: loans });
  } catch (error) {
   

    res.status(400).send({ errors: [{ msg: "No Data" }] });
  }
});

router.get("/pending/:limit", async (req, res) => {

  let size = parseInt(req.params.limit);
  try {
    let loans = await Loans.findAll({
      where: {
        loanID: 
          {[Op.ne]: null},
          is_display: false
      },
      limit: size,
      order: [
        ['id', 'DESC']
      ],
  
    });
    res.status(200).send({ data: loans });
  } catch (error) {
   

    res.status(400).send({ errors: [{ msg: "No Data" }] });
  }
});

router.get("/requests/:limit", async (req, res) => {
  console.log("HOME requests");
  let limit = req.params.limit;
  try {
    let requests = await Requests.findAll({
      order: [
        ['validated', 'ASC'],
        ['requestType', 'DESC'],
    ]
    });
    res.status(200).send({ data: requests });
  } catch (error) {
    console.log(error);

    res.status(400).send({ errors: [{ msg: "No Data" }] });
  }
});


// @route Get api/users/get/managers
// @desc Get all managers on the system
// @access Private
router.get("/companies/:limit", async (req, res) => {

  let limit = req.params.limit;
  try {
    let companies = await Companies.findAll({
      where: {
        transaction_hash: 
          {[Op.ne]: null},
      },
      include: [
        {
          model: Directors,
          as: "directors",
         
        }
      ],
    });
    res.status(200).send({ data: companies });
  } catch (error) {
    console.log(error);

    res.status(400).send({ errors: [{ msg: "No Data" }] });
  }
});

router.get("/get/statistics/", async (req, res) => {
  
  let queryString = 'SELECT COUNT(`id`) AS number_of_voters, (SELECT SUM(`price` * `value`) FROM stats WHERE (symbol = "EGR" AND type = "vault") OR (symbol = "NGNC" AND type = "vault")) AS vault, (SELECT `price`  FROM stats WHERE symbol = "EGR" LIMIT 1) AS egrPrice, (SELECT `value` FROM stats WHERE `symbol` = "NGNC" AND `type` = "supply") AS loanAmount,'+
  '(SELECT `price`  FROM stats WHERE symbol = "EGR" LIMIT 1) AS egrPrice, (SELECT `price`  FROM stats WHERE symbol = "NGNC" LIMIT 1) AS ngnPrice, (SELECT `price` * `value` FROM stats WHERE `symbol` = "EGR" AND `type` = "reward") AS reward FROM voters';
 
  db.sequelize
  .query(queryString, {
    type: sequelize.QueryTypes.SELECT
  })
  .then(function (stats) {
    res.status(200).send({ data: stats });
  })
  .catch(function (err) {
    res.status(400).send({ errors: [{ msg: "No Data" }] });
  });
});

// @route Post api/loans/add
// @desc Add loan
// @access Private
router.post(
  "/add",
  
  [
    check("loan_tile", "Loan tile is required").not().isEmpty(),
    check("cover_image", "Cover image is required").not().isEmpty(),
    check("loan_duration", "Loan duration is required").not().isEmpty(),
    check("loan_category", "Loan category is required").not().isEmpty(),
    check("country", "Country is required").not().isEmpty(),
    check("story", "story is required").not().isEmpty(),
    check("loan_payable", "Please select if the company can repay loan if user defaults").not().isEmpty(),
    check("loan_fees", "Please select if there is any fees attached to this loan").not().isEmpty(),
    check("address", "Wallet address is required").not().isEmpty(),
    check("payment_model", "Re-payment Model is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { loan_tile, cover_image, loan_duration, loan_category, country, story, loan_payable, loan_fees, loan_amount, address, payment_model } = req.body;
    try {
      let checkCompany = await Companies.findOne({
        where: {
          address
        
        }
      });

      if (!checkCompany) {
        res.status(400).send({ errors: [{ msg: "Company does not exist" }] });
      }
      let payable = false;
      let fees = false;
      switch (loan_payable) {
        case "yes":
          payable = true;
          break;
        default:
          break;
      }

      switch (loan_fees) {
        case "yes":
          fees = true;
          break;
        default:
          break;
      }

        imgur.setClientId(config.get("imgURClientID"));
        imgur.setAPIUrl("https://api.imgur.com/3/");
        ///.log(employees);
        var strPicture = cover_image.replace(/^data:image\/[a-z]+;base64,/, "");
        imgur
          .uploadBase64(strPicture)
          .then(function (json) {
            Loans.create({
              loan_tile,
              cover_image: json.data.link,
              loan_duration,
              loan_category,
              country,
              story,
              loan_payable: payable,
              loan_fees: fees,
              loan_amount,
              weekly_returns:0,
              last_returns: 0,
              paid: 0,
              address,
              payment_model,
            })
              .then(function (data) {
                //console.log(data);
                res.status(200).send({cover_image: data.cover_image});
              })
              .catch(function (err) {
                console.log(err);

                res.status(500).send({ errors: [{ msg: "Server Error! #1" }] });
              });
          })
          .catch(function (err) {
            console.log(err);

            res.status(500).send({ errors: [{ msg: "Server Error! #2" }] });
          });
     
    } catch (error) {
      console.log(error);

      res.status(500).send({ errors: [{ msg: "Server Error! #3" }] });
    }
  }
);



// @route Post api/loans/register/company
// @desc Register Company
// @access Private
router.post(
  "/register/company",
  
  [
    check("cac", "CAC is required").not().isEmpty(),
    check("name_of_company", "Name of company is required").not().isEmpty(),
    check("share_capital", "Share capital is required").not().isEmpty(),
    check("location", "Location is required").not().isEmpty(),
    check("company_offset_loan", "Can company offset loan is required").not().isEmpty(),
    check("board_of_directors", "Board of directors is required").not().isEmpty(),
    check("address", "Wallet adddress is required").not().isEmpty(),
    check("company_description", "Company description is required").not().isEmpty(),
    check("company_logo", "Company logo is required").not().isEmpty(),
    
       
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { cac, name_of_company, share_capital, location, company_offset_loan, board_of_directors, address,
      company_description,  company_logo} = req.body;
    try {
      let payable = false;
      let fees = false;
      switch (company_offset_loan) {
        case "yes":
          payable = true;
          break;
        default:
          break;
      }

      let checkCompany = await Companies.findOne({
        where: {
          address
        
        }
      });
if(checkCompany){
  // error
  return res.status(400).json({ errors: [{ msg: "Company already exist" }] });
}


        imgur.setClientId(config.get("imgURClientID"));
        imgur.setAPIUrl("https://api.imgur.com/3/");
        ///.log(employees);
        var strPicture = cac.replace(/^data:image\/[a-z]+;base64,/, "");
        json = await imgur
          .uploadBase64(strPicture);

          var logo = company_logo.replace(/^data:image\/[a-z]+;base64,/, "");
        rs_json = await imgur
          .uploadBase64(logo);

          const transaction = await db.sequelize.transaction();
           try {
            await Companies.create(
              { cac: json.data.link, name_of_company, share_capital, location, company_offset_loan: payable, address, company_description, company_logo: rs_json.data.link },
              {
                transaction,
              }
            );
            let directors = [];
            for (let index = 0; index < board_of_directors.length; index++) {
              const element = {
                position_of_director: board_of_directors[index].position_of_director,
                name_of_director:  board_of_directors[index].name_of_director,
                picture_of_director: board_of_directors[index].picture_of_director,
                address,
              };
              directors.push(element);
            }
            await Directors.bulkCreate(directors, {
              transaction,
            });
            await transaction.commit();
          res.status(200).send();
           } catch (error) {
            console.error(error, "rea");
            await transaction.rollback();

            res
              .status(400)
              .send({ errors: [{ msg: "Not added, try again later!" }] });
           }
     
    } catch (error) {
      console.error(error.message, "from here");
      res.status(500).send({ errors: [{ msg: "Server Error!" }] });
    }
  
  
  });



// @route Post api/loans/add
// @desc Add loan
// @access Private
router.post(
  "/image",
  [
    check("picture_of_director", "Picture is required").not().isEmpty(),

    
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }
    const { picture_of_director } = req.body;
    try {
        imgur.setClientId(config.get("imgURClientID"));
        imgur.setAPIUrl("https://api.imgur.com/3/");
        var strPicture = picture_of_director.replace(/^data:image\/[a-z]+;base64,/, "");
        imgur
          .uploadBase64(strPicture)
          .then(function (json) {
            res.status(200).send({image: json.data.link})
          })
          .catch(function (err) {
            console.log(err, "the upper");

            res.status(500).send({ errors: [{ msg: "Server Error!" }] });
          });
     
    } catch (error) {
      console.error(error.message, "the Lower");
      res.status(500).send({ errors: [{ msg: "Server Error!" }] });
    }
  }
);



module.exports = router;
