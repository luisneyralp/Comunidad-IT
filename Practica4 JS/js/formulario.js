var Formulario = function() {
    
    var $containerFamiliares = $("#familiares");
    var $btnQuitarFamiliar = $("#btnQuitarFamiliar");

    var iniciarForm = function() {
        $("#form").validate();
    };
    var agregarFamiliar = function() {
        $btnQuitarFamiliar.show();
        var cantidadFamiliares = $containerFamiliares.children().length + 1; //ya le sumo el nuevo..
        var $template = $containerFamiliares.children().first().clone();
        $("#caja1 label", $template).attr("for", "nom-" + cantidadFamiliares);
        $("#caja1 input", $template)
            .attr("id", "nom-" + cantidadFamiliares)
            .attr("name", "nom-" + cantidadFamiliares);
        $("#caja2 label", $template).attr("for", "ape-" + cantidadFamiliares);
        $("#caja2 input", $template)
            .attr("id", "ape-" + cantidadFamiliares)
            .attr("name", "ape-" + cantidadFamiliares);
        $("#caja3 label", $template).attr("for", "opcion-" + cantidadFamiliares);
        $("#caja3 select", $template)
            .attr("id", "opcion-" + cantidadFamiliares)
            .attr("name", "opcion-" + cantidadFamiliares);
        $containerFamiliares.append($template) ;
    };
    var quitarFamiliar = function() {
        var cantidadFamiliares = $containerFamiliares.children().length - 1; //ya le descuento el que voy a quitar..
        if (cantidadFamiliares == 1) {
            $btnQuitarFamiliar.hide();
        }
        $containerFamiliares.children().last().remove();
    };

    //* END:CORE HANDLERS *//

    return {
        init: function() {
            iniciarForm();
        },
        agregarFamiliar: function() {
            agregarFamiliar();
        },
        quitarFamiliar: function() {
            quitarFamiliar();
        }
    };
}();