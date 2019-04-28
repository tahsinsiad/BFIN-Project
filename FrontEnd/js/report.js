var x = 0;
            var y = 0;
            
            var t;
            function calc(obj) {
                var e = obj.id.toString();
                if (e == 'tb1') {
                    x = Number(obj.value);
                    y = Number(document.getElementById('tb2').value);
                } else {
                    x = Number(document.getElementById('tb1').value);
                    y = Number(obj.value);
                }
                z = x * y;
                
                document.getElementById('total').value = z;
  
            }


            function add()
            {
                var a,b;
                var c;
                var i=1;
                

                a=Number(document.getElementById('tb1').value);
                b=Number(document.getElementById('tb2').value);               
                document.getElementById('num').innerHTML= "Product NO: "+i;
                if(a!=0 && b!=0)
                {
                    c=c+(a*b);
                    document.getElementById('num').innerHTML= "Product NO: "+i;
                    document.getElementById('sum').value=c;
                    document.getElementById('tb1').value=0;
                    document.getElementById('tb2').value=0;
                    i++;
                }
                else
                {
                    alert("Please fill this!!");
                    return false;
                }
            }