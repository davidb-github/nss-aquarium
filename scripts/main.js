// import useFish function from FishDataProvider.js
import { useFish } from './FishDataProvider.js'

// Store return value from the useFish() function call
const allTheFish = useFish();

// temp: iterate through the useFish returned value function call. (fishCollection.slice())
for (const fish of allTheFish) {
    console.log(fish);
}