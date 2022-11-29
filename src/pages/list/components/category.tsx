import React, { useCallback } from 'react';

import {
    Category,
    CategoryColor
} from '../style';

import { CategoryData } from '../../../__data__/model/category';
import { theme } from '../../../theme';

type CategoryProps = {
    category: CategoryData;
    onClick: (id: string) => void;
    isPressed: boolean;
};

export const CategoryItem: React.FC<CategoryProps> = ({
    category,
    onClick,
    isPressed,
}) => {
    const showPressed = useCallback(() => {
        onClick(category.id);
    }, [onClick, category.id]);

    return (
        <Category
            type="button"
			onClick={showPressed}
            color={isPressed ? `${theme.colors.accent.light2}` : `${theme.colors.background.light}`}
			title={category.name}
        >
            <CategoryColor color={category.color} />
			{category.name}
        </Category>
    );
};
