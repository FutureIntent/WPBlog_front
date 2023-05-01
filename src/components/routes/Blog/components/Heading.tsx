import { ReactElement } from 'react';

import Typography from '@components/atoms/Typography';

const Heading = ({ heading }: { heading: string }): ReactElement | null => {
    if (!heading) return null;

    return (
        <Typography variant="h3" color="var(--white)">
            {heading}
        </Typography>
    );
};

export default Heading;
