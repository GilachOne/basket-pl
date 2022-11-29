import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import copy from 'copy-to-clipboard';

import {
    useDashboardListQuery,
    useAddListMutation,
    useDeleteListMutation,
    useRenameListMutation,
    useDuplicateListMutation,
} from '../../__data__/api/main';
import '../../style';
import { SnackBar } from './components/snackbar/style';
import { Loader } from '../../components/loader';
import { actions } from '../../__data__/slices/errorTextSlice';
import { RootState } from '../../__data__/store';
import { useAuthToken } from '../../hooks/use-auth-token';
import {
    HeaderComponent,
    MyListsComponent,
    CreateListComponent,
    DeleteListComponent,
} from './components';

const TopWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${props => props.theme.colors.accent.light};
    display: flex;
    flex-direction: column;
`;

const Wrapper = styled.div``;

const DashboardPage = () => {
    const { t } = useTranslation();

    const snackError = useSelector((state: RootState) => state.errorText.error);
    const dispatch = useDispatch();

    useAuthToken();

    const {
        data: getListData,
        error: getListError,
        isLoading: getListLoading,
    } = useDashboardListQuery();
    const [addListTrigger, { error: addListError, isLoading: addListLoading }] =
        useAddListMutation();
    const [delListTrigger, { error: delListError, isLoading: delListLoading }] =
        useDeleteListMutation();
    const [renListTrigger, { error: renListError, isLoading: renListLoading }] =
        useRenameListMutation();
    const [dupListTrigger, { error: dupListError, isLoading: dupListLoading }] =
        useDuplicateListMutation();

    const [toRemove, setToRemove] = useState(null);
    const [toAdd, setToAdd] = useState(null);
    const [toRename, setToRename] = useState(null);
    const [toShare, setToShare] = useState(false);
    const isLoading =
        getListLoading ||
        addListLoading ||
        delListLoading ||
        renListLoading ||
        dupListLoading;

    useEffect(() => {
        const errorText =
            getListError?.data?.error ||
            addListError?.data?.error ||
            delListError?.data?.error ||
            renListError?.data?.error ||
            dupListError?.data?.error;
        if (
            getListError ||
            addListError ||
            delListError ||
            renListError ||
            dupListError
        ) {
            dispatch(
                actions.setError(
                    errorText || t('basket.dashboard.defaulterror.text')
                )
            );
            setTimeout(() => {
                dispatch(actions.resetError());
            }, 3800);
        }
    }, [getListError, addListError, delListError, renListError, dupListError]);

    const removeList = id => {
        delListTrigger({ id });
        setToRemove(null);
    };

    const addList = listName => {
        addListTrigger({
            listName,
        });
        setToAdd(null);
    };

    const renameList = listName => {
        renListTrigger({
            id: toRename,
            listName,
        });
        setToRename(null);
    };

    const copyList = id => {
        dupListTrigger({ id });
    };

    const shareList = async url => {
        const urlElements = window.location.href.split('/');
        const urlLink = urlElements[0] + '//' + urlElements[2] + url;
        if (navigator.share) {
            const shareData = {
                title: t('basket.dashboard.header.title'),
                text: t('basket.dashboard.navshare.text'),
                url: urlLink,
            };
            await navigator.share(shareData);
        } else copy(urlLink);
        setToShare(true);
        setTimeout(() => {
            setToShare(false);
        }, 3800);
    };

    return (
        <>
            <TopWrapper>
                <HeaderComponent />
                <Wrapper>
                    {snackError && <SnackBar error>{snackError}</SnackBar>}
                    {toShare && (
                        <SnackBar>
                            {t('basket.dashboard.snackbar.title')}
                        </SnackBar>
                    )}
                    {toAdd && (
                        <CreateListComponent
                            onCancel={() => setToAdd(null)}
                            onOk={addList}
                        />
                    )}
                    {toRemove && (
                        <DeleteListComponent
                            onCancel={() => setToRemove(null)}
                            onOk={() => removeList(toRemove)}
                        />
                    )}
                    {toRename && (
                        <CreateListComponent
                            listName={
                                getListData?.data.find(
                                    list => list.id === toRename
                                ).listName
                            }
                            onCancel={() => setToRename(null)}
                            onOk={renameList}
                        />
                    )}
                    {!toRemove && !toAdd && !toRename && !isLoading && (
                        <MyListsComponent
                            lists={getListData?.data}
                            onRemove={setToRemove}
                            onRename={setToRename}
                            onCopy={copyList}
                            onShare={shareList}
                            onAdd={() => setToAdd(true)}
                        />
                    )}
                    {isLoading && <Loader />}
                </Wrapper>
            </TopWrapper>
        </>
    );
};

export default DashboardPage;
