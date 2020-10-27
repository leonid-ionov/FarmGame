import { updateObjectInArray } from '../Utils/ObjectHelper/ObjectHelper'

let array = []
for (let i = 1; i < 65; i++) {
    array.push({
        id: i,
        type: 'empty'
    })
}
let initialState = {
    field: array
}

const CHANGE_FIELD_ITEM_TYPE = 'CHANGE_FIELD_ITEM_TYPE',

    fieldReducer = (state = initialState, action) => {
        switch (action.type) {
            case CHANGE_FIELD_ITEM_TYPE:
                return {
                    ...state,
                    field: updateObjectInArray (state.field,action.id,'id',{type:action.newType})
                }
            default:
                return state
        }
    }

export const changeFieldItemType = (id, newType) => ({type: CHANGE_FIELD_ITEM_TYPE, id, newType})


export default fieldReducer