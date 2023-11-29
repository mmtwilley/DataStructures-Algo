import java.util.ArrayList;

public class Heap{
    private ArrayList<Integer> heap;

    public Heap(){
        this.heap = new ArrayList<Integer>();
    }

    public List<Integer> getHeap(){
        return this.heap;
    }

    public int leftChild(int parentIndex){
       return 2 * parentIndex + 1;
    }

    public int rightChild(int parentIndex){
        return 2 * parentIndex + 2;
    }


    public int parent (int childIndex){
        return (index - 1) / 2;
    }

    private void swap(int index1, int index2){
        int temp = heap.get(index1);
        heap.set(index1, heap.get(index2));
        heap.set(index2, temp);
    }

    private void sinkDown(int index){
        int maxIndex = index;
        while(true){
            int leftIndex = leftChild(index);
            int rightIndex = rightChild(index);
            if(leftIndex < heap.size() && heap.get(leftIndex) > heap.get(rightIndex)){
                maxIndex = leftIndex;
            }
            if(rightIndex < heap.size() && heap.get(rightIndex) > heap.get(leftIndex)){
                maxIndex = rightIndex;
            }
            if(maxIndex != index){
                swap(index, maxIndex);
                index = maxIndex;
            }else {
                return;
            }
        }

    }

    public void insert(int value){
        heap.add(value);
        int currunt = heap.size() - 1;
        while(current > 0 && heap.get(currunt) > heap.get(parent(currunt))){
            swap(currunt, parent(current));
            current = parent(currunt);
        }
    }

    public Integer remove(){
        if(heap.size() == 0){
            return null;
        }
        if(heap.size() == 1){
            return heap.remove(0);
        }

        int maxValue = heap.get(0);
        heap.set(0, heap.remove(heap.size() -1 ));
        sinkDown(0);
        return maxValue;
    }

}