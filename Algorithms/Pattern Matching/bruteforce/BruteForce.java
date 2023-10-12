import java.util.Arrays;

/**
 * Brute force Algothering<Br>
 *
 */
public class BruteForce {

    /**
     *
     * This method searches for the pattern into an aray and returns the index of that matches
     * If no match is found -1 is returned
     * array = adcdef
     * pattern = def ->  4
     * @param array
     * @param pattern
     * @return
     */
    public int firstMatch(char[] array, char[] pattern){
        for(int a = 0;a  <= array.length - pattern.length; a++){
            for(int p = 0; p < pattern.length; p++){
                if(array[a + p] != pattern[p])break;
                if(p == pattern.length-1) return a;
            }
        }
        return -1;
    }

    /**
     * This method searchs for a pattern into an array and return an array of int indexes of the elements found
     *
     * @param array
     * @param pattern
     * @return an array
     */

    public int[] everyMatch(char[] array, char[] pattern){
        int[] found = new int[array.length];
        Arrays.fill(found, -1);
        int index = 0;
        for(int a = 0;a  <= array.length - pattern.length; a++){
            for(int p = 0; p < pattern.length; p++){
                if(array[a + p] != pattern[p])break;
                if(p == pattern.length-1){
                    found[index++] = a;
                }
            }
        }
        return found;
    }
}
