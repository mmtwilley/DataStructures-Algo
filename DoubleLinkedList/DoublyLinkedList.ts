class MyDDNode<T>{
    public value: T;
    public next: MyDDNode<T> | null;
    public prev: MyDDNode<T> | null;

    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }

}

class DoublyLinkedList<T>{
    private head: MyDDNode<T> | null;
    private tail: MyDDNode<T> | null;
    private length: number;
  
    constructor(value:T){
        const newNode = new MyDDNode<T>(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    public push(value:T){
        const newNode = new MyDDNode<T>(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail!.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

    public pop(value:T){
        if(this.length === 0) return undefined;
        let temp = this.tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        } else{
            this.tail = this.tail!.prev;
            this.tail!.next = null;
            temp!.prev = null;
        }
        this.length--;
        return temp;
    }

    public unshift(value:T){
        const newNode = new MyDDNode<T>(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head!.prev = newNode;
            this.head = newNode;

        }
        this.length++;
        return this
    }

    public shift(value:T){
        if(this.length === 0)return undefined
        let temp = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        } else{
            this.head = this.head!.next;
            this.head!.prev = null;
            temp!.next = null;
        }
        this.length--;
        return temp;
    }

    public get(index:number){
        if(index < 0 || index >= this.length) return undefined;
        let temp = this.head;
        if(index < this.length/2){
            for(let i = 0; i < index; i++){
                temp = temp!.next;
            }
        } else{
            temp = this.tail;
            for(let i = this.length-1; i > index; i--){
                temp = temp!.prev;
            }
        }
        return temp;
    }

    public set(index:number, value:T){
        let temp = this.get(index);
        if(temp){
            temp.value = value;
            return true
        }
        return false;
    }

    public insert(index:number, value:T){
        if(index === 0) return this.unshift(value);
        if(index === this.length) return this.push(value);
        if(index < 0 || index > this.length) return false;
        const newNode = new MyDDNode<T>(value);
        const before = this.get(index -1);
        const after = before

    }


}