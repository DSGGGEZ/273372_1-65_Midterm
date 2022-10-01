module.exports ={

    add1 (req,res){
        input = parseInt(JSON.stringify(req.body['input']))
        console.log('input = '+ input)
        output = input + 1
        res.send(output.toString())
    },

    multiply (req,res){
        X = parseInt(JSON.stringify(req.body['X']))
        console.log('X = '+ X)
        output = X * X
        res.send(output.toString())
    },

    LCM (req,res){
        X = parseInt(JSON.stringify(req.body['X']))
        Y = parseInt(JSON.stringify(req.body['Y']))
        console.log('X = '+ X)
        console.log('Y = '+ Y)

        for(i=X+Y;i>0;i--)
        {
            if(Y%i==0 && X%i==0){
                gcd=i;
                break;
            }
        }
        console.log('GCD = '+ gcd)
        mid=(X*Y)
        if(mid<0){
            mid=mid*-1
        }
        lcm = mid/gcd
        res.send(lcm.toString())
    }

    

}