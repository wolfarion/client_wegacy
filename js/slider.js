function changeSlider (value) {
    document.getElementById('1').className = 'element';
    document.getElementById('2').className = 'element';
    document.getElementById('3').className = 'element';
    document.getElementById('4').className = 'element';
    document.getElementById('5').className = 'element';

    document.getElementById(value).className = 'active';

    document.getElementById('image').style.background = "url('../images/slider" + value + ".png')";
}
