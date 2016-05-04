alert("Welcome to the tip calculator!");
var bill = prompt("Enter the bill amount:");
if(confirm("All tips are 20% of the bill")){
    var tip = bill * 0.20;
    var billWithTip = Number(bill) + tip;
    alert("Bill: " + bill + ", Tip: " + tip + ", New Bill: " + billWithTip)
  }else{
    alert("Please be kind to your servers.")
  }
