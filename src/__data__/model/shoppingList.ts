export type ListData = {
    id: string;
    listName: string;
    data?: ItemData[];
};

export type ItemData = {
    id: string;
    categoryId: string;
    color: string;
    text: string;
    count: number;
    bought: boolean;
};

export type ItemDataAdd = {
    itemId: string;
    categoryId: string;
    color: string;
    text: string;
    count: number;
    bought: boolean;
};
