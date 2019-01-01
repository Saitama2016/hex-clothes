const COLORS = {
    "Root Beer" : "#260701",
    "Black Bean" : "#3D0C02",
    "Burnt Umber" : "#843722",
    "Russet" : "#8D5524",
    "Peru" : "#C68642",
    "Coconut" : "#9F5C3C",
    "Brown Sugar" : "#AF6E51",
    "Deer" : "#C18566",
    "Antique Brass" : "#C69076",
    "Tumbleweed" : "#D3A186",
    "Pastel Pink" : "#E2A898",
    "Desert Sand" : "#F0BEAF",
    "Pale Pink" : "#F6D3BD",
    "Fawn" : "#E0AC69",
    "Mellow Apricot" : "#F1C27D",
    "Navajo White" : "#FFDBAC",
    "White": "#FFFFFF",
    "Khaki": "#F0E68C",
    "Eggplant": "#614051",
    "Red": "#FF0000",
    "Gray": "#808080",
    "Light Blue": "#ADD8E6",
    "Orange": "#FFA500",
    "Pink": "#FFC0CB",
    "Blush Pink": "#FE828C",
    "Coral Pink": "#F88379",
    "Gold": "#FFDF00",
    "Royal Purple": "#7851A9",
    "Mint Green": "#98FF98",
    "Seafoam Green": "#71EEB8",
    "Sapphire Blue": "#0F52BA",
    "Brown": "#A52A2A",
    "Tan": "#D2B48C",
    "Yellow": "#FFFF00",
    "Light Yellow": "#FFFF33",
    "Green": "#008000",
    "Blue": "#0000FF",
    "Light Sky Blue": "#87CEFA",
    "Cream": "#FFFDD0",
    "Black": "#000000",
    "Ivory": "#FFFFF0",
    "Navy Blue": "#000080",
    "Olive Green": "#BAB86C",
    "Crimson": "#DC143C",
    "Firebrick": "#B22222",
    "Teal": "#008080",
    "Cyan": "#00FFFF",
    "Peach": "#FFDAB9",
    "Lavender": "#E6E6FA",
    "Beige": "#F5F5DC",
    "Denim": "#1560bd",
    "Ford Blue": "#1351D8",
    "Dark Imperial": "#00416A",
    "Ateneo Blue": "#003A6C",
    "Rich Black": "#010b13",
    "Light Gray": "#D3D3D3",
    "Mocha": "#A38068",
    "Camel": "#C19A6B",
    "Light Taupe": "#B38B6D",
    "Charcoal": "#36454F"
}

const swatches = {
    skintones: {
        group1: {
            "Root Beer": COLORS["Root Beer"],
            "Black Bean": COLORS["Black Bean"],
            "Burnt Umber": COLORS["Burnt Umber"],
            "Brown Sugar": COLORS["Brown Sugar"],
            "Coconut": COLORS["Coconut"]
        },
        group2: {
            "Peru": COLORS["Peru"],
            "Fawn": COLORS["Fawn"],
            "Mellow Apricot": COLORS["Mellow Apricot"],
            "Tumbleweed": COLORS["Tumbleweed"],
            "Deer": COLORS["Deer"],
            "Antique Brass": COLORS["Antique Brass"]
        },
        group3: {
            "Pastel Pink": COLORS["Pastel Pink"],
            "Desert Sand": COLORS["Desert Sand"],
            "Pale Pink": COLORS["Pale Pink"],
            "Navajo White": COLORS["Navajo White"]
        }
    },
    shirtColors: {
        group1: {
            "Sapphire Blue": COLORS["Sapphire Blue"],
            "Red": COLORS["Red"],
            "Orange": COLORS["Orange"],
            "Gold": COLORS["Gold"],
            "Eggplant": COLORS["Eggplant"],
            "Royal Purple": COLORS["Royal Purple"],
            "Gray": COLORS["Gray"],
            "Khaki": COLORS["Khaki"],
            "Pink": COLORS["Pink"],
            "Light Blue": COLORS["Light Blue"],
            "Mint Green": COLORS["Mint Green"],
            "White": COLORS["White"]
        },
        group2: {
            "Black": COLORS["Black"],
            "Gray": COLORS["Gray"],
            "Navy Blue": COLORS["Navy Blue"],
            "Crimson": COLORS["Crimson"],
            "Brown": COLORS["Brown"],
            "Yellow": COLORS["Yellow"],
            "Orange": COLORS["Orange"],
            "Green": COLORS["Green"],
            "Tan": COLORS["Tan"],
            "Cream": COLORS["Cream"],
            "Khaki": COLORS["Khaki"],
            "Olive Green": COLORS["Olive Green"]
        },
        group3: {
            "Black": COLORS["Black"],
            "Light Yellow": COLORS["Light Yellow"],
            "Tan": COLORS["Tan"],
            "Khaki": COLORS["Khaki"],
            "Ivory": COLORS["Ivory"],
            "Coral Pink": COLORS["Coral Pink"],
            "Blush Pink": COLORS["Blush Pink"],
            "Peach": COLORS["Peach"],
            "Lavender": COLORS["Lavender"],
            "Light Sky Blue": COLORS["Light Sky Blue"],
            "Seafoam Green": COLORS["Seafoam Green"],
            "Mint Green": COLORS["Mint Green"]
        }
    },
    pantsColors: {
        jeansShades: {
            "Black": COLORS["Black"],
            "Rich Black": COLORS["Rich Black"],
            "Navy Blue": COLORS["Navy Blue"],
            "Blue": COLORS["Blue"],
            "Ateneo Blue": COLORS["Ateneo Blue"],
            "Dark Imperial": COLORS["Dark Imperial"],
            "Denim": COLORS["Denim"],
            "Ford Blue": COLORS["Ford Blue"]
        },
        khakisShades: {
            "Khaki": COLORS["Khaki"],
            "Tan": COLORS["Tan"],
            "Brown": COLORS["Brown"],
            "Beige": COLORS["Beige"],
            "Cream": COLORS["Cream"],
            "Camel": COLORS["Camel"],
            "Light Taupe": COLORS["Light Taupe"],
            "Olive Green": COLORS["Olive Green"],
            "Light Gray": COLORS["Light Gray"],
            "Charcoal": COLORS["Charcoal"]
        },
        chinosShades: {
            "Black": COLORS["Black"],
            "Light Gray": COLORS["Light Gray"],
            "Navy Blue": COLORS["Navy Blue"],
            "Blue": COLORS["Blue"],
            "Light Blue": COLORS["Light Blue"],
            "Tan": COLORS["Tan"],
            "Cream": COLORS["Cream"],
            "Beige": COLORS["Beige"],
            "Peach": COLORS["Peach"],
            "Crimson": COLORS["Crimson"]
        },
        dressPantsShades: {
            "Black": COLORS["Black"],
            "Navy Blue": COLORS["Navy Blue"],
            "Gray": COLORS["Gray"],
            "Light Gray": COLORS["Light Gray"]
        }
    },
    shoeColors: {
        bootShades: {
            "Black": COLORS["Black"],
            "Brown": COLORS["Brown"],
            "Tan": COLORS["Tan"],
            "White": COLORS["White"]
        }
    }
}

export default swatches;