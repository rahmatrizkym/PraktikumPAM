import { INCRE, DECRE } from './tipe'

const initData = {
    counter:0
}

export const reducerCounter = (state = initData, action) => {
    switch(action.type){
        case INCRE:
            console.log('INCRE ANGKA');
            return{...state, counter:action.data + 1}
        case DECRE:
            console.log('DECRE ANGKA');
            return{...state, counter:action.data - 1}
        default:return state;
    }
}