export type CategoryData = {
    id: string;
    name: string;
    color: string;
};

export type CategoryDataAdd = {
    name: string;
    color: string;
};

export type ItemDataAdd = {
    categoryId: string;
    text: string;
};
