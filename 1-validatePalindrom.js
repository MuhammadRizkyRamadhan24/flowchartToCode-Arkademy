const palindrom = (str) => {
    if(str.length <= 1){
        console.log('Inputan Salah');
        return false;
    }
    
    let lower = str.toLowerCase();
    let split = lower.split('');
    let reverse = split.reverse();
    let join = reverse.join('');

    if(join == str){
        console.log('PALINDROM');
        return true;
    }else{
        console.log('BUKAN PALINDROM');
        return false;
    }
}

palindrom('');