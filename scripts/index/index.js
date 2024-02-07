function next(elementname){
    const element = document.getElementById(elementname);
    element.style.scrollBehavior="smooth";
    element.scrollLeft+=360;
}

function prev(elementname){
    const element = document.getElementById(elementname);
    element.style.scrollBehavior="smooth";
    element.scrollLeft-=360;
}