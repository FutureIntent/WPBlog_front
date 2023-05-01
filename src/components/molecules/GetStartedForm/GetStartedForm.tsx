import { yupResolver } from '@hookform/resolvers/yup';
import { phoneRegExp } from '@utils/helpers';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import {
    useNetlifyForm,
    NetlifyFormProvider,
    NetlifyFormComponent,
    Honeypot, // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
} from 'react-netlify-forms';
import * as yup from 'yup';

import Box from '@components/atoms/Box';
import Button from '@components/atoms/Button';
import { Input, TextArea } from '@components/atoms/Form';
import Checkbox from '@components/atoms/Form/Checkbox';
import Typography from '@components/atoms/Typography';

const GetStartedForm = ({
    productName,
    onFormSubmit,
}: {
    productName?: string;
    onFormSubmit: () => void;
}) => {
    const { t } = useTranslation();
    const defaultValues = {
        name: '',
        email: '',
        phone: '',
        message: '',
        policy: false,
        productName,
    };
    const schema = yup.object({
        formName: yup.string(),
        productName: yup.string(),
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
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues,
        resolver: yupResolver(schema),
    });
    const netlify = useNetlifyForm({
        name: 'get-started',
        honeypotName: 'bot-field',
    });

    const onSubmit = (data: any) => {
        netlify.handleSubmit(null, data);
        reset(defaultValues);
        onFormSubmit();
    };

    return (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <NetlifyFormProvider {...netlify}>
            <NetlifyFormComponent onSubmit={handleSubmit(onSubmit)}>
                <Honeypot />
                <Box backgroundColor="var(--white)" p={{ _: '1.25rem', tablet: '1.9rem 0' }}>
                    <Box
                        display="grid"
                        mb="1.25rem"
                        gridTemplateColumns="repeat(auto-fit,minMax(200px, 1fr))"
                        gridGap="1.25rem"
                    >
                        <Input
                            {...register('name')}
                            label={t('form.name')}
                            type="text"
                            error={errors?.name?.message}
                        />
                        <Input
                            {...register('email')}
                            label={t('form.email')}
                            type="email"
                            error={errors?.email?.message}
                        />
                        <Input
                            {...register('phone')}
                            label={`${t('form.phone')} (${t('form.optional')})`}
                            type="text"
                            error={errors?.phone?.message}
                        />
                    </Box>
                    <Box>
                        <TextArea {...register('message')} label={t('form.message')} />
                    </Box>
                    <Box mt="1.5rem">
                        <Checkbox {...register('policy')} error={errors?.policy?.message}>
                            <Typography variant="caption" color="var(--black-brand)">
                                I agree that my personal data is processed in accordance with
                                CryoCenter&apos;s{` `}
                                <Typography
                                    as="span"
                                    variant="caption"
                                    color="var(--blue-brand)"
                                    display="inline-block"
                                >
                                    Privacy Policy
                                </Typography>
                            </Typography>
                        </Checkbox>
                    </Box>
                    <Box display="flex" justifyContent="flex-end" mt="1rem" mb="3rem">
                        <Button type="submit" variant="primary" size="fullWidth">
                            <Typography variant="accent" color="var(--white)">
                                Submit
                            </Typography>
                        </Button>
                    </Box>
                </Box>
            </NetlifyFormComponent>
        </NetlifyFormProvider>
    );
};

export default GetStartedForm;
