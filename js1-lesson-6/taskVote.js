class Voter {
    constructor(age) {
        this.age = age
    }
    canVote() {
        return this.age >= 18 //=== true || this.age < 18 === false
    }
}

const voter1 = new Voter(17)
console.log( voter1.canVote() )

const voter2 = new Voter(23)
console.log( voter2.canVote() )