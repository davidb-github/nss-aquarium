// array of fish objects
const fishCollection = [
    {
        img: "https://images.unsplash.com/photo-1522720833375-9c27ffb02a5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
        name: "holy-fish-1",
        species: "Blue Fin",
        length: 3,
        location: "Costa Rica",
        food: "Herbivore"
    },
    {
        img: "https://images.unsplash.com/photo-1576806021995-9f68eb39f10b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1652&q=80",
        name: "holy-fish-2",
        species: "Green Fin",
        length: 6,
        location: "Florida",
        food: "Carnivore"
    },
    {
        img: "https://images.unsplash.com/photo-1600067156933-bff4d0f0c67f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1646&q=80",
        name: "holy-fish-3",
        species: "Yellow Fin",
        length: 9,
        location: "Mexico",
        food: "Herbivore"
    },
    {
        img: "https://images.unsplash.com/photo-1600067156933-bff4d0f0c67f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1646&q=80",
        name: "soldier-fish-1",
        species: "Yellow Fin",
        length: 50,
        location: "Mexico",
        food: "Herbivore"
    },
    {
        img: "https://images.unsplash.com/photo-1600067156933-bff4d0f0c67f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1646&q=80",
        name: "soldier-fish-2",
        species: "Yellow Fin",
        length: 100,
        location: "Mexico",
        food: "Herbivore"
    },
    {
        img: "https://images.unsplash.com/photo-1600067156933-bff4d0f0c67f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1646&q=80",
        name: "soldier-fish-3",
        species: "Yellow Fin",
        length: 200,
        location: "Mexico",
        food: "Herbivore"
    },
    {
        img: "https://images.unsplash.com/photo-1600067156933-bff4d0f0c67f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1646&q=80",
        name: "common-fish-1",
        species: "Yellow Fin",
        length: 2,
        location: "Mexico",
        food: "Herbivore"
    },
    {
        img: "https://images.unsplash.com/photo-1600067156933-bff4d0f0c67f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1646&q=80",
        name: "common-fish-2",
        species: "Yellow Fin",
        length: 2,
        location: "Mexico",
        food: "Herbivore"
    }
]

// export function to return array containing all fish 
export const useFish = () => {
    return fishCollection.slice();
}

// export function to return array containing only holy fish
export const mostHolyFish = () => {    
    // new empty array to hold filtered fish
    const holyFish = []

    for (const fish of fishCollection ) {
        if (fish.length % 3 === 0) {
            console.log(fish)
            holyFish.push(fish)
        }  
    }
    return holyFish
}

// export function to return array containing only soldier fish
export const soldierFish = () => {

    const soldiers = []

    for (const fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length %3 !== 0) {
            soldiers.push(fish)
        }
    }
    return soldiers
}

// export function to return array containing only common fish
export const commonFish = () => {

    const commonFishArray = []

    for (const fish of fishCollection)
    if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
        commonFishArray.push(fish)
    }
    return commonFishArray
}