Window.name = 'text example';

function accessVariable() {
    console.log(" outside arrow function", this.name);
    const data = x => {
        console.log("inside arrow function", this.name);
        return 1;
    }
   
}


accessVariable();