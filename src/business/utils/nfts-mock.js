import main from './nfts-store-main'
import sub from './nfts-store-sub'

export const getAllMainCollections = () => {
    return main
}

export const getAllSubCollections = (id) => {
    return sub[id]
}