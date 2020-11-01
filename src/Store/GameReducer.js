let initialState = {
    selectedGoods: {
        type: null,
        name: null
    },
    selectedCreature: {
        type: null,
        name: null
    }
}
const CHOOSE_GOODS_FOR_ACTION = 'CHOOSE_GOODS_FOR_ACTION',
    CHOOSE_CREATURE = 'CHOOSE_CREATURE',

    gameReducer = (state = initialState, action) => {
        switch (action.type) {
            case CHOOSE_GOODS_FOR_ACTION:
                return {
                    ...state,
                    selectedGoods: {
                        type: action.selectedGoodsType,
                        name: action.selectedGoodsName
                    }
                }
            case CHOOSE_CREATURE:
                return {
                    ...state,
                    selectedCreature: {
                        type: action.selectedCreatureType,
                        name: action.selectedCreatureName
                    }
                }
            default:
                return state
        }
    }

export const chooseGoodsForAction = (selectedGoodsType, selectedGoodsName) => ({
        type: CHOOSE_GOODS_FOR_ACTION,
        selectedGoodsType,
        selectedGoodsName
    }),
    chooseCreature = (selectedCreatureType, selectedCreatureName) => ({
        type: CHOOSE_CREATURE,
        selectedCreatureType,
        selectedCreatureName
    })

export default gameReducer