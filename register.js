var check = (function () {
    let num1 = document.getElementById("num1");
    let num2 = document.getElementById("num2");


    num1.innerText = Math.floor(Math.random() * 10);
    num2.innerText = Math.floor(Math.random() * 10);

    function cap() {


        let number1 = num1.innerText;
        let number2 = num2.innerText;

        let input_val = document.getElementById("input_val");

        let sum_result = parseInt(number1) + parseInt(number2);

        let res = parseInt(input_val.value);

        console.log(res)
        console.log(sum_result)
        if (res == sum_result) {
            alert("Captcha answer is correct.");
            return true;

        } else {
            alert("Wrong answer. Try again.");
            return false;
        }

    }


    function storedata() {
        var fn = $('#fname').val();
        var ln = $('#lname').val();
        var mo = $('#mobile').val();
        var ad = $('#adhar').val();
        var pn = $('#pan').val();
        console.log(fn, ln, mo, ad, pn)
        var ge = [];
        $('div input[type=radio]').each(function () {
            if ($(this).is(":checked")) {
                ge.push($(this).attr('value'));
            }
        });
        console.log(ge[0])
        var st = $('#state').val();
        var ct = $('#city').val();
        var ad = $('#address').val();
        var cn = $('#country').val();

        console.log(st, ct, ad, cn)

    }

    jQuery.validator.addMethod("noSpace", function (value, _element) {
        return value == '' || value.trim().length != 0;
    }, "Spaces not allowed.");

    var registrationForm = $('#registration');
    if (registrationForm.length) {
        registrationForm.validate({
            rules: {
                //username is the name of the textbox
                pic: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },
                adhar: {
                    required: true
                },
                pan: {
                    required: true,
                },
                fname: {
                    required: true,
                    noSpace: true
                },
                lname: {
                    required: true,
                    noSpace: true
                },
                gender: {
                    required: true
                },
                hobbies: {
                    required: true
                },
                country: {
                    required: true
                },
                state: {
                    required: true
                },
                city: {
                    required: true
                },
                mobile: {
                    required: true
                },
                address: {
                    required: true
                }
            },
            messages: {
                pic: {
                    //error message for the required field
                    required: 'Please upload your picture.'
                },
                email: {
                    required: 'Please enter your Email Address!',
                    //error message for the email field
                    email: 'Please enter valid email!'
                },
                adhar: {
                    required: 'Please enter your Adhar Number.'
                },
                mobile: {
                    required: 'Please enter your Mobile Number.'
                },
                pan: {
                    required: 'Please enter your Pan Number.',
                },
                hobbies: {
                    required: 'Select atleast one.'
                },
                fname: {
                    required: 'Please enter your First name!'
                },
                lname: {
                    required: 'Please enter your Last name!'
                },
                country: {
                    required: 'Please select country!'
                },
                state: {
                    required: 'Please enter state!'
                },
                city: {
                    required: 'Please enter city!.'
                },
                address: {
                    required: 'Please enter address!'
                }
            },
            errorPlacement: function (error, element) {
                if (element.is(":radio")) {
                    error.appendTo(element.parents('.gender'));
                }
                else if (element.is(":checkbox")) {
                    error.appendTo(element.parents('.hobbies'));
                }
                else {
                    error.insertAfter(element);
                }

            }
        });
    }

    $(document).ready(function () {
        var max_fields = 2;
        var wrap = $('.addnew');
        var add = $('.add');
        var x = 1;
        $(add).click(function (e) {
            e.preventDefault();
            if (x < max_fields) {
                $(add).hide();
                x++;
                $(wrap).append('<input type="tel" class="form-control" id="mobile2" name="mobile2" placeholder="Alternative Mobile Number">')
            }
        });
    });
    $(document).ready(function () {

        var max_fields1 = 2;
        var wrap1 = $('.addressadd');
        var ress1 = $('.butadd');
        var x1 = 1;
        $(ress1).click(function (ee) {
            ee.preventDefault();
            if (x1 < max_fields1) {
                $(ress1).hide();
                $(add1).hide();
                x1++;
                $(wrap1).append('<fieldset><legend>Alternative Address</legend ><select class="form-control" name="country" id="country"><option selected="" disabled="">--Country--</option><option>India</option><option>Australia</option><option>Japan</option> <option>China</option><option>South Africa</option></select><br><input type="text" class="form-control" id="state" name="state" placeholder="State" /><br><input type="text" class="form-control" id="city" name="city" placeholder="City" /><br><textarea class="form-control" name="address" id="address" value="ad" placeholder="Address"></textarea><br /></fieldset>')
            }
        });

    });
    var sc = {
        India: ["Jharkhand", "Odisha", "Bihar"],
        China: ["Anhui Province", "Beijing Municipality", "Hebei Province"],
        Japan: ["Hokkaido", "Tohoku", "Kanto"],
        Australia: ["New South Wales", "Queensland", "Victoria"],
        Germany: ["	Bavaria", "Berlin", "Hamburg"]
    }
    function makeSubmenu(value) {
        if (value.length == 0) document.getElementById("stateSelect").innerHTML = "<option></option>";
        else {
            var c = "";
            for (si in sc[value]) {
                c += "<option>" + sc[value][si] + "</option>";
            }
            document.getElementById("stateSelect").innerHTML = c;
        }
    }
 
    return {
        storedata: storedata,
        cap: cap,
        makeSubmenu:makeSubmenu
    };
})();
