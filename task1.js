function res(s){
result='';
    for (i=s.length-1;i>=0;i--){
        result+=s[i];
    }
    
    if (s==result) {
    return 'YES;;
    }
    else {
        return 'NO';
    }
}

process.stdout.write(res(process.argv[1]));