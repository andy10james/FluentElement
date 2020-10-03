function html(strings, ...args) {
    let html = "";
    for (let i = 0; i < strings.length; i++) {
        html += strings[i];
        if (i < args.length) html += args[i];
    }
    const wrapperElement = document.createElement("div");
    wrapperElement.innerHTML = html;
    if (wrapperElement.children.length != 1) {
        throw new Error("html template literal tags supports only a single element.");
    }
    return wrapperElement.children[0];
}

export { html };