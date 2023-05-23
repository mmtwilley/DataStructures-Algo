public class DoubleLinkedList{
    class Node{
        int value;
        Node next;
        Node prev;
        
        Node(int value){
            this.value = value;
        }
    }

    private Node head;
    private Node tail;
    private int length; 

    public DoubleLinkedList(int value){
        Node newNode = new Node(value);
        this.head = newNode;
        this.tail = newNode;
        this.length = 1;
    }

    public void getHead(){
        System.out.println("Head: " + this.head.value);
    }
    public void getTail(){
        System.out.println("Tail: " + this.tail.value);
    }
    public void getLength(){
        System.out.println("Length: " + this.length);
    }

    public void printList(){
        Node temp = this.head;
        while(temp != null){
            System.out.println(temp.value);
            temp = temp.next;
        }
    }

    public void append(int value){
        Node newNode = new Node(value);
        if(length == 0){
            this.head = newNode;
            this.tail = newNode;
        } else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail  = newNode;
        }
        this.length++;
    }

    public Node removeLast(){
        if(this.length == 0){
            return null;
        }
        Node temp = tail;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        } else {
            this.tail = tail.prev;
            this.tail.next = null; 
            temp.prev = null;
        }
        this.length--;
        return temp;
    }

    public void prepend(int value){
        Node newNode = new Node(value);
        if(this.length == 0){
            this.head = newNode;
            this.tail = newNode;
        } else{
            newNode.next = this.head;
            this.head.prev = newhead;
            this.head = newNode;
        }
        length++;
    }

    public Node removeFirst(){
        if(this.length == 0) return null;
        Node temp = this.head;
        if(this.length == 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head = this.head.next;
            this.head.prev = null;
            temp.next = null;
        }
        this.length--;
        return temp;
    }

    public Node get(int index){
        if(index < 0 || index >= length){
            return null;
        }
        Node temp = head;
       if(index < this.length/2){
            for(int i = 0; i < index; i++){
                temp = temp.next;
            }
       } else{
           temp = tail;
           for(int i = this.length -1; i > index; i--){
                temp = temp.prev;
           }
       }

       return temp;
    }


    public boolean set(int index, int value){
        Node temp = get(index);
        if(temp != null){
            temp.value = value;
            return true;
        }
        return false;
    }

    public boolean insert(int index, int value){
        if(index < 0 || index > this.length) return false;
        if(index == 0){
            this.prepend(value);
            return true;
        }
        if(index == this.length){
            this.append(value);
            return true;
        }
        Node newNode = new Node(value);
        Node before = get(index-1);
        Node after = before.next;
        newNode.prev = before;
        newNode.next = after;
        before.next = newNode;
        after.prev = newNode;
        this.length++;
       return true;
    }


    public Node remove(int index){
        if(index < 0 || index >= this.length) return null;
        if(index == 0) return this.removeFirst();
        if(index == this.length - 1) return this.removeLast();
        Node temp = this.get(index);
        temp.next.prev = temp.prev;
        temp.prev.next = temp.next;
        temp.next = null;
        temp.prev = null;
        this.length--;
        return temp;
    }

}