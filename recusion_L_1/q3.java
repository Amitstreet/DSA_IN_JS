 static List<List<Integer> mpath;

    public void getallpath(int [][]mat,int m,int n,List<Integer> path)
    {
               if(m==mat.length || n== mat[0].length)
               {
                   return;
               }
 
               if(m==matlength-1 && n==mat[0].length-1)
               {
                  
                  path.add(mat[m][n]);
                  mpath.add(new ArrayList<>(path));
                  path.remove(path.size()-1);
               }


                 path.add(mat[m][n]);
                 getallpath(mat,m+1,n,path);      
                 getallpath(mat,m,n+1,path);
                 path.remove(list.size()-1);



    }
    public static int[][] printAllPaths(int[][] mat, int m, int n) {
        
        path= new ArrayList<>();
        List<Integer> list= new ArrayList<>();
        getallpath(mat,0,0,list);
        
        int[][] arr1=new int[list.size()][list.get(0).size()];
        for(int i=0;i<arr1.size();i++)
        {
         for(int j=0;j<arr1[0].size();j++)
         {
             arr1[i][j]= path.get(i).get(j);
         }
        }
        return arr1;

    }