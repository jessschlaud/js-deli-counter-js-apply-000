function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name)
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line."
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return "There is nobody waiting to be served!"
  }
  else {
    var name = katzDeliLine[0]
    katzDeliLine.shift()
    return "Currently serving " + name + "."
  }
}

function currentLine(katzDeliLine) {
  if(katzDeliLine.length == 0) {
    return "The line is currently empty."
  }
  else {
    var line = "The line is currently: "
    var place = 1
    for(var i=0; i < katzDeliLine.length; i++) {
      line += place ". " + katzDeliLine[i] + ", "
      place++
    }
    return line
  }
}
