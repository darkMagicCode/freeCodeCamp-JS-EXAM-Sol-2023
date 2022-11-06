function checkCashRegister(price, cash, cid) {
    // figure out change amount due:
    let change = cash-price
    let totalCid = 0
    let status = {status:'', change: []}
  
    let cidObj = {
      "PENNY": .01,
      "NICKEL": .05,
      "DIME": .1,
      "QUARTER": .25,
      "ONE": 1,
      "FIVE": 5,
      "TEN": 10,
      "TWENTY": 20,
      "ONE HUNDRED": 100}
  
    // figure out total of cid
    for (let i = 0 ; i < cid.length; i++){
      totalCid += cid[i][1]
    }
  
    totalCid = Math.round(totalCid * 100) / 100;
  
    if (change === totalCid){
      status.status = "CLOSED"
      status.change = cid
      return status
    }
    else if (totalCid < change){
      status.status = "INSUFFICIENT_FUNDS"
      status.change = []
    }
  
     else {
        for (let i = cid.length-1 ; i >= 0; i--){
          if (change >= cidObj[cid[i][0]] && change >= cid[i][1]){
            status.change.push(cid[i])
            change -= cid[i][1]
            change = Math.round(change*100)/100
  
  
          } else if (change >= cidObj[cid[i][0]] && change < cid[i][1]){
              let amount = Math.floor(change/cidObj[cid[i][0]])*cidObj[cid[i][0]]
  
              status.change.push([cid[i][0], amount])
              change -=  amount
              change = Math.round(change*100)/100
          }
        }
    }
  
    if (change >= .01){
      status.status = "INSUFFICIENT_FUNDS"
      status.change = []
    } else {
      status.status = "OPEN"
    }
    return status;
  }