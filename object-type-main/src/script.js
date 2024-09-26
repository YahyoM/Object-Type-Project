function createUser(f, l) {
    return {firstName: f, lastName: l}
}

function getFullName(user) { 
    if (user && user.firstName && user.lastName) return user.firstName + " " + user.lastName
    return ''
}

function getWidth(params) { 
    if (params && params.styling && params.styling.sizes && params.styling.sizes.width) return params.styling.sizes.width
    return null
} 

function extendObject(obj, isValid) { 
    return {...obj, isValid: isValid} 
} 

function sumPrices(prices) { 
    let res = 0;
    for (let key in prices) {
        if (typeof prices[key] === 'number' && isFinite(prices[key])) {
            res += prices[key]
        }
    }
    return res
} 

function createUserWithFullName(firstName, lastName) { 
    let user = {
        firstName: firstName,
        lastName: lastName,
        setFirstName: function(newFirstName) {
            this.firstName = newFirstName;
        },
        setLastName: function(newLastName) {this.lastName = newLastName},
        getFullName: function() {return `${this.firstName} ${this.lastName}`},
    }

    return user
}