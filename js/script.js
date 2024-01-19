var isColorChanged = false;

function changeColor() {
    var resumeSection = document.getElementById("resume");
    var button = document.getElementById("changeColorBtn");

    var originalBackgroundColor = '#fff';  
    var originalFontColor = '#333';         
    var changedBackgroundColor = '#710000';  
    var changedFontColor = '#A5A200';           

    if (isColorChanged) {
        resumeSection.style.backgroundColor = originalBackgroundColor;
        document.body.style.color = originalFontColor;
    } else {
        resumeSection.style.backgroundColor = changedBackgroundColor;
        document.body.style.color = changedFontColor;
    }
    isColorChanged = !isColorChanged;
}
