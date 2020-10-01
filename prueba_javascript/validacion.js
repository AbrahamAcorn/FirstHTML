function validarFormulario(){
    var dt=document.getElementById('caja_contraseña').value;
    if (dt==null || dt.lenght==0 || /^\s+$/.test(dato)){
        return false;
    }

    var semt=document.getElementById('semestre');
    var indx=semt.selectedIndex;
    var opc=semt.options[indx].value;

    console.log(opc);
    if(opc==2){
        console.log("opcion 2");
    }

    var control=document.getElementById('num_control').value;
    if(isNaN(num_control)){
        return false;
    }

    return true
}

