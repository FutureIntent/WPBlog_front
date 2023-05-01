import { render } from '@testing-library/react';

import AspectRatio from './AspectRatio';

describe('<AspectRatio />', () => {
    it('should render without crashing', () => {
        expect.assertions(1);

        render(<AspectRatio ratio={16 / 9}>AspectRatio</AspectRatio>);
    });
});
