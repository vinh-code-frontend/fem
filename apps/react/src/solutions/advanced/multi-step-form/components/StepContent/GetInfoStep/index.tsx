import z from 'zod';
import { useFormContext } from 'react-hook-form';
import { FormItem } from '../../shared/FormItem';
import StepLayout from '../../shared/StepLayout';

export const registerSchema = z.object({
  name: z.string().min(1, 'This field is required.'),
  email: z.string().min(1, 'This field is required.').email('Enter a valid email.'),
  phone: z.string().min(1, 'This field is required.').min(10, 'Phone must has 10 numbers'),
});

export type RegisterFormData = z.infer<typeof registerSchema>;

const GetInfoStep = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<RegisterFormData>();

  return (
    <StepLayout
      header="Personal info"
      description="Please provide your name, email address, and phone number."
    >
      <div className="flex flex-col gap-4 sm:gap-6">
        <FormItem name="name" label="Name" error={errors.name}>
          <input
            id="name"
            {...register('name')}
            placeholder="e.g. Stephen King"
            autoComplete="off"
          />
        </FormItem>
        <FormItem name="email" label="Email Address" error={errors.email}>
          <input
            id="email"
            type="email"
            {...register('email')}
            placeholder="e.g. stephenking@lorem.com"
            autoComplete="off"
          />
        </FormItem>
        <FormItem name="phone" label="Phone Number" error={errors.phone}>
          <input
            id="phone"
            {...register('phone')}
            placeholder="e.g. +1 234 567 890"
            autoComplete="off"
          />
        </FormItem>
      </div>
    </StepLayout>
  );
};

export default GetInfoStep;
