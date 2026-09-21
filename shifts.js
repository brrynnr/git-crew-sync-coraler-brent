function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
    if (hours > 8) {
        const regularHours = 8;
        const overtimeHours = hours - 8;
        return Math.floor((regularHours * rate) + (overtimeHours * rate * 1.5));
    }
    return Math.floor(hours * rate);
}

module.exports = { isValidShift, calculatePay };
