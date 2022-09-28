// Set Local Storage
const addListLS = (time) => {
    localStorage.setItem('addList', time)
}

// Get Local Storage
const getStoredList =  () => {
    let addToList = {};
    const storedList = localStorage.getItem('addList');
    if (storedList) {
        addToList = JSON.parse(storedList)
    } else {
        addToList = 0;
    }
    return addToList;
}
export{addListLS, getStoredList}
