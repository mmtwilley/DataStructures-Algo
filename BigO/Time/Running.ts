
// The function printItems is O(N)


const printItems = (n:number):void => {
    for(let i = 0; i < n; i++){
        console.log(i);
    }
}

const dropRunningPrintItems = (n:number):void => {
    for(let i = 0; i < n; i++){
        console.log(i);
    }

    for(let j = 0; j < n; j++){
        console.log(j)
    }
}

const squaredPrintItems = (n:number):void => {
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i + " "  + j)
        }
    }
}

const squaredDomPrintItems = (n:number):void => {
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            console.log(i + " "  + j)
        }
    }
    for(let j = 0; j < n; j++){
        console.log(j)
    }
}

printItems(10);