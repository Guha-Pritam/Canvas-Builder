$(document).ready(function () {
    /*------------------------------------------------
    To Edit Your Form Heading
    -------------------------------------------------*/
    $("#yourtitle").click(function () {
        $("#your").hide();
        var createhead = $(document.createElement('div'));
        createhead.attr("id", "your1");
        createhead.html('<label id="titleid">' + '<b>Title : </b>' + '</label>' + '<br/>' + '<input id="inputhead" "type=text placeholder="Type Your Choicehead"/>' +
            '<button id="doneid">Done</button>');
        $("#yourhead").append(createhead);
        var get1 = $("#yourtitle").text();
        $("#inputhead").val(get1);
        $("#doneid").click(function () {
            var get = $("#inputhead").val();
            if (get == 0) {
                alert("Cannot Leave Field Blank");
            } else {
                $("#yourtitle").html('<h1>' + get + '</h1>');
                $("#yourtitle").css({
                    "text-align": "center",
                    "font-size": "25px",
                    "color": "white",
                    "cursor": "pointer"
                });
                $("#your1").remove();
                $("#your").show();
                $("#your").css({
                    "background-color": "#F4D4FA",
                    "width": "530px"
                });
                $("#justclickid").hide();
            }
        });
    });
    /*-------------------------------------------------------------------*/
    var MaxInputs = 100; //Maximum Input Boxes Allowed
    /*-------------------------------------------------------------------
    To Keep Track of Fields And Divs Added
    -------------------------------------------------------------------*/
    var nameFieldCount = 0;
    var emailFieldCount = 0;
    var addressFieldCount = 0;
    var checkboxFieldCount = 0;
    var radiobuttonFieldCount = 0;
    var checkboxdivCount = 0;
    var checkbox_sub_para_Count = 0;
    var radiobuttondivCount = 0;
    var radio_sub_para_Count = 0;
    var InputsWrapper = $("#InputsWrapper"); // Input Box Wrapper ID
    // var InputValues=$("#InputValues"); 
    var InputValues = document.getElementById("InputValues");
    var x = InputsWrapper.length; // Initial Field Count
    /*--------------------------------------------------------------
    To Get Fields Button ID
    ----------------------------------------------------------------*/
    var namefield = $("#namebutton");
    var emailfield = $("#emailbutton");
    var addressfield = $("#addressbutton");
    var checkbox = $("#checkboxbutton");
    var radiobutton = $("#radioaddbutton");
    var submit = $("#submit");
    var name = "";
    $(InputsWrapper).sortable(); // To Make Added Fields Sortable
    /*---------------------------------------------------------------
    To Add Name Field
    ----------------------------------------------------------------*/
    $(namefield).click(function () {
        if (x <= MaxInputs) {
            nameFieldCount++;
            $(InputsWrapper).append('<div>' + '<div class="name" id="InputsWrapper_0' + nameFieldCount + '">' + '<input type="text" class="name" name="mytext[]" id="field_' + nameFieldCount + '" placeholder="Name ' + nameFieldCount + '"/>' +
                '<input type="text" class="name" name="mytext[]" id="field_' + nameFieldCount + '" placeholder="Name ' + nameFieldCount + '"readonly/>' + '<button class="removeclass0">x</button>' +
                '<button class="addclass0">+</button>' + '<br>' + '</div>' + '</div>');
            x++;
        }
        return false;
    });
    $("body").on("click", ".removeclass0", function () {
        $(this).parent('div').remove(); // To Remove Name Field
        x--;
        return false;
    });
    $("body").on("click", ".addclass0", function () {
        nameFieldCount++; // To Add More Name Fields
        $(this).parent('div').parent('div').append('<div class="name">' + '<label>Name:' + nameFieldCount + '</label>' + '<input type="text" name="mytext[]" id="field_' +
            nameFieldCount + '" placeholder="Name ' + nameFieldCount + '"/>' + '<button class="removeclass0">x</button>' + '<button class="addclass0">+</button>' + '<br>' +
            '</div>');
        x++;
        return false;
    });
    $("body").on("keyup", ".name", function () {
        return false;
    });


    /*------------------------------------------------
    To Add Email Field
    -------------------------------------------------*/
    $(emailfield).click(function () {
        if (x <= MaxInputs) {
            emailFieldCount++;
            $(InputsWrapper).append('<div>' + '<div class="email" id="InputsWrapper_1' + emailFieldCount + '">' + '<input type="text" class="email" name="myemail[]" id="field_' + emailFieldCount + '" placeholder="Email' + emailFieldCount + '"/>' +
                '<input type="text" class="email" name="myemail[]" id="field_' + emailFieldCount + '" placeholder="Email' + emailFieldCount + '"readonly/>' + '<button class="removeclass1">x</button>' +
                '<button class="addclass1">+</button>' + '<br>' + '</div>' + '</div>');
            x++;
        }
        return false;
    });
    $("body").on("click", ".removeclass1", function () {
        $(this).parent('div').remove(); // To Remove Email Field
        x--;
        return false;
    });
    $("body").on("click", ".addclass1", function () {
        emailFieldCount++; // To Add More Email Field
        $(this).parent('div').parent('div').append('<div class="email">' + '<label>Email:' + emailFieldCount + '</label>' + '<input type="text" name="myemail[]" id="field_' +
            emailFieldCount + '" placeholder="Email' + emailFieldCount + '"/>' + '<button class="removeclass1">x</button>' + '<button class="addclass1">+</button>' + '<br>' +
            '</div>');
        x++;
        return false;
    });
    /*------------------------------------------------
    To Add Address Field
    -------------------------------------------------*/
    $(addressfield).click(function () {
        if (x <= MaxInputs) {
            addressFieldCount++;
            $(InputsWrapper).append('<div>' + '<div class="address" id="InputsWrapper_2' + addressFieldCount + '">' + '<label>Address:' + addressFieldCount + '</label>' + '<p>' +
                '<textarea type="text" class="address" name="myaddress[]" id="field_' + addressFieldCount + '" placeholder="Address' + addressFieldCount + '" />' +
                '<button class="removeclass2">x</button>' + '<button class="addclass2">+</button>' + '</p>' + '<br>' + '</div>' + '</div>');
            x++;
        }
        return false;
    });
    $("body").on("click", ".removeclass2", function () {
        $(this).parent('p').parent('div').remove(); // To Remove Address Field
        x--;
        return false;
    });
    $("body").on("click", ".addclass2", function () {
        addressFieldCount++; // To Add More Address Field
        $(this).parent('p').parent('div').parent('div').append('<div class="address">' + '<label>Address:' + addressFieldCount + '</label>' + '<p>' +
            '<textarea type="text" name="myaddress[]" id="field_' + addressFieldCount + '" placeholder="Address' + addressFieldCount + '"/>' +
            '<button class="removeclass2">x</button>' + '<button class="addclass2">+</button>' + '<br>' + '</p>' + '</div>');
        x++;
        return false;
    });
    /*------------------------------------------------
    To Add Check-Box
    -------------------------------------------------*/
    $(checkbox).click(function () {
        if (x <= MaxInputs) {
            checkboxFieldCount++;
            checkboxdivCount++;
            checkbox_sub_para_Count++;
            $(InputsWrapper).append('<div class="checkbox" id="InputsWrapper_3_' + checkboxdivCount + '">' + '<p class="checkbox_child" id="para' + checkbox_sub_para_Count + '">' +
                '<input type="text" class="text" placeholder="options">' + '</>' + '<input type="checkbox" name="mycheckbox[]" id="field_' + checkboxFieldCount + '" value="CheckBox' +
                checkboxFieldCount++ + '"/>' + '<button class="removeclass3">x</button>'
            );
            x++;
        }
        return false;
    });
    $("body").on("click", ".removeclass3", function () {
        $(this).parent('p').remove(); // To Remove Check-Box
        x--;
        return false;
    });

    /*------------------------------------------------
    To Add Radio-Button
    -------------------------------------------------*/
    $(radiobutton).click(function () {
        if (x <= MaxInputs) {
            radiobuttonFieldCount++;
            radiobuttondivCount++;
            radio_sub_para_Count++;
            $(InputsWrapper).append('<div class="radiobutton" id="InputsWrapper_4_' + radiobuttondivCount + '">' + '<p class="radiobutton_child" id="para' + radio_sub_para_Count +
                '">' + '<input type="text" class="radio" placeholder="options">' + '</>'+ '<input type="radio" name="myradio[]" id="field_' + radiobuttonFieldCount + '" placeholder="Radio_' +
                radiobuttonFieldCount++ + '"/>' + '<button class="removeclass4">x</button>' + '</div>');
            x++;
        }
        return false;
    });
    $("body").on("click", ".removeclass4", function () {
        $(this).parent('p').remove(); // To Remove Radio-Button
        x--;
        return false;
    });
    
    $("#reset").on("click", function () {
        $("#InputsWrapper").empty(); // To Reset All Elements
    });
});

function myFunction() {
    let output = document.getElementById("InputsWrapper");
    document.getElementById("demo").innerHTML = output;
    console.log(output)
}

myFunction();

