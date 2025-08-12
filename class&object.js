"use strict";
//You catch errors early, not after running the code.
//Teams and companies avoid a lot of runtime bugs
class devices {
    constructor() {
        this.name = "lg";
        this.price = 12000;
        this.model = "lg-ip-2020";
    }
}
const d1 = new devices();
class bottle {
    constructor(name, model, price) {
        this.name = name;
        this.model = model;
        this.price = price;
    }
}
let bottle1 = new bottle("suha", "23-0-12", 2033);
