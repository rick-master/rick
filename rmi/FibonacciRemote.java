import java.rmi.*;
import java.rmi.server.*;

public class FibonacciRemote extends UnicastRemoteObject implements Fibonacci{
    FibonacciRemote() throws RemoteException{
        super();
    }
    public int fibonacci(int num){
        int arr[] = new int[num+1];
        arr[0] = 0;
        arr[1] = 1;
        arr[2] = 1;
        if(num<=2){
            return arr[num];
        }
        for(int i = 3;i<=num;i++){
            arr[i] = arr[i-1] + arr[i-2];
        }
        return arr[num];
    }
}