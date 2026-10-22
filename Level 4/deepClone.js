function deepClone(value) {
    if (value === null || typeof value !== "object") {
        return value;
    }

    if (Array.isArray(value)) {
        return value.map(item => deepClone(item));
    }

    const copy = {};

    for (const key in value) {
        copy[key] = deepClone(value[key]);
    }

    return copy;
}

const original = {
    name: "Anne",
    address: {
        city: "Japan"
    }
};

const clone = deepClone(original);


clone.name = "Cika";
clone.address.city = "China";

console.log("Original:", original);
console.log("Clone:", clone);