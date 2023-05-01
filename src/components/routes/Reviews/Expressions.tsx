import { useTranslation } from 'react-i18next';

import Box from '@components/atoms/Box';
import GridChild from '@components/atoms/GridChild';
import GridParent from '@components/atoms/GridParent';
import Typography from '@components/atoms/Typography';

const Expressions = () => {
    const { t } = useTranslation();

    return (
        <Box mt="8.5rem">
            <GridParent>
                <GridChild gridColumn="span 12">
                    <Typography variant="h1" as="h2" color="var(--black-brand)" textAlign="center">
                        {t('Expressions')}
                    </Typography>
                </GridChild>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 5' }}>
                    {/* <ReviewCard */}
                    {/*    authorImg={ */}
                    {/*        <StaticImage */}
                    {/*            aspectRatio={1} */}
                    {/*            src="../../../assets/xCryoOriginal/reviewer_1.jpg" */}
                    {/*            alt="reviewer" */}
                    {/*        /> */}
                    {/*    } */}
                    {/*    authorPosition="CROSSFIT ATHLETE" */}
                    {/*    authorName="PATRICIA THOMPSON" */}
                    {/*    reviewText="I was one of those people with a daily workout */}
                    {/*                                routine. The X°Cryo helped me reduce muscle */}
                    {/*                                soreness after my workout, enabling me to give */}
                    {/*                                100% every day." */}
                    {/* /> */}
                </GridChild>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '5/ span 5' }}>
                    {/* <ReviewCard */}
                    {/*    flipped */}
                    {/*    authorImg={ */}
                    {/*        <StaticImage */}
                    {/*            aspectRatio={1} */}
                    {/*            src="../../../assets/xCryoOriginal/reviewer_1.jpg" */}
                    {/*            alt="reviewer" */}
                    {/*        /> */}
                    {/*    } */}
                    {/*    authorPosition="CROSSFIT ATHLETE" */}
                    {/*    authorName="PATRICIA THOMPSON" */}
                    {/*    reviewText="I was one of those people with a daily workout */}
                    {/*                                routine. The X°Cryo helped me reduce muscle */}
                    {/*                                soreness after my workout, enabling me to give */}
                    {/*                                100% every day." */}
                    {/* /> */}
                </GridChild>
                <GridChild gridColumn={{ _: 'span 12', laptopS: '4/ span 5' }}>
                    {/* <ReviewCard */}
                    {/*    authorImg={ */}
                    {/*        <StaticImage */}
                    {/*            aspectRatio={1} */}
                    {/*            src="../../../assets/xCryoOriginal/reviewer_1.jpg" */}
                    {/*            alt="reviewer" */}
                    {/*        /> */}
                    {/*    } */}
                    {/*    authorPosition="CROSSFIT ATHLETE" */}
                    {/*    authorName="PATRICIA THOMPSON" */}
                    {/*    reviewText="I was one of those people with a daily workout */}
                    {/*                                routine. The X°Cryo helped me reduce muscle */}
                    {/*                                soreness after my workout, enabling me to give */}
                    {/*                                100% every day." */}
                    {/* /> */}
                </GridChild>
            </GridParent>
        </Box>
    );
};

export default Expressions;
