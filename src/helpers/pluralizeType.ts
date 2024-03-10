const typePlurals: Record<string, string> = {
    year: "years",
    month: "months",
    day: "days",
    hour: "hours",
    second: "seconds",
}

export const pluralizeType = (type: string, amount: number) => {
    if (amount === 1) {
        return type
    } else {
        const plural = typePlurals[type]
        return plural
    }
}