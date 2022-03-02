import AsyncStorage from '@react-native-async-storage/async-storage';
// import store from 'react-native-simple-store';




// function storeData(key,saveItem) {
//     store.push(key, saveItem);
// }



// async function getData(key) {


// try {
//     const resp =await store.get(key);
//     return resp;
    
// } catch (e) {
//     console.log(e);
// }



// }


// function removeData(key) {
//     store.delete(key);
// }








const storeData = async(key, value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem(key, jsonValue)
      
    } catch (e) {
        alert(`Can not save ${key}`)
    }
}

const getData = async(key) => {

    try {
        const jsonValue = await AsyncStorage.getItem(key)
      
        const res = jsonValue !== null
            ? JSON.parse(jsonValue)
            : [];

        return res



    } catch (e) {
        alert(`Can not retrive ${key}`)
    }

}

const removeData = async(key) => {
    try {
        await AsyncStorage.removeItem(key)
    } catch (e) {
        alert(`Can not Clear ${key}`)
    }

    console.log(`${key} removed successfully`)
}

export {storeData, getData, removeData}