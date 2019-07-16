"use stict";
//Data =========================================================================================================================
var hours = ["6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm"];

//Functionality =================================================================================================================
//Constructor for store sales data
function Location (name, minCustomers, maxCustomers, avgCookies) {
  this.name = name;
  this.minCustomers = minCustomers;
  this. maxCustomers = maxCustomers;
  this.avgCookies = avgCookies;
  this.hourlyPurchased = [];
  this.dailyTotal = 0;
  this.randomCustomers = function() {
    var numCustomers = Math.floor(Math.random() * (this.maxCustomers - this.minCustomers + 1)) +this.minCustomers;
    return numCustomers;
  }
  this.cookiesPurchased = function(){
    for (i = 0; i < hours.length; i++) {
      this.hourlyPurchased[i] = Math.floor(this.randomCustomers() * this.avgCookies);
    }
  }
  this.totalSales = function(){
    for (i = 0; i < hours.length; i++) {
    this.dailyTotal += this.hourlyPurchased[i];
  }
  }
}

//Generates table header with the hours opened
function generateTableHeader() {
  var tableRowLocation = document.getElementById("tableHeader");
  var blankHeader = document.createElement("th");
  tableRowLocation.appendChild(blankHeader);
  for (var i = 0; i < hours.length; i++) {
    var hoursElement = document.createElement("th");
    hoursElement.textContent = hours[i];
    tableRowLocation.appendChild(hoursElement);
  }
  var totalHeader = document.createElement("th");
  totalHeader.textContent = "Daily Total";
  tableRowLocation.appendChild(totalHeader);
}

//Fills in table with sales data for each individual location
function generateTable(location, id) {
  var tableRowLocation = document.getElementById(id);
  for (var i = 0; i < hours.length; i++) {
    var salesElement = document.createElement("td");
    var numPurchased = location.hourlyPurchased[i];
    salesElement.textContent = numPurchased;
    tableRowLocation.appendChild(salesElement);
  }
  var totalElement = document.createElement("td");
  totalElement.textContent = location.dailyTotal;
  tableRowLocation.appendChild(totalElement);
}

//Calculates hourly totals from all locations
function generateHourlyTotals() {
  var total = [];
  for (i = 0; i < hours.length; i++) {
    total[i] = firstAndPike.hourlyPurchased[i] + seaTacAirport.hourlyPurchased[i] + seattleCenter.hourlyPurchased[i] + capitolHill.hourlyPurchased[i] + alki.hourlyPurchased[i];
  }
  return total;
}

//Generates the hourly totals footer for list
function generateTableFooter() {
  var tableRowLocation = document.getElementById("totals");
  var totalHeader = document.createElement("td");
  totalHeader.textContent = "Hourly Total";
  tableRowLocation.appendChild(totalHeader);
  for (var i = 0; i < hours.length; i++) {
    var hourlyElement = document.createElement("td");
    var hourlyTotal = generateHourlyTotals()[i];
    hourlyElement.textContent = hourlyTotal;
    tableRowLocation.appendChild(hourlyElement);
  }
  var totalSalesElement = document.createElement("td");
  var allSales = firstAndPike.dailyTotal + seaTacAirport.dailyTotal + seattleCenter.dailyTotal + capitolHill.dailyTotal + alki.dailyTotal;
  totalSalesElement.textContent = allSales;
  tableRowLocation.appendChild(totalSalesElement); 
}

//Executables ================================================================================================================
//Creates constructor objects
var firstAndPike = new Location('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new Location('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new Location('Seattle Centrer', 11, 38, 3.7);
var capitolHill = new Location('Capitol Hill', 20, 38, 2.3);
var alki = new Location('Alki', 2, 16, 4.6);

//Calls function to generate array with random number of cookies purchased per hour for each object
firstAndPike.cookiesPurchased();
seaTacAirport.cookiesPurchased();
seattleCenter.cookiesPurchased();
capitolHill.cookiesPurchased();
alki.cookiesPurchased();

firstAndPike.totalSales();
seaTacAirport.totalSales();
seattleCenter.totalSales();
capitolHill.totalSales();
alki.totalSales();


generateTableHeader();
generateTableFooter();

//Generates List on sales.html
generateTable(firstAndPike, "firstAndPike");
generateTable(seaTacAirport, "seaTac");
generateTable(seattleCenter, "seattle");
generateTable(capitolHill, "capitol");
generateTable(alki, "alki");
