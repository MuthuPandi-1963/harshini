package basics;

public class oops {
    public static void main(String[] args) {
        User user1 = new User("raj");
        System.out.println(user1.username);
       
        User user2 = new User();
        user2.username = "sam";
        System.out.println(user2.username);
        
        System.out.println(User.class);
        System.out.println(user1.toString());
        System.out.println(user2.toString());
        System.out.println(user1.username);

        System.out.println(user1.getClass() == user2.getClass());
        user1.enterDetails("ram123@gmail.com");
    }
}

class User{
    String username ="guest";
    String password;
    String email;
    int age;
    char bloodGroup;

    User(String name){
        this.username = name;
        System.out.println("triggered object created");
    }

     User() {
        System.out.println("empty object created");
    }
    
    void enterDetails(String email){
        this.email = email;
        this.ShowDetails(10);

    }

    void ShowDetails(int i){
        System.out.println("user Details");
        System.out.println("Email :"+email  );
        System.out.println("Email :"+email  );
        System.out.println("Email :"+email  );
        System.out.println("Email :"+email  );
        System.out.println("Email :"+email  );
    }
    static  void ShowDetails(int i , int j){
        // User.ShowDetails(i, j);
        System.err.println("ok");
    }
}