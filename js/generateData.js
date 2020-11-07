function generateData(data, selector) {
    console.log(data);
    console.log(selector);
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const kirpimas = data[i];
        HTML += `<div class="service">
            <h3>${kirpimas.label}</h3>
            <p>${kirpimas.description}</p>
            <div class="price">${kirpimas.price} Eur</div>
            <a href="${kirpimas.link}">Placiau ></a>
            </div>`
    }

    // console.log(HTML);

    const DOM = document.querySelector(selector);
    DOM.innerHTML = HTML

    return HTML;
}
export { generateData }