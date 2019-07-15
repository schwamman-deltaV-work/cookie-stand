var firstAndPike = {
    minCustomers: 23,
    maxCustomers: 65,
    avgCookies: 6.3,
    randomCustomers: function() {
        var numCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) ) + this.minCustomers;
        return numCustomers;
    },
    cookiesPurchased: function() {
        var numPurchased = Math.floor(this.randomCustomers() * this.avgCookies);
        return numPurchased;
    }
}

var seaTacAirport = {
    minCustomers: 3,
    maxCustomers: 24,
    avgCookies: 1.2,
    randomCustomers: function() {
        var numCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) ) + this.minCustomers;
        return numCustomers;
    },
    cookiesPurchased: function() {
        var numPurchased = this.randomCustomers() * this.avgCookies;
        return numPurchased;
    }
}

var seattleCenter = {
    minCustomers: 11,
    maxCustomers: 38,
    avgCookies: 3.7,
    randomCustomers: function() {
        var numCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) ) + this.minCustomers;
        return numCustomers;
    },
    cookiesPurchased: function() {
        var numPurchased = this.randomCustomers() * this.avgCookies;
        return numPurchased;
    }
}

var capitolHill = {
    minCustomers: 20,
    maxCustomers: 38,
    avgCookies: 2.3,
    randomCustomers: function() {
        var numCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) ) + this.minCustomers;
        return numCustomers;
    },
    cookiesPurchased: function() {
        var numPurchased = this.randomCustomers() * this.avgCookies;
        return numPurchased;
    }
}

var alki = {
    minCustomers: 2,
    maxCustomers: 16,
    avgCookies: 4.6,
    randomCustomers: function() {
        var numCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1) ) + this.minCustomers;
        return numCustomers;
    },
    cookiesPurchased: function() {
        var numPurchased = this.randomCustomers() * this.avgCookies;
        return numPurchased;
    }
}