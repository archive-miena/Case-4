const user = {
    username: "archieveanne",
    email: "archieveanne@gmail.com"
};

console.log("Before:");
console.log(user);

user.isActive = true;

delete user.email;

console.log("After:");
console.log(user);