$(document).ready(function () {
    $('#commands').DataTable({
        "order": [[0, 'desc']],
        "language": {
            "lengthMenu": "Mostrar _MENU_ comandos",
            "zeroRecords": "No se encontraron comandos con los datos solicitados",
            "info": "Mostrando del _PAGE_ al _PAGES_ de un total de _MAX_ comandos",
            "infoEmpty": "No hay comandos encontrados",
            "infoFiltered": "(_MAX_ comandos consultados)",
            "search": "Buscar: ",
            "paginate": {
                "next": "Siguiente",
                "previous": "Anterior"
            }
        }
    });
});