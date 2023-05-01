import { useTranslation } from 'react-i18next';
import Box from '@components/atoms/Box';
import GridParent from '@components/atoms/GridParent';
import GridChild from '@components/atoms/GridChild';
import Typography from '@components/atoms/Typography';
import GoogleMap from '@components/molecules/GoogleMap/GoogleMap';
import styled from 'styled-components';

const MapContainer = styled.div`
    height: 100%;
    min-height: 360px;
    position: relative;
    width: 100%;

    h3 {
        line-height: 1;
    }
`;

const markers = [
    { lat: 40.416775, lng: -3.70379 },
    { lat: 59.334591, lng: 18.06324 },
    { lat: 60.472, lng: 8.4689 },
    { lat: 60.192059, lng: 24.945831 },
    { lat: 55.676098, lng: 12.568337 },
    { lat: 51.5167, lng: 9.9167 },
    { lat: 52.237049, lng: 21.017532 },
    { lat: 48.864716, lng: 2.349014 },
];

const AreYouWondering = () => {
    const { t } = useTranslation();

    return (
        <Box>
            <GridParent noGutter style={{ height: '100%'}}>
                <GridChild gridColumn={{ _: 'span 12', laptopS: 'span 5' }} gridRow={1}>
                    <MapContainer>
                        <GoogleMap
                            mapCenter={{ lat: 40.416775, lng: -3.70379 }}
                            markers={markers}
                            zoom={2.5}
                                />
                    </MapContainer>
                </GridChild>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '6/ span 6', laptop: '7/ span 5'}}>
                    <Box
                        pt={{ _: "1.875rem",laptopS: "8.75rem"}}
                        pb={{ _: '8.75rem', laptopS: '6.875rem',laptop: '8.75rem' }}
                        mx="1rem"
                        >
                        <Typography variant="h2" color="var(--black-brand)" transformText="uppercase" mb={20}>
                            {t('collaborate.heading')}
                        </Typography>
                        <Typography variant="paragraph" color="var(--black-brand)">
                            {t('collaborate.block1')}
                        </Typography>
                        <Typography variant="paragraph" color="var(--black-brand)">
                            {t('collaborate.block2')}
                        </Typography>
                    </Box>
                </GridChild>
            </GridParent>
        </Box>
    )
}

export default AreYouWondering;
