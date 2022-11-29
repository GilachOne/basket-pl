import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import {
    useGetShoppingListQuery,
    useDashboardListQuery,
} from '../../__data__/api/main';
import { URLs } from '../../__data__/urls';
import { Loader } from '../../components/loader';
import { FabButton } from '../dashboard/components/fab/style';
import { Header1 } from './components/headers/headers';
import { Item } from './components/item/item';

import { Container, ListHeadName } from './style';

const List = () => {
    const { t } = useTranslation();
    const param = useParams();

    const {
        data: itemsRespons,
        isLoading,
        isSuccess,
    } = useGetShoppingListQuery(param.id);
    const { data: dashboardResp } = useDashboardListQuery();

    const list = dashboardResp?.data.find(list => list.id === param.id);

    return (
        <div>
            <Header1 />
            <Container>
                <div>
                    <ListHeadName>
                        {(dashboardResp && list?.listName) || 'Чужой список'}
                    </ListHeadName>
                    {isSuccess &&
                        itemsRespons.data?.map(item => (
                            <Item item={item} key={item.id} {...item} />
                        ))}
                    <Link
                        to={URLs.add.getUrl(param.id)}
                        title={t('basket.list.add')}
                    >
                        <FabButton>+</FabButton>
                    </Link>
                </div>
                {isLoading && <Loader />}
            </Container>
        </div>
    );
};

export default List;
