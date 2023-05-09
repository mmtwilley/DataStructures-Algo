public class SpaceComplexity{

    public static vois main(Str[] args) {

        boooo(new int[]{1,2,3,4,5});// has space of o(1);
        
        arrayOfHiNTimes(6); // this has a space of complexity of O(n);
    }

    public static void boo(int[] n){
        for(int i = 0; i < n.length; i++){
            System.out.println("boooooo!");
        }
    }

    public static str[] arrayOfHiNTimes(int n){
        str[] hiArray = new ArrayList();

        for(let i = 0; i < n; i++){
            hiArray[i] = "hi";
        }

        return hiArray;
    }

}