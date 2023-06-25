class QNode<T>{
    public value:T;
    public next: QNode<T>| null;
    
    constructor(value:T){
        this.value = value;
        this.next = null;
    }
}

class Queue<T>{
    public value;
    public first: QNode<T> | null;
    public last: QNode<T> | null;
    public length: number;


    constructor(value:T){
        const newNode = new QNode<T>(value);
        this.first = newNode;
        this.last = newNode;
    }

    enqueue(value:T){
        const newNode = new QNode<T>(value);
        if(this.length === 0){
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last!.next = newNode;
            this.last = newNode;
        }
        this.length++;
        return this;4
    }

    dequeue(value:T){
        if(this.length === 0) return undefined;
        let temp = this.first;
        if(this.length === 1){
            this.first = null;
            this.last = null;
        } else{
            this.first = this.first!.next;
            temp!.next =null;
        }
        this.length--;
        return temp;
    }
}