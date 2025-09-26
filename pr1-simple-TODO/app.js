// SIMPLE TODO
let  todo = [];
let req = prompt("Enter Your Request");
while(true){
    if(req == "quit"){
        console.log("You Quitted");
        break;
    } else if(req == "list"){
        console.log("=================");
        for(let i = 0; i<todo.length; i++){
            console.log(i, todo[i]);
        };
        console.log("=================");
    };

    req = prompt("Enter Your Request")

    if(req == "add"){
        let task = prompt("Enter Task You Want to Add");
        todo.push(task);
        console.log("Task Added");
    } else if(req == "delete"){
        let idx = prompt("Enter Task You Want To delete");
        todo.splice(idx, 1);
        console.log("Task Deleted..");
    } else {
        console.log("Enter Valid Request");
    };
};