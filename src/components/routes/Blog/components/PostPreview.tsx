import { ReactElement } from 'react';

import Typography from '@components/atoms/Typography';

const PostPreview = ({ postPreview }: { postPreview: string }): ReactElement | null => {
    if (!postPreview) return null;

    return (
        <Typography variant="caption" color="var(--white)" mb="16px" mt={13}>
            {postPreview}
        </Typography>
    );
};

export default PostPreview;
