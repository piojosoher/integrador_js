const valor = 200;


function limpiarRegistros (){
    let bcantidad = parseInt(document.getElementById('cantidadTickets').value);
    let bcategoria = parseInt(document.getElementById('categoriaSelect').value);
    

    var mensaje;
    var opcion = confirm("Esta seguro que desea borrar los campos?");
    if (opcion == true) {
        mensaje = "Borrado!";
        window.location.reload()
        
	} else {
	    mensaje = "Jeje, te arrepentiste";
        $("#cantidadTickets").val(bcantidad);
        $("#categoriaSelect").val(bcategoria);
	}
	alert(mensaje);
}


function compraResumen (){
    
    let cantidad = document.getElementById('cantidadTickets').value;
    let categoria = parseInt(document.getElementById('categoriaSelect').value);
    let importe = 0;
    
    if (cantidad <= 0 ){
        alert ("Debe ingresar una cantidad mayor a 0");  
    }

    if (cantidad > 0 ) { 
        //alert(typeof(categoria));
        switch(categoria){
            case 0:
                importe = (cantidad * valor);
                break;
            case 1:
                importe = (cantidad * valor) * 0.2;
                break;
            case 2:
                importe = (cantidad * valor) * 0.5;
                break;
            case 3:
                importe = (cantidad * valor) * 0.85;
                break;
            default:
                alert("Seleccione una categoria");
                break;
        }

        document.getElementById("totalPago").innerHTML = importe;

    }

}