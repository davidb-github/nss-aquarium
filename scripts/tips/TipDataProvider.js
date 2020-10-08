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

    },
    {
        topic: "Family",
        text : "Attend lake gathering"

    }   
]

export const useTips = () => {
    return tipCollection.slice();
}