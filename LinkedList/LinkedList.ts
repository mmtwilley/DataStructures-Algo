class MyNode <T> {
    public value!: T;
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
      const newNode = new MyNode<T>(value);
      this.head = newNode;
      this.tail = this.head;
      this.length = 1;
    }

    public printList(): void {
        let temp = this.head;
        while (temp !== null) {
          console.log(temp.value);
          temp = temp.next;
        }
    }
      

    public getHead(){
        console.log(`Head: ${this.head?.value}`)
    }
    public getTail(){
        console.log(`Tail: ${this.tail?.value}`)
    }
    public getLength(){
        console.log(`Length: ${this.length}`)
    }

    public push(value:T){
        let newNode = new MyNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail!.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this; 
    }

    public pop(){
        if(this.length === 0) return null;
        let temp = this.head;
        let pre = this.head;

        while(temp!.next){
            pre = temp;
            temp = temp!.next; 
        }
        this.tail = pre;
        this.tail!.next = null;
        this.length--;
        if(this.length == 0){
            this.head = null;
            this.tail = null;
        }
        return temp;
    }


    public unshift(value:T){
        let newNode = new MyNode(value);
        if(this.length === 0){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head = newNode;
        }
       
        this.length++;
        return this;
    }

    public shift(){
        if(this.length === 0) return undefined;
        let temp = this.head;
        this.head = this.head!.next;
        temp!.next = null;
        this.length --;
        if(this.length === 0){
            this.tail = null;
        }
        return temp;
    }

    public get(index:number){
        if(index < 0 || index >= this.length){
            return undefined;
        }
        let temp = this.head;
        for(let i = 0; i < index; i++){
            temp = temp!.next;
        }
        return temp;
    }

    public set(index:number, value:T){
        let temp  = this.get(index);
        if(temp){
            temp.value = value;
            return true;
        }
        return false;
    }

    public insert(index:number,value:T){
        let newNode = new MyNode(value);
        if(index < 0 || index > this.length){
            return false;
        }
        if(index === 0){
            return this.unshift(value);
        }
        if(index === this.length){
            return this.push(value);
        }
        let temp = this.get(index - 1);
        newNode.next = temp!.next;
        temp!.next = newNode;
        this.length++;
        return true;
    }

    public remove(index:number){
        if(index===0) return this.shift;
        if( index === index-1) return this.pop();
        if(index < 0 || index >= this.length) return undefined;
        const before = this.get(index-1);
        const temp = before!.next;
        before!.next = temp!.next;
        temp!.next = null;
        this.length --;
        return temp;

    }

    public reverse(){
        let temp = this.head;
        this.head = this.tail;
        this.tail = temp;
        let before = temp;
        let after = temp!.next;
        for(let i = 0; i < this.length; i++){
            after = temp!.next;
            temp!.next = before;
            before = temp;
            temp = after;
        }
    }


}
  
//Testing

let testing = new LinkedList<number>(1);
testing.push(2);
testing.push(3);
testing.reverse();
console.log(testing);


