import EggsImage from '../Assets/Images/Goods/Eggs.png'
import MoneyImage from '../Assets/Images/Goods/Money.png'
import MilkImage from '../Assets/Images/Goods/Milk.png'
import GrainImage from '../Assets/Images/Goods/Grain.png'

let initialState = {
    money: {
        type: 'money',
        count: 300,
        price: null,
        image: MoneyImage,
        sale: false,
        feed: false
    },
    grain: {
        type: 'grain',
        count: 2,
        price: null,
        image: GrainImage,
        sale: false,
        feed: true
    },
    eggs: {
        type: 'eggs',
        count: 0,
        price: 30,
        image: EggsImage,
        sale: true,
        feed: false
    },
    milk: {
        type: 'milk',
        count: 0,
        price: 70,
        image: MilkImage,
        sale: true,
        feed: false
    }
}

const SELL_ITEM = 'SELL_ITEM',
    BUY_CREATURE = 'BUY_CREATURE',
    TAKE_HARVEST = 'TAKE_HARVEST',
    FEED_CREATURE = 'FEED_CREATURE',

    goodsReducer = (state = initialState, action) => {
        switch (action.type) {
            case SELL_ITEM:
                let moneyFromSale = state.money.count + state[action.itemForSale].count * state[action.itemForSale].price
                return {
                    ...state,
                    money: {
                        ...state.money,
                        count: moneyFromSale
                    },
                    [action.itemForSale]: {
                        ...state[action.itemForSale],
                        count: 0
                    }
                }
            case BUY_CREATURE :
                let moneyFromBuy = state.money.count - action.creaturePrice
                return {
                    ...state,
                    money: {
                        ...state.money,
                        count: moneyFromBuy
                    }
                }
            case TAKE_HARVEST:
                let newGoodsCount = state[action.harvestType].count + 1
                return {
                    ...state,
                    [action.harvestType]: {
                        ...state[action.harvestType],
                        count: newGoodsCount
                    }
                }
            case FEED_CREATURE :
                let newFeedCount = state[action.feedType].count - 1
                return {
                    ...state,
                    [action.feedType]: {
                        ...state[action.feedType],
                        count: newFeedCount
                    }
                }
            default:
                return state
        }
    }

export const sellItem = (itemForSale) => ({type: SELL_ITEM, itemForSale}),
    buyCreature = (creaturePrice) => ({type: BUY_CREATURE, creaturePrice}),
    takeHarvest = (harvestType) => ({type: TAKE_HARVEST, harvestType}),
    feedCreature = (feedType) => ({type: FEED_CREATURE, feedType}),

    buyCreatureChecker = (creatureType) => (dispatch, getState) => {
        const creaturePrice = getState().creaturesReducer[creatureType].price,
            moneyCount = getState().goodsReducer.money.count
        if (moneyCount >= creaturePrice) {
            dispatch(buyCreature(creaturePrice))
        } else throw new Error('NEED MORE GOLD')
    },
    feedCreatureChecker = (feedType) => (dispatch, getState) => {
        const feedCount = getState().goodsReducer[feedType].count
        if (feedCount > 0) {
            dispatch(feedCreature(feedType))
        } else throw new Error('NEED MORE FEED')
    },
    sellItemChecker = (itemForSale) => (dispatch,getState) => {
        if (!!getState().goodsReducer[itemForSale].count) {
            dispatch(sellItem(itemForSale))
        } else throw new Error('NOTHING TO SELL')
    }

export default goodsReducer


