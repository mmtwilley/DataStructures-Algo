function boooo(n:Array<number>):void{
    for(let i = 0; i < n.length; i++){
        console.log('boooooo!')
    }
}

boooo([1,2,3,4,5]); // has space of o(1);

function arrayOfHiNTimes(n:number):string[]{
    let hiArray:Array<string> = [];
    for(let i = 0; i < n; i++){
        hiArray[i] = 'hi';
    }
    return hiArray;
}

arrayOfHiNTimes(6); // this has a space of complexity of O(n);