import { render, screen, cleanup } from '@utils/testing-util';

import GridChild from './GridChild';

describe('<GridChild />', () => {

    afterEach(() => {
        cleanup();
    });

    it('should render without crashing', () => {
        expect.hasAssertions();

        render(<GridChild>GridChild test</GridChild>);
        expect(screen.getByText('GridChild test')).toBeInTheDocument();
    });

});
