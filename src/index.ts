function init() {
    const app: HTMLElement = document.getElementById('app');
    const title: string = 'Typescript - Webpack Stack started...!';

    app.innerHTML = '<h1>' + title + '</h1>';
}

window.onload = init;