//Converting timezone into full year format
const convertTimezoneToFullYear = (timezone) => {
    const date = new Date(timezone);
    return date.getFullYear()
}

//Converting the HTML from a string
const stringToHTML = (str) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(str, 'text/html');
    return doc.body.children[0];
}


export {convertTimezoneToFullYear,stringToHTML}