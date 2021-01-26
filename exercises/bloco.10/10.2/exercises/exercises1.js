const uppercase = (str, callback) => {
  callback(str.toUpperCase());
}

uppercase('a', (str) =>{
  console.log(str)
})
module.exports = uppercase;