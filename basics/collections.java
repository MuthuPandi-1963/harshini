package basics;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Stack;

public class collections {
  public static void main(String[] args) {
    String s = "a good   example";
    List<String> strList = new ArrayList<>();
    String word="";
    for (int i = 0; i < s.length(); i++) {
        if(s.charAt(i) == ' '){
            if(word.length() >0){

                strList.add(word);
                word = "";
            }
        }else{
            word+=s.charAt(i);
        }
        
    }
    if(word.length() >0) strList.add(word);
    String ans ="";
    for (int idx = strList.size()-1; idx >=0; idx--) {
        ans+=strList.get(idx);
        ans += (idx == 0) ? "" :" ";
        
    }
    System.out.println(ans);
    System.out.println(strList);
  }  
  

}

class Solution {
    public boolean isValid(String s) {
        if(s.length()%2 == 1) return false;  

        Map<Character,Character> map = new HashMap<>();
        map.put(')', '(');
        map.put(']', '[');
        map.put('}', '{');

        Stack<Character> stack = new Stack<>();

        for(int i =0 ; i < s.length() ; i++){
            if(s.charAt(i) == '(' ||  s.charAt(i) == '[' || s.charAt(i) == '{'){
                stack.push(s.charAt(i));
            }else{
                if(stack.isEmpty()) return false;
                if(stack.peek() != map.get(s.charAt(i))) return false;
                stack.pop();
            }
        }
        return stack.isEmpty() ;
    }
}