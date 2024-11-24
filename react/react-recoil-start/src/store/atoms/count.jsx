import { atom, selector } from "recoil";

export const countAtom = atom({
    key: "countAtom",
    default: 0,
});

export const countSelectorForEven = selector({
    key: "countSelectorForEven",
    get: ({ get }) => {
        const count = get(countAtom);
        return count % 2 === 0 ? true : false;
    },
});
