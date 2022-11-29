import React from 'react';
import { useTranslation } from 'react-i18next';

import {
    useDeleteItemMutation,
    useBuyItemMutation,
    useIncCountItemMutation,
} from '../../../../__data__/api/main';
import { basket_arrow, basket, del, plus, minus } from '../../../../public';
import {
    ListItemBlock1,
    ListItemBlock2,
    ListItemBlock3,
    ItemText,
    BsktArrWrap,
    ListItem,
    Btn,
    DelBtn,
    ErrorBlock,
} from './style';
import { ItemData } from '../../../../__data__/model/shoppingList';

type ItemProps = {
    item: ItemData;
};

export const Item: React.FC<ItemProps> = ({ item }) => {
    const { t } = useTranslation();

    const [toDeleteItem, { error: deleteError }] = useDeleteItemMutation();
    const [toBuyItem, { error: toBuyError }] = useBuyItemMutation();
    const [toIncCount, { error: toIncCountError }] = useIncCountItemMutation();

    const handleToBuy = (item: ItemData) => {
        const bought = false || true;
        toBuyItem({ ...item, bought });
    };

    const handleToDelete = (item: ItemData) => {
        toDeleteItem(item.id);
    };

    const handleIncCount = (item: ItemData) => {
        const count = 1;
        toIncCount({ item, count });
    };

    const handleDecCount = (item: ItemData) => {
        const count = -1;
        toIncCount({ item, count });
    };

    return (
        <ListItem>
            {deleteError && toBuyError && toIncCountError && <ErrorBlock />}
            <ListItemBlock1 bought={item.bought} color={item.color}>
                <Btn
                    onClick={() => handleToBuy(item)}
                    title={t('basket.list.item.bought')}
                >
                    <BsktArrWrap bought={item.bought}>
                        <img src={basket_arrow} alt="" />
                    </BsktArrWrap>
                    <img src={basket} alt="" />
                </Btn>
            </ListItemBlock1>
            <ListItemBlock2>
                <ItemText bought={item.bought}>{item.text}</ItemText>
                <DelBtn
                    onClick={() => handleToDelete(item)}
                    title={t('basket.list.item.delete')}
                >
                    <img src={del} alt="" />
                </DelBtn>
            </ListItemBlock2>
            <ListItemBlock3 color={item.color}>
                <Btn
                    onClick={() => handleIncCount(item)}
                    title={t('basket.list.item.count.increment')}
                >
                    <img src={plus} alt="" />
                </Btn>
                <div>{item.count}</div>
                <Btn
                    onClick={() => handleDecCount(item)}
                    title={t('basket.list.item.count.decrement')}
                >
                    <img src={minus} alt="" />
                </Btn>
            </ListItemBlock3>
        </ListItem>
    );
};
