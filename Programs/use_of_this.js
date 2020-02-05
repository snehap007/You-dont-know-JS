function display() {
    let pos = 8;
    console.log(this);
    console.log("inside function", pos);
}

display();
//  we can not access let variable outside og the function
console.log("outside function", pos);