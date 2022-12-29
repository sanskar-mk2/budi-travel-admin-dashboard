import React from 'react';
import { useFetch } from 'hooks';
import { Modal, Selector, TextFieldArea, InputFieldLatest } from 'Component';
import { Controller, FormProvider, useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
export default function Policy() {
    const [state, SetState] = React.useState(false)
    const methods = useForm({
        mode: "all",
        defaultValues: {
            title: "",
            content: "",
        }
    })
    const { control, handleSubmit, setValue, 
        // formState:  { isDirty, isValid } 
    } = methods;

    const onSuccess = React.useCallback((response) => {
        if (response?.message) {
            toast.success(response?.message)
            // callFetch()
        }
    }, [])
    const onFailure = React.useCallback((error) => {
        if (error?.message) {
            toast.success(error?.message)
        }
    }, [])

    const { isLoading, data , callFetch } = useFetch({
        initialUrl: '/documents/privacy_policy',
        skipOnStart: false,
        config: {
            method: 'get'
        },
        onSuccess,
        onFailure
    })



    const onSubmit = React.useCallback((data) => {
        const formData = new FormData()
        formData.append("message" , data?.title);
        formData.append("content" , data?.content);
        callFetch({
         url:'/documents/privacy_policy',
         method:"post",
         data:formData
        })
    }, [callFetch])

    React.useEffect(() => {
        if(data){
            setValue("title", data?.data?.title , {
                isTouched: true,
                isValid: true
            })
            setValue("content", data?.data?.content, {
                isTouched: true,
                isValid: true
            })
        }

    }, [setValue])

    return (
        <div>
            <Modal onSubmit={handleSubmit(onSubmit)} title={" Terms & conditions  "} state={state} SetState={SetState}>
                <FormProvider {...methods}>
                    <div className="grid w-full">
                        <div className='grid grid-cols-12 gap-3'>
                            <div className='col-span-12'>
                                <Controller
                                    control={control}
                                    name="title"
                                    render={({
                                        field,
                                        fieldState: { invalid, isTouched, isDirty, error },
                                    }) => (
                                        <InputFieldLatest error={error} inputRef={field.ref} {...field} name={"title"} placeholder={"Title "} />
                                    )}
                                />
                            </div>
                        </div>
                        <Controller
                            control={control}
                            name="content"
                            render={({
                                field,
                                fieldState: { invalid, isTouched, isDirty, error },
                            }) => (
                                <TextFieldArea rows={10} {...field} error={error} name={"content"} placeholder="Message" />
                            )}
                        />
                    </div>
                </FormProvider>
            </Modal>
            <button onClick={() => SetState(true)}>Click</button>
        </div>
    )
}
