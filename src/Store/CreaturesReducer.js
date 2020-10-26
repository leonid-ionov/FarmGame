import ChickenImage from '../Assets/Images/Creatures/Chicken.png'
import ShovelImage from '../Assets/Images/Creatures/Shovel.png'
import CowImage from '../Assets/Images/Creatures/Cow.png'
import WheatImage from '../Assets/Images/Creatures/Wheat.png'
import HarvestWheatImage from '../Assets/Images/Creatures/Harvest/HarvestWheat.png'
import HarvestCowImage from '../Assets/Images/Creatures/Harvest/HarvestCow.png'
import HarvestChickenImage from '../Assets/Images/Creatures/Harvest/HarvestChicken.png'


let initialState = {
    wheat: {
        type: 'wheat',
        price: 50,
        growTime: 10,
        feedTime: null,
        feedType: null,
        harvestType:'grain',
        image: WheatImage,
        harvestImage:HarvestWheatImage
    },
    chicken: {
        type: 'chicken',
        price: 100,
        growTime: 10,
        feedTime: 30,
        feedType: 'grain',
        harvestType:'eggs',
        image: ChickenImage,
        harvestImage:HarvestChickenImage
    },
    cow: {
        type: 'cow',
        price: 150,
        growTime: 20,
        feedTime: 20,
        feedType: 'grain',
        harvestType:'milk',
        image: CowImage,
        harvestImage:HarvestCowImage
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