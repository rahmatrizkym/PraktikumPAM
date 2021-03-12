import { INCRE, DECRE } from './tipe'

export const increCounter = (counter) => ({
    type:INCRE,
    data:counter
})

export const decreCounter = (counter) => ({
    type:DECRE,
    data:counter
})
