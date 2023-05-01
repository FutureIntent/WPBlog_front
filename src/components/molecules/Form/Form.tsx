import { yupResolver } from '@hookform/resolvers/yup/dist/yup';
import { phoneRegExp } from '@utils/helpers';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
    useNetlifyForm,
    NetlifyFormProvider,
    NetlifyFormComponent,
    Honeypot, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
} from 'react-netlify-forms';
import styled from 'styled-components';
import * as yup from 'yup';

import theme from '@theme/configs';
import { CRYO_PHONE_NUMBER } from '@theme/const';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import { Input, TextArea } from '@components/atoms/Form';
import Checkbox from '@components/atoms/Form/Checkbox';
import Typography from '@components/atoms/Typography';

import PaperPlane from '@components/molecules/Icons/PaperPlane';
import Phone from '@components/molecules/Icons/Phone';

const TextInputWrapper = styled.div`
    max-width: 22.5rem;
`;

const defaultValues = {
    name: '',
    email: '',
    phone: '',
    message: '',
    policy: false,
};

const Form = ({ title, noMargin = false, ...rest }: { title?: string; noMargin?: boolean }) => {
    const { t } = useTranslation();
    const gatsbyBreakpoints = useBreakpoint();
    const schema = yup.object({
        formName: yup.string(),
        name: yup.string().required(t('form.required.name')).min(2, t('form.error.name')),
        email: yup.string().required(t('form.required.email')).email(t('form.error.email')),
        phone: yup
            .string()
            .matches(phoneRegExp, { message: t('form.error.phone'), excludeEmptyString: true }),
        message: yup.string().max(200, t('form.error.message')),
        policy: yup.boolean().oneOf([true], t('form.error.policy')),
    });
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    });
    const netlify = useNetlifyForm({
        name: 'contact',
        honeypotName: 'bot-field',
    });

    const onSubmit = (data: any) => {
        netlify.handleSubmit(null, data);
        reset(defaultValues);
    };

    return (
        <NetlifyFormProvider {...netlify}>
            <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                <Honeypot />
                <Box
                    backgroundColor="var(--white)"
                    boxShadow={theme.shadows.card}
                    p={{ _: '1.25rem', tablet: '1.9rem 2.5rem' }}
                    mt={noMargin ? '0' : { _: '-6rem', tablet: '-15rem', laptopS: '6.25rem' }}
                    mb={noMargin ? '0' : '6.7rem'}
                    {...rest}
                >
                    <Box display="flex" mb="1.25rem" justifyContent="space-between">
                        <Typography variant="h2" color="var(--black-brand)" mr="0.5rem">
                            {title || t('gotQuestions')}
                        </Typography>
                        {gatsbyBreakpoints.laptopS && (
                            <Button
                                as="a"
                                variant="secondary"
                                href={`tel:${CRYO_PHONE_NUMBER}`}
                                withIcon
                            >
                                <Typography variant="accent" color="var(--blue-brand)">
                                    {t('feelFreeToCallUs')} <Phone />
                                </Typography>
                            </Button>
                        )}
                    </Box>
                    <Box mb="1.5rem">
                        <Checkbox {...register('policy')} error={errors?.policy?.message}>
                            <Typography variant="caption" color="var(--black-brand)">
                                {t('iAgreeCryo')}&nbsp;
                                <Typography
                                    as="span"
                                    variant="caption"
                                    color="var(--blue-brand)"
                                    display="inline-block"
                                >
                                    {t('privacyPolicy')}
                                </Typography>
                            </Typography>
                        </Checkbox>
                    </Box>
                    <Box
                        display="grid"
                        mb="1.25rem"
                        gridTemplateColumns="repeat(auto-fit,minMax(200px, 1fr))"
                        gridGap="1.25rem"
                    >
                        <TextInputWrapper>
                            <Input
                                {...register('name')}
                                label={t('form.name')}
                                type="text"
                                error={errors?.name?.message}
                            />
                        </TextInputWrapper>
                        <TextInputWrapper>
                            <Input
                                {...register('email')}
                                label={t('form.email')}
                                type="email"
                                error={errors?.email?.message}
                            />
                        </TextInputWrapper>
                        <TextInputWrapper>
                            <Input
                                {...register('phone')}
                                label={`${t('form.phone')} (${t('form.optional')})`}
                                type="text"
                                error={errors?.phone?.message}
                            />
                        </TextInputWrapper>
                    </Box>
                    <Box>
                        <TextArea {...register('message')} label={t('form.message')} />
                    </Box>
                    <Box display="flex" justifyContent="flex-end" mt="1rem" mb="3rem">
                        <Button variant="primary" size={{ _: 'fullWidth', tablet: 'large' }}>
                            <Typography variant="accent" color="var(--white)" mr="0.6rem">
                                {t('form.send')}
                            </Typography>
                            <PaperPlane />
                        </Button>
                    </Box>
                </Box>
            </NetlifyFormComponent>
        </NetlifyFormProvider>
    );
};

export default Form;
