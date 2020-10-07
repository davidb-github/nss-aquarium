// array to tip objects
const tipCollection = [
    {
      topic: "Diet",
      text : "Never feed after midnight"
    },
    {
        topic: "Sleep Schedule",
        text : "Never wake the fish"
    },
    {
        topic: "Fitness",
        text : "Swim laps"

    }  
]

export const useTips = () => {
    return tipCollection.slice();
}