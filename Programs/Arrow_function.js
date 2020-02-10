name = 'text example';
// if we reference this from such a function, it taken from the outer normal function.
// When a function is declared, it may use this, but that this has no value until the function is called.
let user = {
    firstName: "sneha",
    sayHi() {
        let arrow = () => console.log(this.firstName);
        arrow();
    }
};

user.sayHi();


let user1 = {
    name: "John",
    go: function() { console.log(this.name) }
  };
  
  (user1.go)() // error!

function accessVariable() {
    console.log(" outside arrow function", this.name);
    const data = x => {
        console.log("inside arrow function", this.name);
        return 1;
    }
   data();
}

accessVariable();
