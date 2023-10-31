function insertion_sort(li, n)  
{  
    let i, val, j;  
    for (i = 1; i < n; i++) 
    {  
        val = li[i];  
        j = i - 1;  
        while (j >= 0 && li[j] > val) 
        {  
            li[j + 1] = li[j];  
            j = j - 1;  
        }  
        li[j + 1] = val;  
    }  
}  