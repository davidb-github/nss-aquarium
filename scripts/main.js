// import Fish functions
import { useFish  } from './fish/FishDataProvider.js'
import { FishList } from './fish/FishList.js'
// import Tips functions
import { useTips  } from './tips/TipDataProvider.js'
import { TipList  } from './tips/TipList.js'
// import travel functions
import { returnTravelCollection } from './locations/LocationDataProvider.js'
import { LocationList } from './locations/LocationList.js'

// invoke FishList
FishList();
// invoke TipList
TipList();
// invoke useTips
useTips();
// invoke returnTravelCollection
returnTravelCollection();
// invoke locationList
LocationList();


// // invoke function and store return into var
// const travelCollection = returnTravelCollection();
// // Store return value from the useFish() function call
// const allTheFish = useFish();
