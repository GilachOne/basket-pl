import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getFeatures } from '@ijl/cli';
import Select from 'react-dropdown-select';

import { URLs } from '../../../../__data__/urls';
import { logo } from '../../../../public';
import { FabButton } from '../fab/style';

import {
    Main,
    ListBox,
    ListLeftDiv,
    ListText,
    ListRightDiv,
    ListCounts,
    UnderLogoText,
    Logo,
    CustomSelect
} from './style';

type MyListProps = {
    lists: {
        id: string;
        listName: string;
        purchased: number;
        total: number;
    }[];
    onRemove: (id: string) => void;
    onRename: (id: string) => void;
    onCopy: (id: string) => void;
    onShare: (url: string) => void;
    onAdd: () => void;
};

const copyFeature = getFeatures('basket')['dashboard.copylist'];

export const MyListsComponent: React.FC<MyListProps> = ({
    lists,
    onRemove,
    onRename,
    onCopy,
    onShare,
    onAdd,
}) => {
    const { t } = useTranslation();

    const calcOptions = useMemo(() => {
        const options = [
            {
                value: 'Rename',
                label: t('basket.dashboard.dropdownmenu.rename'),
            },
            { value: 'Share', label: t('basket.dashboard.dropdownmenu.share') },
        ];
        if (copyFeature) {
        options.push({
            value: 'Copy',
            label: t('basket.dashboard.dropdownmenu.copy'),
        });
        }
        options.push({
            value: 'Delete',
            label: t('basket.dashboard.dropdownmenu.delete'),
        });

        return options;
    }, [t]);

    const onSelect = id => options => {
        if (options[0].value == 'Delete') onRemove(id);
        if (options[0].value == 'Rename') onRename(id);
        if (options[0].value == 'Copy') onCopy(id);
        if (options[0].value == 'Share') onShare(URLs.list.getUrl(id));
    };

    const navigate = useNavigate();

    const navigateList = id => {
        return navigate(URLs.list.getUrl(id));
    };

    return (
        <Main>
            {lists?.map(listItem => (
                <ListBox key={listItem.id}>
                    <ListLeftDiv
                        onClick={() => navigateList(listItem.id)}
                        data-testid={listItem.id}
                    >
                        <ListText>{listItem.listName}</ListText>
                    </ListLeftDiv>
                    <ListRightDiv>
                        <ListCounts>{`${listItem.purchased} / ${listItem.total}`}</ListCounts>
                        <Select
                            className={CustomSelect}
                            options={calcOptions}
                            onChange={onSelect(listItem.id)}
                            values={[]}
                            placeholder=""
                            dropdownHandle={false}
                        />
                    </ListRightDiv>
                </ListBox>
            ))}
            {(!lists || !lists.length) && (
                <>
                    <Logo src={logo} alt="logo" />
                    <UnderLogoText>
                        {t('basket.dashboard.emptyList.text1')}
                    </UnderLogoText>
                    <UnderLogoText>
                        {t('basket.dashboard.emptyList.text2')}
                    </UnderLogoText>
                </>
            )}
            <FabButton onClick={onAdd} data-testid="addButton">
                +
            </FabButton>
        </Main>
    );
};
