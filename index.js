/* 
Instructions
- Ask the user for their age and how far they are travelling (in km)
- The price per travelled km will be £0.21
- Junior passengers (under 18) get a 20% discount
- Senior passengers (over 65) get a 40% discount

Challenge
We're going to rewrite our program so that the user chooses a starting point and a destination from a list of stations, besides inputting their age and then get the ticket price. 

You can come up with the stations' names and distances. Try also to code it so that you only need to change the price per km in one place, and all the stations should have the updated price
*/
const juniorPassengerAge = 18
const seniorPassengerAge = 65
const pricePerKM = 0.21

let yourAge = Number(prompt(`What is your age?`))
let yourDistance = Number(prompt(`How far are you travelling?`))


let ticketPrice = (pricePerKM * yourDistance).toFixed(2)

console.log(`Normal Ticket Price: £${ticketPrice}`)
alert(`Normal Ticket Price: £${ticketPrice}`)

if (yourAge < juniorPassengerAge) {
    ticketPrice *= 0.8
    console.log(`Your Ticket Price: £${ticketPrice.toFixed(2)}`)

}
else if (yourAge > seniorPassengerAge) {
    ticketPrice *= 0.6.toFixed(2)
    console.log(`Your Ticket Price: £${ticketPrice.toFixed(2)}`)
    alert(`Your Ticket Price: £${ticketPrice.toFixed(2)}`)
}
    else
    console.log(`Your Ticket Price: £${ticketPrice}`)
    alert(`Your Ticket Price: £${ticketPrice.toFixed(2)}`)
