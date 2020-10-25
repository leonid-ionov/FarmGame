let initialState = {
    selectedGoods: {
        type: null,
        forSale: false,
        forFeed: false
    },
    selectedCreature: null
}
const CHOOSE_GOODS_FOR_ACTION = 'CHOOSE_GOODS_FOR_ACTION',
    CHOOSE_CREATURE = 'CHOOSE_CREATURE',

    gameReducer = (state = initialState, action) => {
        switch (action.type) {
            case CHOOSE_GOODS_FOR_ACTION:
                return {
                    ...state,
                    selectedGoods: {
                        type: action.selectedGoods,
                        forFeed: action.forFeed,
                        forSale: action.forSale
                    }
                }
            case CHOOSE_CREATURE:
                return {
                    ...state,
                    selectedCreature: action.selectedCreature
                }
            default:
                return state
        }
    }

export const chooseGoodsForAction = (selectedGoods, forFeed, forSale) => ({
        type: CHOOSE_GOODS_FOR_ACTION,
        selectedGoods,
        forFeed,
        forSale
    }),
    chooseCreature = (selectedCreature) => ({type: CHOOSE_CREATURE, selectedCreature})

export default gameReducer