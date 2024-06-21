function outer(){
  let a = '';
  let b = {object: 'value'};

    function inner(a, b) {
        a = 'new';
        b = {newObject: 'new value'};
        b.newObject = 'even newer value';
        console.log(`${a} ${b}`);
    }
  
    inner(a, b);
    console.log(`${a} ${b}`);
  }
  
  outer();



