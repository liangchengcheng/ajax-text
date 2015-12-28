/**
 * Created by lcc on 15/12/27.
 */
function createxhr(){
    var xhr=null;
    if(window.XMLHttpRequest()){
        xhr=new XMLHttpRequest();
    }else if(window.ActiveXObject){
        try{
            xhr=new ActiveXObject('Msxml2.XMLHTTP');
        }catch(e){
            try{
                xhr=new ActiveXObject('Microsoft.XMLHTTP');
            }catch(e){}
        }
    }
    return xhr;
}