package basics;

public class bank {

    public static void main(String[] args) {

        int[] num = new int[10];
        BankAccount[] accounts = new BankAccount[10];
        
        for (int i = 0; i < 10; i++) {
            accounts[i] = i%2==0 ? new CurrentAccount() : new SavingsAccount();
            accounts[i].createAccount("Ram"+i, "ram123"+i+"@gmail.com", "12345"+i);
            accounts[i].ShowDetails();
            System.out.println("\n \n");
        }
        
        accounts[8].email = "fsdjgdgjsjs";
        accounts[8].ShowDetails();
        // System.out.println(BankAccount.uniqueId);
        accounts[2].Deposit(10000);
    }
}

abstract  class BankAccount{

    protected   static  int uniqueId;
    protected final String ACC_TYPE;

    String name  ;
    private String accNo;
    private final  String bankName = "UBI";
    private final  String branch = "KK nagar";
    private final  String IFSC_code = "UBIKK01";
    String email;
    String number;
    protected  double Balance = 0;

    public BankAccount(String name) {
        this.ACC_TYPE = name;
    }

    abstract  int Deposit(double amount);
    
    

    
    void createAccount(String name, String email,String number){
        this.name = name;
        this.email = email;
        this.number = number;
        this.accNo = generateAccountNumber();

    }

    private String generateAccountNumber(){
        String AccNo = "";
        for (int i = 0; i < 10; i++) {
            
            char digit = Double.toString(Math.floor(Math.random()*10)).charAt(0);
            
            AccNo+=digit;
        }
        
        return  this.bankName+AccNo+uniqueId;

    }
    void ShowDetails(){
        System.out.println("Unique  ID : "+ uniqueId );
        System.out.println("name : " + this.name) ;
        System.out.println("email : " + this.email) ;
        System.out.println("number : " + this.number) ;
        System.out.println("Bank Name " + this.bankName) ;
        System.out.println("Branch : " + this.branch) ;
        System.out.println("IFSC CODE : " + this.IFSC_code) ;
        System.out.println("Acc No : " + this.accNo) ;
        System.out.println("Account Type : "+ACC_TYPE);
    }
    protected  boolean checkDeposit(double amount,double DepositLimit){
        if(amount <= 0){
            System.out.println("You are Enter an Invalid  Deposit Amount");
            return  false;
        }
         if(amount > DepositLimit){
            System.out.println(" Deposit Amount limit exceeded");
            return  false;
        }
        return true;
    }
    
}
class SavingsAccount extends  BankAccount{


    private final  int DEPOSIT_LIMIT_PER_DAY = 100000;
    // private final int DEPOSIT_LIMIT_TOTAL = 1000000;

    private final int WITHDRAW_LIMIT_PER_DAY = 30000; 
    private final  String TYPE = "SAVINGS";
    

    // public SavingsAccount(String name, String accNo, String bankName, String branch, String IFSC_code, String email, String number) {
    //     this.name = name;
    //     this.accNo = accNo;
    //     this.bankName = bankName;
    //     this.branch = branch;
    //     this.IFSC_code = IFSC_code;
    //     this.email = email;
    //     this.number = number;
    // }
    
    public  SavingsAccount(){
        super("Savings");
        BankAccount.uniqueId++;
    }
    
    public int Deposit(double amount){
        if(!this.checkDeposit(amount, this.DEPOSIT_LIMIT_PER_DAY)){
            System.out.println("You are enter an invalid deposit amount");
            return 0;
        }
        this.Balance += amount;
        System.out.println("Deposited Amount : "+amount);
        System.out.println("Balance Amount : " + this.Balance);
        return 0;
    }



}
class CurrentAccount extends  BankAccount{
    private  final  String ACC_TYPE = "Current";

    private final   int DEPOSIT_LIMIT_PER_DAY = 50000;
    private final  int DEPOSIT_LIMIT_TOTAL = 500000;
    // private  int WITHDRAW_LIMIT_PER_DAY = 10000; 

    // public SavingsAccount(String name, String accNo, String bankName, String branch, String IFSC_code, String email, String number) {
    //     this.name = name;
    //     this.accNo = accNo;
    //     this.bankName = bankName;
    //     this.branch = branch;
    //     this.IFSC_code = IFSC_code;
    //     this.email = email;
    //     this.number = number;
    // }
    
    public  CurrentAccount() {
        super("Current");
        BankAccount.uniqueId++;

    }
    @Override
    public int Deposit(double amount){
        if(!this.checkDeposit(amount, this.DEPOSIT_LIMIT_PER_DAY)){
            System.out.println("You are enter an invalid deposit amount");
            return 0;
        }
        this.Balance += amount;
        System.out.println("Deposited Amount : "+amount);
        System.out.println("Balance Amount : " + this.Balance);
        return 0;
    }

    
}

