console.log('name is', name);
const name = 'Tom';
// name = 'tom';
console.log('name is ', name);


// Temporal Dead Zone(TDZ)
// TDZ = an area where you can not access a variable untill it is initialized

// ReferenceError

{
    // === name variable's TDZ started here
    //
    console.log(name);
    //
    //
    let name = "tapascript";// name variable's TDZ ends here
    //
    //
    //
}


