var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`
}

function nowServing(katzDeliLine) {
  katzDeliLine.shift()if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!"
  } else {
  return `Currently serving ${katzDeliLine[0]}.`;
  }
}