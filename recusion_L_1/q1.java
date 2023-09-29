//  List<String> res;
    
    public void getall(String s, int index, String ans)
    {
        if(index==s.length())
        {
            if(ans.length()==0)
            {
                return ;
            }
            res.add(ans);
            return;
        }
        
        getall(s,index+1,ans+s.charAt(index));
        getall(s,index+1,ans);
        
    }
    
    public List<String> AllPossibleStrings(String s)
    {
        
        
        res = new ArrayList<>();
             getall(s,0,"");
             Collections.sort(res);
         return res;
        
        
    }


    //get method

     public List<String> getallstring(String s, int idx)
    {

        if(idx == s.length())
           {
            List<String> Lis=  new ArrayList<>();
            Lis.add("");
            return Lis;
            }
            
            List<String> lis_1= getallstring(s,idx+1);
            int n= lis_1.size();
            for(int i=0;i<n;i++)
            {
                String new_str=s.charAt(idx)+ lis_1.get(i);
                lis_1.add(new_str);
            }
            
            return lis_1;
    }
    public List<String> AllPossibleStrings(String s)
    {
                List<String> s1=getallstring(s,0);
                Collections.sort(s1);
                s1.remove(0);
                 return s1;
        
    }