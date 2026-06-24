// console.log("1.Open BookMyshow");
// console.log("2.Select movie");
// console.log("3.Select seats");
// console.log("4.Pay money");

// setTimeout( () => {
//     console.log("1.Open BookMyshow")
// }, 8000);
// setTimeout( () => {
//     console.log("2.Select movie")
// }, 5000);
// setTimeout( () => {
//     console.log("3.Select seats")
// }, 3000);
// setTimeout( () => {
//     console.log("4.Pay money")
// }, 1000);


//callbacks
setTimeout( () => {
    console.log("1.Open BookMyshow");
    setTimeout( () => {
        console.log("2.Select movie");
        setTimeout( () => {
            console.log("3.Select seats");
            setTimeout( () => {
                console.log("4.Pay money");
                setTimeout( () => {
                    console.log("5.Ticket confirmed");
                },2000);
            }, 1000);
        },5000);
    },3000);
}, 8000);    