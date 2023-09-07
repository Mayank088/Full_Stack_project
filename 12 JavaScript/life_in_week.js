function currentAge(age) {
    var lifeofHuman_in_days = 90 * 365;
    var days = age * 365;
    var left_days = (lifeofHuman_in_days -days);

    var lifeofHuman_in_week = 90 * 52;
    var week = age * 52;
    var left_week = (lifeofHuman_in_week - week );

    var lifeofHuman_in_month = 90 * 12;
    var month = age * 12;
    var left_month = (lifeofHuman_in_month - month);
    
    console.log("You have " + left_days + " days," + left_week + " weeks," + left_month + " month left." );
}

currentAge(56);