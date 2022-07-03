import java.rmi.*;

public class RMIClient{
    public static void main(String[] args){
        try{
            long start = System.currentTimeMillis();
            Fibonacci fibo = (Fibonacci) Naming.lookup("rmi://localhost:5000/tarun");
            System.out.println(fibo.fibonacci(12));
            long end = System.currentTimeMillis();
            System.out.println("Time taken in ms: "+ (end-start));
        }
        catch(Exception e){
            System.out.println(e);
        }

    }
    
}