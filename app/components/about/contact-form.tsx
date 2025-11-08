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
import { useMemo, useState } from 'react';
import Loading from '@components/ui/loading';
import { FormStatus, type FormStatusType } from '@/types/forms';

const baseString = 'about.contact.';

function ContactForm() {
  const { t } = useTranslation();

  const [status, setStatus] = useState<FormStatusType>(FormStatus.idle);

  const schema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, { error: t(baseString + 'form.invalid-name') }),
        subject: z.string().min(2, { error: t(baseString + 'form.invalid-subject') }),
        email: z.email({ error: t(baseString + 'form.invalid-email') }),
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

  const onSubmit = (data: unknown) => {
    setStatus(FormStatus.loading);

    window
      .fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(res => {
        if (!res.ok) {
          setStatus(FormStatus.error);
          return;
        }

        setStatus(FormStatus.success);
        form.reset();
        setTimeout(() => setStatus(FormStatus.idle), 5000);
      })
      .catch(e => {
        console.log(e);
        setStatus(FormStatus.error);
      });
  };

  return (
    <div id="contact-form">
      <h2 className="mt-0">{t(baseString + 'contact-us')}</h2>

      <p className="contact-desc">{t(baseString + 'description')}</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          onReset={() => form.reset()}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{t(baseString + 'form.name')}</FormLabel>
                <FormControl>
                  <Input placeholder={t(baseString + 'form.name')} {...field} />
                </FormControl>
                <FormDescription />
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
                  <Input placeholder={t(baseString + 'form.email')} {...field} />
                </FormControl>
                <FormDescription />
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
                  <Input placeholder={t(baseString + 'form.subject')} {...field} />
                </FormControl>
                <FormDescription />
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
                  />
                </FormControl>
                <FormDescription />
                <FormMessage />
              </FormItem>
            )}
          />

          <FormDescription className="min-h-4">
            <span className="flex items-center justify-items-center gap-2 text-sm">
              {status === FormStatus.error && (
                <span className="text-destructive">
                  <CircleAlert className="mx-1 inline-block" />
                  {t(baseString + 'form.error')}
                </span>
              )}

              {status === FormStatus.success && (
                <span className="text-green-500">
                  <CircleCheck className="mx-1 inline-block" />
                  {t(baseString + 'form.success')}
                </span>
              )}
            </span>
          </FormDescription>

          <div className="flex items-center justify-end gap-4">
            <Button type="reset" variant="outline">
              <Trash />
              {t('common.reset')}
            </Button>
            <Button type="submit" variant="outline" disabled={status === FormStatus.loading}>
              {status === FormStatus.loading ? (
                <Loading label={t('common.submitting')} className="m-0!" />
              ) : (
                <>
                  <Send />
                  {t('common.submit')}
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}

export default ContactForm;
