var customerName = 'bob';
const leastFavoriteCustomer = 'Matt'

function fixTheScope() {
    return customerName;
}

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase()
    return customerName;
    
}

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'Mike';
    return leastFavoriteCustomer;

}