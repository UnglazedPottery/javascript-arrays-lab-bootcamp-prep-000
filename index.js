var kittens = ["Milo", "Otis", "Garfield"] //define your array here

// Add your functions and code here
function destructivelyAppendKitten(name)
{
  return kittens.push(name)
}

function destructivelyPrependKitten(name)
{
  return kittens.unshift(name)
}  

function destructivelyRemoveLastKitten()
{
  return kittens.pop()
}

function destructivelyRemoveFirstKitten()
{
  return kittens.shift()
}

function appendKitten(name)
{
  var array2 = [name] 
  kittens = kittens.concat(array2)
  return kittens
}

function prependKitten(name)
{
  kittens = [name,...kittens]
  return kittens
}

function removeLastKitten()
{
  kittens = kittens.slice(0, kittens.length - 1)
  return kittens
}

function removeFirstKitten()
{
  kittens = kittens.slice(1)
  return kittens
}
