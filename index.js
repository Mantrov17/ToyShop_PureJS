function render() {
    const productsStore = localStorageUtil.getProducts();

    headerPage.render(productsStore.length);
    productsPage.render()
}

spinnerPage.render();

let CATALOG = [];

// https://api.myjson.online/v1/records/0836d1cc-df26-417e-9290-2a05ef76ddfa

fetch('server/catalog.json')
.then(res => res.json())
.then(body => {
    CATALOG = body;

    setTimeout(() => {        
        spinnerPage.handleClear();
        render();
    }, 1000);

    })
    .catch(error => {
        spinnerPage.handleClear();
        errorPage.render();
    });
