
import Algorithms.utlis.PatternMatching.EuclidAlgo;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;

public class EuclidTest {
    Eculid e = null;

    @Before
    public void init(){
        e = new EuclidAlgo();
    }

    @Test
    public void gcd(){

        Assert.assertArrayEquals(2, e.gcd(10,2));
        Assert.assertArrayEquals(2, e.gcd(22,6));
    }

    @Test
    public void  gcd2Test(){
        Assert.assertArrayEquals(2, e.gcd2(10,2));
        Assert.assertArrayEquals(2, e.gcd2(22,6));
    }
}
