$(document).ready(function() {

    function openmodal() {
        $("#exampleModal").modal({ backdrop: true });

    };

    $("#test").click(function() {
        $("#exampleModal").modal({ backdrop: true });
    });
});