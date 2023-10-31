function bubble_sort(li) {
    for (var i = 0; i < li.length; i++) {   
        for (var j = 0; j < (li.length - i - 1); j++) { 
            if (li[j] > li[j + 1]) { 
                var temp = li[j] 
                li[j] = li[j + 1] 
                li[j + 1] = temp 
            } 
        } 
    } 
} 