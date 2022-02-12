
function getInputValue(){
    const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText);
    //input clear
    depositeInput.value = '';
    return depositeAmount;
}



document.getElementById('deposite-btn').addEventListener('click',function(){
    /* const depositeInput = document.getElementById('deposite-input');
    const depositeAmountText = depositeInput.value;
    const depositeAmount = parseFloat(depositeAmountText); */
    const depositeAmount = getInputValue();
    //get deposite
    const depositeTotal = document.getElementById('deposite-total');
    const depositeTotalText = depositeTotal.innerText;
    const previousDepositeTotal = parseFloat(depositeTotalText);
    depositeTotal.innerText = depositeAmount + previousDepositeTotal;
    
    //update balance
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = depositeAmount + previousBalanceTotal;

    /* //input clear
    depositeInput.value = ''; */

    //withdraw 
    document.getElementById('withdraw-btn').addEventListener('click',function(){
        const withdrawInput = document.getElementById('withdraw-input');
        const withdrawAmountText = withdrawInput.value;
        const withdrawAmount = parseFloat(withdrawAmountText)
        console.log(withdrawAmountText);

        //update withdraw
        const withdrawTotal = document.getElementById('withdraw-amount');
        const withdrawTotalText = withdrawTotal.innerText;
        const withdrawTotalAmount  = parseFloat(withdrawAmountText);
        withdrawTotal.innerText = withdrawAmount + withdrawTotalAmount;

        //update balance
        const balanceTotal = document.getElementById('balance-total');
        const balanceTotalText = balanceTotal.innerText;
        const previousBalanceTotal = parseFloat(balanceTotalText);
        balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


    // get input clear
    withdrawInput.value='';
    })
})