import Flag from 'react-flagkit';

interface FlagIconProps {
    countryCode: string;
}

const FlagIcon = ({ countryCode }: FlagIconProps) => (
    <Flag
        country={countryCode.toUpperCase()}
        style={{ width: 32, height: 16, verticalAlign: 'middle' }}
    />
);
export default FlagIcon;
