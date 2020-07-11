const currentWeekNumber = require('current-week-number');

const getWeek = () => {
    
    const date = new Date();
    
    // if Sunday, advance by 1 day to account for the week starting on Monday
    if (date.getDay() === 0)
        date.setDate(date.getDate() + 1);
        
    const week = currentWeekNumber(date);
    const isPickup = week % 2 !== 0;
    
    return { week, isPickup };
};

module.exports.checkSchedule = () => {

    const week = getWeek();
    const is = week.isPickup ? "is" : "is not";
        
    return `Week ${week.week} ${is} a garbage pickup week.`;
};

module.exports.checkPickup = () => {

    const week = getWeek();
        
    return week.isPickup ? 'Yes, it is garbage pickup week.' : 'No, garbage pickup is next week.';
};
