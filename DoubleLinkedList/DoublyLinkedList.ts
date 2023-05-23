class MyDDNode<T>{
    private value: T;
    private next: MyDDNode<T> | null;
    private prev: MyDDNode<T> | null;

    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList<T> extends MyDDNode<T>{
    private head: MyDDNode<T> | null;
    private tail: MyDDNode<T> | null;
    private length: number;
  
    constructor(value:T){
        const newNode = new MyDDNode<T>(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    public(value:T){
        const newNode = new MyDDNode<T>(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next - newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this
    }

}