function func(a,b){
var res=a+b;
var h=3600;
var m=60;
var izm1=izm2=izm3='';
    hall=Math.floor(res/3600);
    mall=Math.floor((res%3600)/60);
    sall=(res%3600)%60;
    
    if (hall%10==1 && hall!=11) 
    {izm1='���';}
    else if (hall<5 && hall>1 || hall%10>1 && hall%10<5)
    {izm1='����';}
    else
    {izm1='�����';}
    
    if (mall%10==1 && mall!=11) 
    {izm2='������';}
    else if (mall<5 && mall>1 || mall%10>1 && mall%10<5)
    {izm2='������';}
    else
    {izm2='�����';}
    
    if (sall%10==1 && sall!=11) 
    {izm3='�������';}
    else if (sall<5 && sall>1 || sall%10>1 && sall%10<5)
    {izm3='�������';}
    else
    {izm3='������';}
    
    
return hall+' '+izm1+' '+mall+' '+izm2+' '+sall+' '+izm3;
}

process.stdout.write(func(process.argv[1],process.argv[2]));