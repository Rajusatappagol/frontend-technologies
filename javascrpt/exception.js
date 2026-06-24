//exceptions
console.log("1.Open BookMyshow");
try{
    console.log("2.Select movie");
    console.log("3.Select seats");
    console.log("4.Pay money");
    throw new Error("Payment failed");
}catch(err){
    console.log(err.message);
    console.log("5.Ticket not confirmed");
}
finally{
    console.log("6.ticket confirmed ");
    console.log("7. Enjoy movie");
}
