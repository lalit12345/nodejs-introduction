const url = require('url');

const myUrl = new URL('http://mywebsite.com:8080/hello.html?id=100&status=active');

console.log(myUrl.href);

console.log(myUrl.toString());

// host
console.log(myUrl.host);

// hostname
console.log(myUrl.hostname);

// pathname
console.log(myUrl.pathname);

// serialized query
console.log(myUrl.search);

// search params object
console.log(myUrl.searchParams);

// add params
myUrl.searchParams.append('abc', '500');
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} : ${value}`));