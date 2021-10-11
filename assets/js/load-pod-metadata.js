$(document).ready(function () {
    $('.ui.dropdown')
        .dropdown()
    ;

    $('.menu .item')
        .tab()
    ;

    $('.message .close')
        .on('click', function() {
            $(this)
                .closest('.message')
                .transition('fade')
            ;
        })
    ;
    $('.sidebar')
        .sidebar({
            dimPage: false,
            closable: false,
            scrollLock: true,
            debug: false,
            verbose: false,
            delaySetup: true

        })
        .sidebar('attach events', '#vk-header-icon-a')
        .sidebar('setting', 'transition', 'push');

    $("#fetch-button").click(function (e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "/api/pollBackend",
            dataType: "json",
            data: {
                backend_url: $("#backend-url").val(),
                backend_port: $("#backend-port").val()
            },
            success: function (result) {
                document.getElementById("json-output-content").value = JSON.stringify(result, null, 4);
            },
            error: function (result) {
            }
        });
    });
});

