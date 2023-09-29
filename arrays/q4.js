
//https://www.interviewbit.com/problems/max-min-05542f2f-69aa-4253-9cc7-84eb7bf739c4/
let min=A[0];
let max=A[0];

for(let i=0;i<A.length;i++)
{
    if(min>A[i])
    {
        min=A[i];
    }
    if(max<A[i])
    {
        max=A[i];
    }
}

return min+max;

