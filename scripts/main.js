import { FishList } from './fish/FishList.js'
// import Tips functions
import { useTips  } from './tips/TipDataProvider.js'
import { TipList  } from './tips/TipList.js'
// import travel functions
import { returnLocationCollection } from './locations/LocationDataProvider.js'
import { LocationList } from './locations/LocationList.js'



// invoke FishList
FishList();
// invoke TipList
TipList();
// invoke useTips
// useTips();
// invoke returnTravelCollection
returnLocationCollection();
// invoke locationList
LocationList();

