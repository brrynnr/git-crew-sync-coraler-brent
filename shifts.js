// Updated shift pay calculation - coraler.brent

function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  return Math.round(hours * rate * 100) / 100;
}

module.exports = { isValidShift, calculatePay };
  