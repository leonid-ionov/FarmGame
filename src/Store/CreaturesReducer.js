import ChickenImage from '../Assets/Images/Creatures/Chicken.png'
import CowImage from '../Assets/Images/Creatures/Cow.png'
import WheatImage from '../Assets/Images/Creatures/Wheat.png'
import HarvestWheatImage from '../Assets/Images/Creatures/Harvest/HarvestWheat.png'
import HarvestCowImage from '../Assets/Images/Creatures/Harvest/HarvestCow.png'
import HarvestChickenImage from '../Assets/Images/Creatures/Harvest/HarvestChicken.png'


let initialState = {
    wheat: {
        name:'wheat',
        type: 'plant',
        price: 50,
        growTime: 10,
        satietyCount:0,
        harvestType:'grain',
        image: WheatImage,
        harvestImage:HarvestWheatImage
    },
    chicken: {
        name:'chicken',
        type: 'animal',
        price: 100,
        growTime: 10,
        feedTime: 30,
        satietyCount:2,
        feedType: 'grain',
        harvestType:'eggs',
        image: ChickenImage,
        harvestImage:HarvestChickenImage
    },
    cow: {
        name:'cow',
        type: 'animal',
        price: 150,
        growTime: 20,
        feedTime: 20,
        satietyCount:5,
        feedType: 'grain',
        harvestType:'milk',
        image: CowImage,
        harvestImage:HarvestCowImage
    }
}

const creaturesReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default creaturesReducer