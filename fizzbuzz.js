function factory (){
    let countNUmber = ()=>{
        let fizzBuzz = [];
        for(let i = 1 ; i < 101 ; i++){
            if(i % 3 === 0 && i % 5 === 0){
                fizzBuzz.push('fizzbuzz');
            }
           else if( i % 3 === 0){
            fizzBuzz.push('fuzz');
         }
        else if(i % 5 === 0){
            fizzBuzz.push('buzz');
         }
         
         
         else{
            fizzBuzz.push(i);
         }
         
        }
        console.log(fizzBuzz)
        return fizzBuzz;

        
    }

    return {
 countNUmber
    }
}

