
const customer1 = new Customer()
customer1.addTransaction(10)
customer1.addTransaction(100)
customer1.addTransaction(50)
customer1.addTransaction(10)

console.log( customer1.isEligableForDiscount() )
console.log( customer1.getTotalSpent() )

customer1.addTransaction(5000)
console.log( customer1.isEligableForDiscount() )
console.log( customer1.getTotalSpent() )