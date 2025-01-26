import { DescriptionFieldProps, FormContextType, RichDescription, RJSFSchema, StrictRJSFSchema } from '@rjsf/utils';

export default function DescriptionField<
  T = any,
  S extends StrictRJSFSchema = RJSFSchema,
  F extends FormContextType = any
>({ id, description, registry, uiSchema }: DescriptionFieldProps<T, S, F>) {
  if (!description) {
    return null;
  }

  return (
    <div>
      <div id={id} className='mb-3'>
        <RichDescription description={description} registry={registry} uiSchema={uiSchema} />
      </div>
    </div>
  );
}
