var obj1 = 
    {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      };

      var obj2 = {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "non5": false
      }

    var k1 = Object.keys(obj1)
    var k2 = Object.keys(obj2);

    if(k1.includes(k2)) {
        console.log("HI")
    } else {
        console.log("Fuck off")
    }