export const withdraw_money =  "withdraw-money";
export const deposite_money =  "deposite-money";

// action
export const withdraw = (amount) =>{
    return {
        type : withdraw_money ,
        payload: amount
    }
  }
  
export const deposite = (amount) =>{
    return {
        type : deposite_money,
        payload: amount
    }
  }
  
