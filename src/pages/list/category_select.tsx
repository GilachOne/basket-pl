import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Form as FinalForm, Field } from 'react-final-form';
import { useSelector, useDispatch } from 'react-redux';

import {
    Container,
    ListHeadName,
    Comment,
    InputName,
    AddCategory,
    InputTextWrap,
    BtnAdd,
	ButtonCirclePlus,
	Ul,
	Li,
} from '../list/style';

import { Header2 } from './components/headers/headers';
import { CategoryItem } from './components/category';
import { Input } from '../../components/category/input';
import { InputColor } from '../../components/category/select';
import { Textarea } from '../../components/category/textarea';
import { Categories } from '../../components/category/div';
import {
    useCategoriesAddMutation,
    useCategoriesCurrentQuery,
    useAddItemMutation,
} from '../../__data__/api/main';
import { Loader } from '../../components/loader';
import { SnackBar } from '../dashboard/components/snackbar/style';
import { ErrorSpan } from '../../components/error/span';
import { actions } from '../../__data__/slices/errorTextSlice';
import { RootState } from '../../__data__/store';
import { useNavigate, useParams } from 'react-router-dom';
import { URLs } from '../../__data__/urls';

const CategorySelect = () => {
    const { t } = useTranslation();
    const param = useParams();
    const snackError = useSelector((state: RootState) => state.errorText.error);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        data: getCategoriesData,
        isError: getCategoriesIsError,
        error: getCategoriesError,
        isLoading: getCategoriesLoading,
        isSuccess: getCategoriesSuccess,
    } = useCategoriesCurrentQuery();
    const [
        addCategoryData,
        {
            isLoading: postCategryLoading,
            data: postCategoryData,
            isError: postCategoryIsError,
            error: postCategoryError,
            isSuccess: postCategorySuccess,
        },
    ] = useCategoriesAddMutation();

    const [
        addItemData,
        {
            isLoading: postItemLoading,
            data: postItemData,
            isError: postItemIsError,
            error: postItemError,
            isSuccess: postItemSuccess,
        },
    ] = useAddItemMutation();

	const [addCategory, setAddCategory] = useState(false);
	const addButtonCategory = () => {
		setAddCategory(true);
	}
	
	const onSubmitAddCategory = async data => {
		await addCategoryData(data);
	};

    useEffect(() => {
        const errorCategoriesText = getCategoriesError?.data?.error;

        if (getCategoriesIsError) {
            dispatch(
                actions.setError(
                    errorCategoriesText || t('basket.add.default.error.text')
                )
            );
            setTimeout(() => {
                dispatch(actions.resetError());
            }, 3800);
        }
        if (postItemSuccess) {
            navigate(URLs.list.getUrl(param.id));
        }
		if (postCategorySuccess) {
			setAddCategory(false);
		}
    }, [
        dispatch,
        getCategoriesError,
        getCategoriesIsError,
        postCategoryData,
        navigate,
        postItemSuccess,
        t,
        param,
		postCategorySuccess
    ]);

    const [categorySelected, setCategorySelected] = useState<string>();


    const onSubmitAddItem = data => {
        addItemData({ itemDataAdd: data, listId: param.id });
    };

    const createRequiredFieldValidator = errorMessage => value =>
        value ? undefined : errorMessage;
	
	const createСheckFieldNameItem = errorMessage => value =>
        /(^[а-яА-ЯёЁa-zA-Z0-9-,%№ ]+$)/.test(value) ? undefined : errorMessage;
	
    const createСheckFieldNameCategory = errorMessage => value =>
		/(^[а-яА-ЯёЁa-zA-Z- ]+$)/.test(value) ? undefined : errorMessage;

    const composeValidators =
        (...validators) =>
        value =>
            validators.reduce(
                (error, validator) => error || validator(value),
                undefined
            );

    const [untouchedProductName, setUntouchedProductName] = useState(false);
    const actionProduct = () => {
        setUntouchedProductName(true);
    };

    return (
        <div>
            <Header2 />
            {snackError && <SnackBar error>{snackError}</SnackBar>}
            {!getCategoriesLoading && !getCategoriesIsError && (
                <Container>
                    <Ul>
						<Li>
							<ListHeadName>
								{t('basket.add.list.head.name')}
							</ListHeadName>
						</Li>
						<Li>
							{!addCategory && <ButtonCirclePlus type="button" title={t('basket.add.button.plus')} onClick={addButtonCategory}>+</ButtonCirclePlus>}
						</Li>
					</Ul>
					
                    <FinalForm
                        onSubmit={onSubmitAddItem}
                        initialValues={{ categoryId: categorySelected }}
                        keepDirtyOnReinitialize={true}
                        render={({ handleSubmit }) => (
                            <form onSubmit={handleSubmit}>
                                <Field
                                    name="categoryId"
                                    validate={composeValidators(
                                        createRequiredFieldValidator(
                                            t(
                                                'basket.add.require.product.category.name'
                                            )
                                        )
                                    )}
                                    render={({ meta }) =>
                                        getCategoriesSuccess && (
                                            <Categories
                                                error={
                                                    untouchedProductName &&
                                                    !categorySelected &&
                                                    meta.error
                                                }
                                            >
                                                {getCategoriesData?.data?.map(
                                                    categ => (
                                                        <CategoryItem
                                                            key={categ.id}
                                                            category={categ}
                                                            onClick={
                                                                setCategorySelected
                                                            }
                                                            isPressed={
                                                                categ.id ===
                                                                categorySelected
                                                            }
                                                        />
                                                    )
                                                )}
                                            </Categories>
                                        )
                                    }
                                />
                                <Comment>
                                    {t('basket.add.list.product.name')}
                                </Comment>
                                <InputTextWrap>
                                    <Field
                                        name="text"
                                        validate={composeValidators(
                                            createRequiredFieldValidator(
                                                t(
                                                    'basket.add.require.product.name'
                                                )
                                            ),
                                            createСheckFieldNameItem(
                                                t(
                                                    'basket.add.check.product.name'
                                                )
                                            )
                                        )}
                                        render={({ input, meta }) => (
                                            <Textarea
                                                {...input}
                                                error={
                                                    meta.touched && meta.error
                                                }
                                                placeholder={t(
                                                    'basket.add.input.text'
                                                )}
                                                onFocus={actionProduct}
                                                disabled={postItemLoading}
                                            />
                                        )}
                                    />
                                </InputTextWrap>
                                <BtnAdd
                                    type="submit"
                                    title={t('basket.add.button.item')}
                                    disabled={postItemLoading}
                                >
                                    {t('basket.add.button.item')}
                                </BtnAdd>
                                {postItemIsError && (
                                    <ErrorSpan>
                                        {postItemError?.data?.error ||
                                            t('backet.add.item.error.text')}
                                    </ErrorSpan>
                                )}
                            </form>
                        )}
                    />
					{addCategory && 
						<FinalForm
							onSubmit={onSubmitAddCategory}
							render={({ handleSubmit, form: { restart } }) => (
								<form
									onSubmit={event =>
										handleSubmit(event)?.then(() => restart())
									}
								>
									<Comment>{t('basket.add.comment')}</Comment>
									<InputName>
										<Field
											name="name"
											validate={composeValidators(
												createRequiredFieldValidator(
													t(
														'basket.add.require.category.name'
													)
												),
												createСheckFieldNameCategory(
													t(
														'basket.add.check.category.name'
													)
												)
											)}
											render={({ input, meta }) => (
												<Input
													type="text"
													disabled={postCategryLoading}
													{...input}
													error={
														meta.touched && meta.error
													}
													placeholder={t(
														'basket.add.input.name.text'
													)}
												/>
											)}
										/>
										<Field
											name="color"
											validate={composeValidators(
												createRequiredFieldValidator(
													t(
														'basket.add.require.category.color'
													)
												)
											)}
											render={({ input, meta }) => (
												<InputColor
													data-testid="select"
													disabled={postCategryLoading}
													{...input}
													error={
														meta.touched && meta.error
													}
												>
													<option value="" disabled>
														{t(
															'basket.add.input.color'
														)}
													</option>
													<option value="#08AE0F">
														{t(
															'basket.add.input.color.green'
														)}
													</option>
													<option value="#9D79B9">
														{t(
															'basket.add.input.color.purple'
														)}
													</option>
													<option value="#B11F1F">
														{t(
															'basket.add.input.color.scarlet'
														)}
													</option>
													<option value="#3414F5">
														{t(
															'basket.add.input.color.blue'
														)}
													</option>
													<option value="#008060">
														{t(
															'basket.add.input.color.darkGreen'
														)}
													</option>
													<option value="#D928D2">
														{t(
															'basket.add.input.color.pink'
														)}
													</option>
													<option value="#9B763D">
														{t(
															'basket.add.input.color.brown'
														)}
													</option>
													<option value="#830DF9">
														{t(
															'basket.add.input.color.violet'
														)}
													</option>
													<option value="#FA8803">
														{t(
															'basket.add.input.color.orange'
														)}
													</option>
													<option value="#FCF20E">
														{t(
															'basket.add.input.color.yellow'
														)}
													</option>
													<option value="#EC1818">
														{t(
															'basket.add.input.color.red'
														)}
													</option>
													<option value="#14F52B">
														{t(
															'basket.add.input.color.lightGreen'
														)}
													</option>
												</InputColor>
											)}
										/>
									</InputName>
									<AddCategory
										type="submit"
										title={t('basket.add.button.category')}
										disabled={postCategryLoading}
									>
										{t('basket.add.button.category')}
									</AddCategory>
									{postCategoryIsError && (
										<ErrorSpan>
											{postCategoryError?.data?.error ||
												t('backet.add.category.error.text')}
										</ErrorSpan>
									)}
								</form>
							)}
						/>
					}
                </Container>
            )}
            {getCategoriesLoading && <Loader />}
        </div>
    );
};

export default CategorySelect;
