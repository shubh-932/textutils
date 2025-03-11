export function setBodyColor(colorTheme) {
    switch(colorTheme) {
        case 'red':
            document.body.removeAttribute("class");
            document.body.classList.add('body-red');
            break;
        case 'yellow':
            document.body.removeAttribute("class");
            document.body.classList.add('body-yellow');
            break;
        case 'green':
            document.body.removeAttribute("class");
            document.body.classList.add('body-green');
            break;
        case 'dark':
            document.body.removeAttribute("class");
            document.body.classList.add('dark-mode');
            break;
        default:
            document.body.removeAttribute("class");

    }
}

export function colorClass(colorTheme) {
    switch(colorTheme) {
        case 'red':
            return 'text-area-red';
        case 'yellow':
            return 'text-area-yellow';
        case 'green':
            return 'text-area-green';
        default:
            return ''
    }
}