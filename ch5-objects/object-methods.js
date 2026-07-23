const user = {
    firstname: "George",
    lastname: "Papadopoulos",
    getFirstname: function () {
        return this.firstname
    },
    getFullname() {                                               //preferred-modern way
        return `${this.firstname}, ${this.lastname}`
    }
}

console.log(user.getFirstname())
console.log(user.getFullname())