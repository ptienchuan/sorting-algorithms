module.exports = (array, key1, key2) => {
    if (key1 !== key2) {
        let tmpVal = array[key1];
        array[key1] = array[key2];
        array[key2] = tmpVal;
    }
    return;
};