public class Running{
    
    public static void main(Str[] args){
        printItems(10);
    }

    public static void printItems(int n){
        for(int i = 0; i < n; i++){
            System.out.println(i);
        }
    }

    public static void dropRunningPrintItems(int n){
        for(int i = 0; i < n; i++){
            System.out.println(i);
        }
        for(int j = 0; j < n; j++){
            System.out.println(i);
        }
    }

    public static void squaredPrintItems(int n){
        for(int i = 0; i < n; i++){
            for(int j = 0; j < n; j++){
                System.out.println(i + " "  + j);
            }
        }
    }

    public static void dominatePrintItems(int n){
        for(int i = 0; i < n; i++){
            for(int j = 0; j < n; j++){
                System.out.println(i + " "  + j);
            }
        }

        for(int k = 0; k < n; k++){
            System.out.println(i);
        }
    }


}

// The function printItems is O(N)
// The second function is also O(N) due to the fact that it's running parallel to the orginal loop
// The third line is O(n^2) which grows much faster than the first two functions 
// The fourth function is where the expontial part grows much faster than the single for loop so we drop it