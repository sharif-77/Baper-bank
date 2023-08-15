console.log('hello ');
let btn=document.getElementById("loginBtn")
if (btn!==null) {
  btn.addEventListener("click", () => {
    let emailField = document.getElementById("emailField");
    let passwordField = document.getElementById("passwordField");
  
    if (
      emailField.value === "sharif@bank.com" &&
      passwordField.value === "1234"
    ) {
      // window.location.href='http://127.0.0.1:5500/bank.html'
      window.location.href = "/Baper-bank/bank.html";
    } else {
      alert("Wrong input");
    }
    emailField.value = "";
    passwordField.value = "";
    console.log('button clicked');
  });
}

// login code end

// bank code start
 // deposit
 document.getElementById('depositBtn').addEventListener('click',()=>{
    let totalDeposit= document.getElementById('totalDeposit');
    let newDeposit= document.getElementById('depositInp').value;
    let totalBalance= document.getElementById('totalBalance');
    let newDepositNumberValue=parseFloat(newDeposit);
    let totalDepositNumberValue=parseFloat(totalDeposit.innerText);
    let totalBalanceNumberValue=parseFloat(totalBalance.innerText);
    document.getElementById('depositInp').value='';
    if (isNaN(newDeposit) || newDeposit==='') {
     alert('provide number of amount')
     return
    }
    let total=totalDeposit.innerText=totalDepositNumberValue+newDepositNumberValue;
    totalBalance.innerText=totalBalanceNumberValue+newDepositNumberValue;
   })

   // withdraw
   document.getElementById('withdrawBtn').addEventListener('click',()=>{
    let totalWithdraw= document.getElementById('totalWithdraw')
    let newWithdraw= document.getElementById('withdrawInp').value;
    let totalBalance= document.getElementById('totalBalance')
    let newWithdrawNumberValue=parseFloat(newWithdraw)
    let totalWithdrawNumberValue=parseFloat(totalWithdraw.innerText)
    let totalBalanceNumberValue=parseFloat(totalBalance.innerText)
    document.getElementById('withdrawInp').value=''
    if (newWithdraw==='') {
     alert('provide number of amount')
     return
    }
     if (newWithdrawNumberValue>totalBalanceNumberValue || newWithdraw==='') {
       alert('You have not sufficient Balance')
       return

     }

    let total=totalWithdraw.innerText=totalWithdrawNumberValue+newWithdrawNumberValue
    totalBalance.innerText=totalBalanceNumberValue-newWithdrawNumberValue
   })
