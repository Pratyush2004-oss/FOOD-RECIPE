const COLORS = {
    green:{
        bg:"bg-[#ECF7D4]",
        badge: "bg-[#D6F497]"
    },
    orange:{
        bg:"bg-[#F9EFE1]",
        badge: "bg-[#F7E0B8]"
    },
    red:{
        bg:"bg-[#FBESE7]",
        badge: "bg-[#FDC6C7]"
    },
};

export const getRandomColor = () => {
    const colorNames = Object.keys(COLORS);     //get array of the keys (Color Names)
    const randomIndex = Math.floor(Math.random() * colorNames.length);      // Get a Random Index
    const randomColorName = colorNames[randomIndex];        //get the color name at the random index 
    return COLORS[randomColorName];     //Return the color object corresponding to the Random color Name
}

getRandomColor();