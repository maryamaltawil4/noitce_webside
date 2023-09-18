import * as yup from "yup";

export const basicSchema = yup.object().shape({
    name:yup.string().required("required"),
    description:yup.string().required("required")
})