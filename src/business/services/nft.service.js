import { getAllMainCollections, getAllSubCollections } from 'business/utils/nfts-mock';

const getAllCollections = async() => {
    return new Promise(resolve => setTimeout(() => {
        resolve(getAllMainCollections())
    }, 200))
}

const getOneCollection = async(id) => {
    return new Promise(resolve => setTimeout(() => {
        resolve(getAllSubCollections(id))
    }, 200))
}

export default {
    getAllCollections,
    getOneCollection,
}
