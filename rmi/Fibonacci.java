import java.rmi.*;
public interface Fibonacci extends Remote{
    public int fibonacci(int num) throws RemoteException;

}