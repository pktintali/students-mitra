function getDevice(){
    if( ( window.innerWidth <= 800 )){
        return 'Mobile';
    }else{
        return "PC";
    }
}

export default getDevice;