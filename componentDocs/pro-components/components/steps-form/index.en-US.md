---
title: StepsForm
order: 1
atomId: StepsForm
group: Form
---

# StepsForm

StepsForm manages the data of sub forms through a Provider, each word form is a complete set of data that is combined in StepsForm to form the final data. It also comes with a progress bar and a related API to manage the progress bar.

> StepsForm inherits from Form.Provider, see the documentation [here](https://ant.design/components/form/#Form.Provider), the value of the transformed moment is a function provided by ProForm, so `onFormFinish` and `onFormChange` where the values are untransformed.

## Step-by-Step Forms

- [外部示例代码]
	- description: 
	- src: /form/StepsForm/steps-from.tsx
	- thumbnail: 

## Step-by-Step Forms - Multi-Card

- [外部示例代码]
	- description: 
	- src: /form/StepsForm/multi-card-step-form.tsx
	- thumbnail: 

## Step-by-Step Forms - Works with Modal

- [外部示例代码]
	- description: 
	- src: /form/StepsForm/modal-step-form.tsx
	- thumbnail: 

## StepForm in edit scene

- [外部示例代码]
	- description: 
	- src: /form/StepsForm/add-or-edit-step-form.tsx
	- thumbnail: 

## StepsForm

| Parameters      | Description                                                                                                                                 | Type                                                          | Default |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------- | ------- |
| current         | The number of steps in the current form, starting from `0`                                                                                  | `number`                                                      | 0       |
| onCurrentChange | current The event that changed                                                                                                              | `(current:number)=>void`                                      | -       |
| onFinish        | Triggered when the last step is submitted successfully. If returns a truthy value, it will reset all forms and step back to the first step  | `(values: T) => Promise<boolean \| void>`                     | -       |
| stepsProps      | StepsForm's own props for Steps, used in the same way as [antd](https://ant.design/components/steps/), but without the current and onChange | [ props](https://ant.design/components/steps/#API)            | -       |
| stepFormRender  | Customize the currently displayed form, return dom inside the form                                                                          | `(formDom: ReactNode) => ReactNode`                           | -       |
| stepsFormRender | Customize the entire form area, returning the dom on the outside of the form                                                                | `(formDom: ReactNode, submitter: ReactNode) => ReactNode`     | -       |
| stepsRender     | Customize the stepper                                                                                                                       | `(steps, dom) => ReactNode`                                   | -       |
| formRef         | A reference to the current step form instance                                                                                               | `MutableRefObject<ProFormInstance<any> \| undefined \| null>` | -       |

### StepForm

Exactly the same as [ProForm](/components/form), except that onFinish supports Promise, so if it returns `false`, it won't jump to the next step.

| Parameters | Description                 | Type                                              | Default |
| ---------- | --------------------------- | ------------------------------------------------- | ------- |
| onFinish   | Form submit success trigger | `(values: T) => Promise<boolean \| void> \| void` | -       |
