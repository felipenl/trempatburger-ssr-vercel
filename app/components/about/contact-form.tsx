import { Button } from '@components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@components/ui/form';
import { Input } from '@components/ui/input';
import { Textarea } from '@components/ui/textarea';
import { useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { CircleAlert, CircleCheck, Send, Trash } from 'lucide-react';
import { useEffect, useMemo } from 'react';
import Loading from '@components/ui/loading';
import { Form as RouterForm, useActionData, useNavigation } from 'react-router';

const baseString = 'about.contact.';

function ContactForm() {
  const { t } = useTranslation();
  const actionData = useActionData<{ status: string; message?: string }>();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, { error: t(baseString + 'form.invalid-name') }),
        subject: z.string().min(2, { error: t(baseString + 'form.invalid-subject') }),
        email: z.string().email({ message: t(baseString + 'form.invalid-email') }),
        message: z.string().min(10, { error: t(baseString + 'form.invalid-message') }),
      }),
    [t]
  );

  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  useEffect(() => {
    if (actionData?.status === 'success') {
      form.reset();
    }
  }, [actionData, form]);

  return (
    <div id="contact-form">
      <h2 className="mt-0">{t(baseString + 'contact-us')}</h2>
      <p className="contact-desc">{t(baseString + 'description')}</p>

      <Form {...form}>
        <RouterForm method="post" className="space-y-8">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t(baseString + 'form.name')}</FormLabel>
                <FormControl>
                  <Input placeholder={t(baseString + 'form.name')} {...field} name="name" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t(baseString + 'form.email')}</FormLabel>
                <FormControl>
                  <Input placeholder={t(baseString + 'form.email')} {...field} name="email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t(baseString + 'form.subject')}</FormLabel>
                <FormControl>
                  <Input placeholder={t(baseString + 'form.subject')} {...field} name="subject" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t(baseString + 'form.message')}</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder={t(baseString + 'form.message')}
                    className="min-h-60"
                    {...field}
                    name="message"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormDescription className="min-h-4">
            {actionData?.status === 'error' && (
              <span className="text-destructive flex items-center text-sm">
                <CircleAlert className="mr-1" />
                {t(baseString + 'form.error')}
              </span>
            )}
            {actionData?.status === 'success' && (
              <span className="flex items-center text-sm text-green-500">
                <CircleCheck className="mr-1" />
                {t(baseString + 'form.success')}
              </span>
            )}
          </FormDescription>

          <div className="flex items-center justify-end gap-4">
            <Button type="reset" variant="outline">
              <Trash />
              {t('common.reset')}
            </Button>
            <Button type="submit" variant="outline" disabled={isSubmitting}>
              {isSubmitting ? (
                <Loading label={t('common.submitting')} className="m-0!" />
              ) : (
                <>
                  <Send />
                  {t('common.submit')}
                </>
              )}
            </Button>
          </div>
        </RouterForm>
      </Form>
    </div>
  );
}

export default ContactForm;
