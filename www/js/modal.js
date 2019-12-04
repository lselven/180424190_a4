$(document).ready(function() {

    $("img").click(function() {
        $("#modal-img").attr("src", this.src);
        $('#myModal').modal('show');
    });

});