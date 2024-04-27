$("#ConvertorINPUT").on("input", function() {
    var binary = $(this).val();

    if (/[^01]/.test(binary)) {
        alert("Please enter only binary numbers (0 or 1).");
        $(this).val(binary.replace(/[^01]/g, ''));
    }
})

$("#ConvertBTN").click(function() {
    var binary = $("#ConvertorINPUT").val();
    if (binary === '') {
        alert("Please enter a binary number.");
        return;
    }

    var decimal = parseInt(binary, 2);
    $("#ResultINPUT").val(decimal);
});