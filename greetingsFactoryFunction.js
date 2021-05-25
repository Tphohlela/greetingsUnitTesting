function greetings() {

    var namesGreeted = {};
    var count = 0;


    
    function greetings1(name,radioBtn){
        var name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

        if( radioBtn === "English" && namesGreeted[name] === undefined){
            namesGreeted[name] = 0;
            count++;
            return 'Hello, ' + name;
        
        }

        else if(radioBtn === "Afrikaans" && namesGreeted[name] === undefined){
            namesGreeted[name] = 0;
            count++;
            return 'Hallo, ' + name;
        }

        else if(radioBtn === "isiXhosa" && namesGreeted[name] === undefined ){
            namesGreeted[name] = 0;
            count++;
            return 'Molo, ' + name
        
        }

        else if(radioBtn === "English" && namesGreeted[name] === 0){
            return 'Hello, ' + name;
        }

        else if(radioBtn === "Afrikaans" && namesGreeted[name] === 0){
            return 'Hallo, ' + name;
        }

        else if(radioBtn === "isiXhosa" && namesGreeted[name] === 0){
            return 'Molo, ' + name;
        }

    }

    
    function getNames(){
        return namesGreeted;
    }
  

    function getCount(){
        return count;
    }

    function noText(name){
        if(name === ""){
            return 'Please write name'

        }

    }

    function noNumber(name){
        if(name === Number(name)){
            return 'Please write name'

        }

    }



    return{

      greetings1,
      noText,
      noNumber,
      getNames,
      getCount,
    
    

    }
   

}