import ChickenImage from '../Assets/Images/Creatures/Chicken.png'
import ShovelImage from '../Assets/Images/Creatures/Shovel.png'
import CowImage from '../Assets/Images/Creatures/Cow.png'
import WheatImage from '../Assets/Images/Creatures/Wheat.png'

let initialState = {
    wheat: {
        type: 'wheat',
        price: 50,
        growTime: 10,
        feedTime: null,
        feedType: null,
        harvestType:'grain',
        image: WheatImage
    },
    chicken: {
        type: 'chicken',
        price: 100,
        growTime: 10,
        feedTime: 20,
        feedType: 'grain',
        harvestType:'eggs',
        image: ChickenImage
    },
    cow: {
        type: 'cow',
        price: 150,
        growTime: 20,
        feedTime: 30,
        feedType: 'grain',
        harvestType:'milk',
        image: CowImage
    },
    shovel: {
        type: 'shovel',
        image: ShovelImage,
        price: 0
    }
}

const creaturesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default creaturesReducer