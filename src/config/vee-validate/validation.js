import { defineRule, configure, useForm } from "vee-validate";
import {
  required,
  email,
  confirmed,
  numeric,
  regex,
  min_value,
  max_value,
  min,
  max,
} from "@vee-validate/rules";

const setDefaultValidationRules = () => {
  configure({
    generateMessage: (context) => {
      if (context.rule?.name === "required") {
        // console.log(context, 'CONTEXT');
        return `Поле обязательно для заполнения`;
      }
      if (context.rule?.name === "email") {
        return `${context.field} должен быть правильного формата`;
      }
      if (context.rule?.name === "confirmed") {
        return `${context.field} должен совпадать`;
      }
      if (context.rule?.name === "numeric") {
        return `Поле ${context.field} должно быть числовым`;
      }
      if (context.rule?.name === "regex") {
        return `Поле ${context.field} не подходит под заданное правило`;
      }
      if (context.rule?.name === "min_value") {
        return `Поле должно быть больше ${
          context.rule.params[0] ?? ""
        } ${JSON.stringify(context.rule.params)}`;
      }
      if (context.rule?.name === "max_value") {
        return `Поле должно быть меньше ${context.rule.params[0] ?? ""}`;
      }
      return `${context.field} содержит некоректные данные`;
    },
  });

  defineRule("required", required);
  defineRule("email", email);
  defineRule("confirmed", confirmed);
  defineRule("numeric", numeric);
  defineRule("regex", regex);
  defineRule("min_value", min_value);
  defineRule("max_value", max_value);
  defineRule("min", min);
  defineRule("max", max);

  defineRule("phone", (value) => {
    if (value.length <= 17) {
      return `Указан некорректный номер телефон`;
    }
    return !!value;
  });
};
export default setDefaultValidationRules;
