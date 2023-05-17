public class LinkedList{
    private Node head;
    private Node tail;
    private int length;


    public LinkedList(int value){
        Node newNode = new Node(value);
        head = newNode;
        tail = newNode;
        length = 1;
    }

    class Node{
        public int value;
        public Node next;
    
        public Node(int value){
            setValue(value);
        }
    
        public int getValue(){
            return this.value;
        }
    
        public void setValue(int value){
            this.value = value;
        }
    }


    public void printList(){
        Node temp = head;
        while(temp != null){
            System.out.println(temp.value);
            temp = temp.next;
        }
    }

    public void getHead(){
        System.out.println("Head: " + head);
    }

    public void getTail(){
        System.out.println("Tail: " + tail);
    }

    public void getLength(){
        System.out.println("Length" + length);
    }

    public void append(int value){
        Node newNode = new Node(value);
        if(length == 0){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            this.tail = newNode;
        }
        length++;
    }

    public Node removeLast(){
        if(this.length == 0) return null;
        Node temp = this.head;
        Node pre = this.head;

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

    public void prepend(int value){
        Node newNode = new Node(value);
        if (this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        }
    
        newNode.next = this.head;
        this.head = newNode;

        length++;
    }

    public Node removeFirst(){
        if(this.length == 0) return null;
        Node temp = this.head;
        this.head = this.head.next;
        temp.next = null;
        length--;
        if(length == 0){
            tail = null;
        }
        return temp;
    }

    public Node get(int index){
        if(index < 0 || index>= length){
            return null;
        }
        Node temp = this.head;
        for(int i = 0; i < index; i++ ){
            temp = temp.next;
        }
        return temp;
    }

    public boolean set(int index, int value){
        Node temp = this.get(index);
        if(temp.value != value){
            temp.value = value;
            return true;
        }

        return false;
    }
 
}