let userRole = "admin" ;
let accessLevel;

if(userRole === "admin"){
    accessLevel = "Full access";
}
else if(userRole === "Manager"){
    accessLevel = "Limited access";
}
else{
    accessLevel = "No access";
}

console.log("Access level:"+ accessLevel);

// Defining variables and 
//nested if...else statementd for isLoggedIn and userMessage

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole = "admin"){
        userMessage = "Welcome Admin";
    }else{
        userMessage = "Welcome manager";
    }
}else{
    userMessage = "Please login to access the system";
}
console.log("User message"+ userMessage);

// Defining variables and 
//switch statement for userType and userCategory

let userType = "admin";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "unknown";
}


console.log("User Category: ",userCategory);