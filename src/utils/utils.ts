const colors = ["red-shade-light", "orange-shade-light", "yellow-shade-light", "green-shade-light", "blue-shade-light", "deep-blue-shade-light", "purple-shade-light", "pink-shade-light"];

export const randomColorPick = (): string => {
    return colors[Math.floor(Math.random()*colors.length)]
}