package basics;

import java.util.Scanner;

public class learn {
    public static void main(String[] args) {
        System.out.print("Hello world \n");
        byte b = -128;
        short s = 3200;
        int n = Integer.MAX_VALUE ;

        double powers = Math.pow(8, 3);
        System.out.println(b);
        System.out.println(n);
        System.out.println(powers);

        char c = 'd';
        String a = "apple";
        System.out.println(a.charAt(4));

        boolean isActive = true;
        // isActive = false;
        try (Scanner scan = new Scanner(System.in)) {
            System.out.print("enter a name :");
            String name = scan.nextLine();
            
            System.out.println("Welcome , "+name );
            System.out.println(s+c+" "+isActive);
        }

    }
}
