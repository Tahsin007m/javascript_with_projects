// SWITCH = an efficient replacement for multiple else if statements

let day = 1;

switch(day){
    case 1:
        console.log(`It is Monday`);
        break; // Stops execution
    case 2:
        console.log(`It is Tuesday`);
        break;
    case 3:
        console.log(`It is Wedday`);
        break;
    case 4:
        console.log(`It is Thursday`);
        break;
    case 5:
        console.log(`It is Friday`);
        break;
    case 6:
        console.log(`It is Satday`);
        break;
    case 7:
        console.log(`It is Sunday`);
        break;
    default:
        console.log(`${day} is not a valid day!`); // Runs if no case matches
}
