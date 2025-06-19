"use strict";
function student(obj) {
    obj.name = "sivsaiwwww";
    console.log(obj.name);
}
student({ name: "testcase", email: "email@gmail.com", password: 1234 });
//extend means what every in the user object we can use in the admin and also we
//  are adding new variable or called admin variable 
//
function admins(obj2) {
}
admins({ name: "sivasa", email: "dddd", password: 454545, admin: true });
