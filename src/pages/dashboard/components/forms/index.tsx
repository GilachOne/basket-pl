import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
    Main,
    FormDiv,
    Form,
    InputDiv,
    CreateListLabel,
    Input,
    CancelButton,
    CreateButton,
    ButtonDiv,
} from './style';

type CreateListProps = {
    listName?: string;
    onCancel: () => void;
    onOk: (listName: string) => void;
};

export const CreateListComponent: React.FC<CreateListProps> = ({
    listName,
    onCancel,
    onOk,
}) => {
    const { t } = useTranslation();
    const [inputValue, setInputValue] = useState(listName);

    const onSubmit = event => {
        event.preventDefault();
        inputValue
            ? onOk(inputValue)
            : onOk(t('basket.dashboard.createlistform.placeholder'));
    };

    const onChange = event => {
        setInputValue(event.target.value);
    };

    return (
        <Main>
            <FormDiv>
                <Form onSubmit={onSubmit}>
                    <InputDiv>
                        <CreateListLabel>
                            {t('basket.dashboard.createlistform.listname')}
                        </CreateListLabel>
                        <Input
                            type="text"
                            value={inputValue}
                            onChange={onChange}
                            placeholder={t(
                                'basket.dashboard.createlistform.placeholder'
                            )}
                        />
                    </InputDiv>
                    <ButtonDiv>
                        <CancelButton
                            onClick={onCancel}
                            title={t(
                                'basket.dashboard.createlistform.cancelbutton'
                            )}
                        >
                            {t('basket.dashboard.createlistform.cancelbutton')}
                        </CancelButton>
                        {listName ? (
                            <CreateButton
                                type="submit"
                                title={t(
                                    'basket.dashboard.deletelistform.okbutton'
                                )}
                            >
                                {t('basket.dashboard.deletelistform.okbutton')}
                            </CreateButton>
                        ) : (
                            <CreateButton
                                type="submit"
                                title={t(
                                    'basket.dashboard.createlistform.createbutton'
                                )}
                            >
                                {t(
                                    'basket.dashboard.createlistform.createbutton'
                                )}
                            </CreateButton>
                        )}
                    </ButtonDiv>
                </Form>
            </FormDiv>
        </Main>
    );
};

CreateListComponent.defaultProps = { listName: '' };

type DeleteListProps = {
    onCancel: () => void;
    onOk: () => void;
};

export const DeleteListComponent: React.FC<DeleteListProps> = ({
    onCancel,
    onOk,
}) => {
    const { t } = useTranslation();

    const OnSubmit = event => {
        event.preventDefault();
        onOk();
    };

    return (
        <Main>
            <FormDiv>
                <Form onSubmit={OnSubmit}>
                    <InputDiv>
                        <CreateListLabel>
                            {t('basket.dashboard.deletelistform.question')}
                        </CreateListLabel>
                    </InputDiv>
                    <ButtonDiv>
                        <CancelButton
                            onClick={onCancel}
                            title={t(
                                'basket.dashboard.createlistform.cancelbutton'
                            )}
                        >
                            {t('basket.dashboard.createlistform.cancelbutton')}
                        </CancelButton>
                        <CreateButton
                            type="submit"
                            title={t(
                                'basket.dashboard.deletelistform.okbutton'
                            )}
                        >
                            {t('basket.dashboard.deletelistform.okbutton')}
                        </CreateButton>
                    </ButtonDiv>
                </Form>
            </FormDiv>
        </Main>
    );
};
