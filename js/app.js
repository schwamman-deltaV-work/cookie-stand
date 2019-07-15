"use stict";

var firstAndPike = {
  minCustomers: 23,
  maxCustomers: 65,
  avgCookies: 6.3,
  hourlyPurchased: [],
  randomCustomers: function() {
    var numCustomers =
      Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) +
      this.minCustomers;
    return numCustomers;
  },
  cookiesPurchased: function() {
    for (i = 0; i < 15; i++) {
      this.hourlyPurchased[i] = Math.floor(
        this.randomCustomers() * this.avgCookies
      );
    }
  }
};

var seaTacAirport = {
  minCustomers: 3,
  maxCustomers: 24,
  avgCookies: 1.2,
  hourlyPurchased: [],
  randomCustomers: function() {
    var numCustomers =
      Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) +
      this.minCustomers;
    return numCustomers;
  },
  cookiesPurchased: function() {
    for (i = 0; i < 15; i++) {
      this.hourlyPurchased[i] = Math.floor(
        this.randomCustomers() * this.avgCookies
      );
    }
  }
};

var seattleCenter = {
  minCustomers: 11,
  maxCustomers: 38,
  avgCookies: 3.7,
  hourlyPurchased: [],
  randomCustomers: function() {
    var numCustomers =
      Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) +
      this.minCustomers;
    return numCustomers;
  },
  cookiesPurchased: function() {
    for (i = 0; i < 15; i++) {
      this.hourlyPurchased[i] = Math.floor(
        this.randomCustomers() * this.avgCookies
      );
    }
  }
};

var capitolHill = {
  minCustomers: 20,
  maxCustomers: 38,
  avgCookies: 2.3,
  hourlyPurchased: [],
  randomCustomers: function() {
    var numCustomers =
      Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) +
      this.minCustomers;
    return numCustomers;
  },
  cookiesPurchased: function() {
    for (i = 0; i < 15; i++) {
      this.hourlyPurchased[i] = Math.floor(
        this.randomCustomers() * this.avgCookies
      );
    }
  }
};

var alki = {
  minCustomers: 2,
  maxCustomers: 16,
  avgCookies: 4.6,
  hourlyPurchased: [],
  randomCustomers: function() {
    var numCustomers =
      Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) +
      this.minCustomers;
    return numCustomers;
  },
  cookiesPurchased: function() {
    for (i = 0; i < 15; i++) {
      this.hourlyPurchased[i] = Math.floor(
        this.randomCustomers() * this.avgCookies
      );
    }
  }
};

firstAndPike.cookiesPurchased();
seaTacAirport.cookiesPurchased();
seattleCenter.cookiesPurchased();
capitolHill.cookiesPurchased();
alki.cookiesPurchased();

var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

function generateList(location, id) {
  var listLocation = document.getElementById(id);
  for (var i = 0; i < hours.length; i++) {
    var salesData = document.createElement("li");
    var listMessage = `${hours[i]}: ${location.hourlyPurchased[i]} cookies`;
    salesData.textContent = listMessage;
    listLocation.appendChild(salesData);
  }
  var totalList = document.createElement("li");
  var total = 0;
  for (i = 0; i < hours.length; i++) {
    total += location.hourlyPurchased[i];
  }
  var totalMessage = `Total: ${total} cookies`;
  totalList.textContent = totalMessage;
  listLocation.appendChild(totalList);
}

generateList(firstAndPike, "firstAndPike");
generateList(seaTacAirport, "seaTac");
generateList(seattleCenter, "seattle");
generateList(capitolHill, "capitol");
generateList(alki, "alki");
