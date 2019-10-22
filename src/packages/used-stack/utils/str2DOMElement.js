const str2DOMElement = html => {
    const frame = document.createElement('iframe');
    frame.style.display = 'none';
    document.body.appendChild(frame);             
    frame.contentDocument.open();
    frame.contentDocument.write(html);
    frame.contentDocument.close();
    const el = frame.contentDocument.body.firstChild;
    document.body.removeChild(frame);
    return el;
};

export {
    str2DOMElement
};