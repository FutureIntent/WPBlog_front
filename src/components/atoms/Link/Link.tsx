import { Link } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { ReactNode } from 'react';

const AppLink = ({ children, to, ...rest }: { children: ReactNode; to: string }) => {
    const { language, defaultLanguage } = useI18next();
    const langRoute = language !== defaultLanguage ? `/${language}` : '';

    return (
        <Link to={`${langRoute}${to}`} {...rest}>
            {children}
        </Link>
    );
};

export default AppLink;
