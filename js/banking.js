
function getInputValue(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    //input clear
    inputField.value = '';
    return amountValue;
}

function totalUpdateField(totalFieldId,amount){
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal +  amount ;
}

function getCurrentBalance(){
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}

function updateBalance(amount,isAdd){
    const balanceTotal = document.getElementById('balance-total');
    /* const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText); */
    const previousBalanceTotal = getCurrentBalance();
    if(isAdd==true){
        balanceTotal.innerText =  previousBalanceTotal + amount ;
    }
    else{
        balanceTotal.innerText =  previousBalanceTotal - amount ;
    }
}



document.getElementById('deposite-btn').addEventListener('click',function(){
    /* const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText); */
    const depositeAmount = getInputValue('deposite-input');
    //get deposite
    /* const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = depositeAmount + previousDepositeTotal; */

    
    
    //update balance
    /* const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = depositeAmount + previousBalanceTotal; */
    if(depositeAmount>0){
        totalUpdateField('deposite-total',depositeAmount);
        updateBalance(depositeAmount,true);
    }
    

    /* //input clear
    depositeInput.value = ''; */

    //withdraw 
    document.getElementById('withdraw-btn').addEventListener('click',function(){
        /* const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        const withdrawAmount = parseFloat(withdrawAmountText)
        console.log(withdrawAmountText); */
        const withdrawAmount = getInputValue('withdraw-input');

        //update withdraw
        /* const withdrawTotal = document.getElementById('withdraw-amount');
        const withdrawTotalText = withdrawTotal.innerText;
        const withdrawTotalAmount  = parseFloat(withdrawTotalText);
        withdrawTotal.innerText = withdrawAmount + withdrawTotalAmount; */
        

        //update balance
        /* const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount; */
        const currentBalance = getCurrentBalance();
        if(withdrawAmount>0 && withdrawAmount<=currentBalance){
            totalUpdateField('withdraw-amount',withdrawAmount);
            updateBalance(withdrawAmount,false);
        }
        if(withdrawAmount>currentBalance){
            console.log('You have not enough money');
        }
        


    
    })
})