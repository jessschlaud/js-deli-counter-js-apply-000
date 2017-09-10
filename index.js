function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing() {
  string nextCustomer = katzDeliLine[0]
  katzDeliLine.shift()
  return nextCustomer
}