import { VNode } from 'vue';

export interface FormProps {
  labelPosition: string;
  formItem: Array<FormItemProps>;
}

export interface FormItemProps {
  gutter: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  itemList: Array<FormItemListProps>;
}

/**
 * @param(component) 组件名称，ElInput，ElSelect
 * @param(label) 标签名
 * @param(prop) form表单双向绑定字段
 * @param(isSlot) 是否自定义内容
 * @param(props) 组件属性
 * @param(rules) 表单校验
 * @param(childrenComponent) 子组件属性 类似ElSelect、ElCheckboxGroup、ElRadioGroup等组件
 */
export interface FormItemListProps {
  component: string;
  label: string;
  prop: string;
  isSlot?: boolean;
  props?: object;
  rules?: object | Array<object>;
  childrenComponent?: {
    props?: object;
    options?: Array<FormSelectOptProps>;
  };
  render?: (data: {
    formModel: Recordable;
    formItem: FormItemListProps;
  }) => VNode | VNode[] | string;
}

export interface FormSelectOptProps {
  label: string;
  value: string | number | boolean;
}
