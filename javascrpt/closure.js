function order(callprepare){
    console.log("1.order food");
    callprepare();
}
function prepare(){
    console.log("2.prepare food");
}
function serve(){
    console.log("3.serve food");
}
order(prepare);
order(serve);