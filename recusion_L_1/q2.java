

class Solution {
   List<List<Integer>> result;

   public void getallpath(int[] nums,int idx,List<Integer> subres)
   {
       if(idx == nums.length)
       {
            result.add(new ArrayList<>(subres));
            return ;
       }
          subres.add(nums[idx]);
          getallpath(nums,idx+1,subres);
          subres.remove(subres.size()-1);
          getallpath(nums,idx+1,subres);    
   }
    public List<List<Integer>> subsets(int[] nums) {
            result= new ArrayList<>();
            List<Integer> sub_res= new ArrayList<>();
            getallpath(nums,0,sub_res);  
            return result;         
    }
}