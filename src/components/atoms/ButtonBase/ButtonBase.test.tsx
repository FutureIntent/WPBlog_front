import { fireEvent, cleanup, render, screen } from '@testing-library/react';

import ButtonBase from '@components/atoms/ButtonBase/ButtonBase';

describe('<ButtonBase />', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render with default props', () => {
        expect.assertions(1);

        render(<ButtonBase />);
        expect(screen.queryByRole('button')).toBeInTheDocument();
    });

    it('should call onClick prop when clicked', () => {
        expect.assertions(1);

        const handleClick = jest.fn();

        render(<ButtonBase onClick={handleClick}>Click Me</ButtonBase>);
        fireEvent.click(screen.getByRole('button'));

        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});
