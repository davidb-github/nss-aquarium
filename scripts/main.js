// import useFish function from FishDataProvider.js
import { useFish } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'

// import FishList
FishList();

// Store return value from the useFish() function call
const allTheFish = useFish();

// temp: iterate through the useFish returned value function call. (fishCollection.slice())
for (const fish of allTheFish) {
    console.log(fish);
}