import org.junit.Before;
import org.junit.Test;

import static org.junit.Assert.*;

public class CalculTest {

    public Calcul cal;



    @Before
    public void initTest(){
        cal = new Calcul();



    }



    @Test
    public void plus() {


        assertEquals(16,cal.plus(8,8));
    }

    @Test
    public void minus() {


        assertEquals(1,cal.minus(9,8));

    }

    @Test
    public void um() {

        assertEquals(16,cal.um(4,4));
        assertEquals(-4,cal.um(-1,4));

    }

    @Test
    public void del() {


        assertEquals(4,cal.del(8,2));
        assertEquals(0,cal.del(0,2));
        assertEquals(4,cal.del(8,0));
    }




}