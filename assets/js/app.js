
let button =$('.button');
let button2 =$('.button2');
let button3 =$('.button3');
let button4 =$('.button4');
let button5 =$('.button5');
let button6 =$('.button6');
let button7 =$('.button7');
let button8 =$('.button8');
let button9 =$('.button9');
let button10 =$('.button10');

score = 0;
button.click(function () {
    if ($('.good').is(':checked')) {
        button.parent('div').css('border-color', 'green');
        button.remove();
        $('#quest2').css('display', 'block');
        score++
        console.log(score)
        $('#quest1').fadeOut(1000);
    }
    else {
        $('#quest2').css('display', 'block');
        $('#quest1').fadeOut(1000);
        button.remove();
    }
})

button2.click(function () {
    if ($('.good2').is(':checked')) {
        button2.parent('div').css('border-color', 'green');
        button2.remove();
        $('#quest3').css('display', 'block');
        score++
        $('#quest2').fadeOut(1000);
    }
    else {
        $('#quest3').css('display', 'block');
        $('#quest2').fadeOut(1000);
        button2.remove();
    }
})

button3.click(function () {
    if ($('.good3').is(':checked')) {
        button3.parent('div').css('border-color', 'green');
        button3.remove();
        $('#quest4').css('display', 'block');
        score++
        $('#quest3').fadeOut(1000);
    }
    else {
        $('#quest4').css('display', 'block');
        button3.remove();
        $('#quest3').fadeOut(1000);
    }
})

button4.click(function () {
    if ($('.good4').is(':checked')) {
        button4.parent('div').css('border-color', 'green');
        button4.remove();
        $('#quest5').css('display', 'block');
        score++
        $('#quest4').fadeOut(1000);
    }
    else {
        $('#quest5').css('display', 'block');
        button4.remove();
        $('#quest4').fadeOut(1000);
    }
})

button5.click(function () {
    if ($('.good5').is(':checked')) {
        button5.parent('div').css('border-color', 'green');
        button5.remove();
        $('#quest6').css('display', 'block');
        score++
        $('#quest5').fadeOut(1000);
    }
    else {
        $('#quest6').css('display', 'block');
        button5.remove();
        $('#quest5').fadeOut(1000);
    }
})

button6.click(function () {
    if ($('.good6').is(':checked')) {
        button6.parent('div').css('border-color', 'green');
        button6.remove();
        $('#quest7').css('display', 'block');
        score++
        $('#quest6').fadeOut(1000);
    }
    else {
        $('#quest7').css('display', 'block');
        button6.remove();
        $('#quest6').fadeOut(1000);
    }
})

button7.click(function () {
    if ($('.good7').is(':checked')) {
        button7.parent('div').css('border-color', 'green');
        button7.remove();
        $('#quest8').css('display', 'block');
        score++
        $('#quest7').fadeOut(1000);
    }
    else {
        $('#quest8').css('display', 'block');
        button7.remove();
        $('#quest7').fadeOut(1000);
    }
})

button8.click(function () {
    if ($('.good8').is(':checked')) {
        button8.parent('div').css('border-color', 'green');
        button8.remove();
        $('#quest9').css('display', 'block');
        score++
        $('#quest8').fadeOut(1000);
    }
    else {
        $('#quest9').css('display', 'block');
        button8.remove();
        $('#quest8').fadeOut(1000);
    }
})

button9.click(function () {
    if ($('.good9').is(':checked')) {
        button9.parent('div').css('border-color', 'green');
        button9.remove();
        $('#quest10').css('display', 'block');
        score++
        $('#quest9').fadeOut(1000);
    }
    else {
        $('#quest10').css('display', 'block');
        button9.remove();
        $('#quest9').fadeOut(1000);
    }
})

button10.click(function () {
    if ($('.good10').is(':checked')) {
        button10.parent('div').css('border-color', 'green');
        button10.remove();
        score++
        $('#quest10').fadeOut(1000);
        $('#score').html('vous avez' + score + 'bonnes réponses');
    }
    else {
        button10.remove();
        $('#quest10').fadeOut(1000);
        $('#score').html('vous avez ' + score + ' bonnes réponses');
    }
})