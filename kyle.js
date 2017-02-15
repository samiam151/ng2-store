Derivefilters() {
    var transformedData = {};
    this.products.map(function (product, index) {
        /*ITERATE THORUGH PRODUCTS*/
        /* ITERATE THROUGH OPTIONS */
        Object.keys(product).map(function (key, index) {

            if (key.indexOf("Option") != -1 && product[key] != null && product[key] != "") {

                if (transformedData.hasOwnProperty(key)) {
                    if (transformedData[key].hasOwnProperty(product[key]) == false) {
                        transformedData[key][product[key]] = { name: product[key], sku: [product.SKU] }
                    } else {
                        if (transformedData[key][product[key]]["sku"].indexOf(product.SKU) == -1) {
                            transformedData[key][product[key]]["sku"].push(product.SKU)
                        }
                    }
                } else {
                    transformedData[key] = {};

                    transformedData[key][product[key]] = { name: product[key], sku: [product.SKU] }
                }
            }
        })

    })

    var newData = [];

    Object.keys(transformedData).map(function (key, index) {
        var i = {};
        i["name"] = key;
        i["selectedValue"] = "";
        i["options"] = Object.keys(transformedData[key]).map(function (lkey, lindex) {
            var j = {};
            j["name"] = transformedData[key][lkey]["name"];
            j["sku"] = transformedData[key][lkey]["sku"];
            j["selected"] = false;

            return j;
        });
        newData.push(i);
    });
    return newData;
}
