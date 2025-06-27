var  divideString = function(s , k , fill){
    let res =[] ; 
    let groups = 0 ; 
    for(let i =0 ;i<s.length ; i++){
        let m = "" ; 
        m+=s[i]
        if(m.length === k)   {
            res.push(m)
        }
        
        
    }
    return res ; 
}
console.log(divideString("abcdefghi", k = 3, fill = "x")) //["abc","def","ghi"]