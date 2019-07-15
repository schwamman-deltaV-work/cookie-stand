var firstAndPike = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    randomCustomers: function() {
        var numCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) ) + this.minCustomers;
        return numCustomers;
    },
    cookiesPurchased: function() {
        var numPurchased = this.randomCustomers() * this.avgCookies;
        return numPurchased;
    }
}

console.log(firstAndPike.randomCustomers());
console.log(firstAndPike.cookiesPurchased());