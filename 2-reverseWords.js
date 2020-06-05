function rw(str){
    let regex = /^(.{1,} +.{1,})$/
    if(str.match(regex)){
        let split = str.split(' ');
        let reverse = split.reverse();
        let join = reverse.join(' ');

        console.log(join);
    }else{
        console.log('Inputan salah');
    }
}

rw('anjay mabar');