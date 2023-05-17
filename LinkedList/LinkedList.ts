class MyNode<T> {
    public value: T;
    public next: MyNode<T> | null;
  
    constructor(value: T) {
      this.setValue(value);
      this.next = null;
    }

    public getValue(){
        return this.value;
    }

    public setValue(value:T){
        this.value = value;
    }
}
  
class LinkedList<T> {
    private head: MyNode<T> | null;
    private tail: MyNode<T> | null;
    private length: number;
  
    constructor(value: T) {
      const newNode = new MyNode(value);
      this.head = newNode;
      this.tail = newNode;
      this.length = 1;
    }

    public printList(){
        let temp = this.head;
        while(temp != null){
            console.log(temp.value);
            temp = temp.next;
        }
    }

    public getHead(){
        console.log(`Head: ${this.head}`)
    }
    public getTail(){
        console.log(`Tail: ${this.tail}`)
    }
    public getLength(){
        console.log(`Length: ${this.length}`)
    }

    public append(value:T){
        let newNode = new MyNode(value);
        if(length == 0){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        length++;
    }

    public removeLast(){
        if(this.length == 0) return null;
        let temp = this.head;
        let pre = this.head;

        while(temp.next != null){
            pre = temp;
            temp = temp.next; 
        }
        this.tail = pre;
        this.tail.next = null;
        length--;
        if(length == 0){
            head = null;
            tail = null;
        }
        return temp;
    }



}
  
