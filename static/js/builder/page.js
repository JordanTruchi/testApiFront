export function buildTitle(title) {
    let titlePage = document.createElement('h1');
    titlePage.classList.add('titlePage');
    titlePage.innerHTML = title;
    return titlePage;
}

export function buildGlobalContainer() {
    let container = document.createElement('div');
    container.classList.add('globalContainer');
    return container;
}

export function buildMainContainer() {
    let container = document.createElement('div');
    container.classList.add('container');
    return container;
}

