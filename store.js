const isWeekend = false;
let isHoliday = true;
let currentTime = 21;

if (isWeekend || isHoliday) {
    return "The store is closed";
} else if (8 <= currentTime && currentTime <= 18) {
    return "The store is open for business";
} else {
    return "The store is closed";
}