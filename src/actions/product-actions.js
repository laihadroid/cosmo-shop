"use server";
import { config } from "@/utils/config";
import { convertFormDataToJson, getYupErrors } from "@/utils/form-validation";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import * as Yup from "yup";
const FormSchema = Yup.object({
    id: Yup.string().required(),
    title: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    price: Yup.number().typeError("Invalid number").required("Required"),
    image: Yup.string().required("Required"),
});
const CreateSchema = FormSchema.omit(["id"]);
export const createProductAction = async (prevState, formData) => {
    // Form data turunde  gelen form bilgilerini javascript object ine cevirdik
    const fields = convertFormDataToJson(formData);
    try {
        CreateSchema.validateSync(fields, { abortEarly: false });
        const resp = await fetch(`${config.apiURL}/products`, {
            method: "post",
            body: JSON.stringify(fields),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!resp.ok) {
            const data = await resp.json();
            throw new Error(data.message);
        }
    } catch (err) {
        console.log(err);
        if (err instanceof Yup.ValidationError) {
            return getYupErrors(err.inner);
        }
        return {
            message: "Something went wrong",
            errors: {
                commonError: err.message,
            },
        };
    }
    revalidatePath("/products");
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};
export const updateProductAction = async (prevState, formData) => {
    const fields = convertFormDataToJson(formData);
    try {
        FormSchema.validateSync(fields, { abortEarly: false });
        const resp = await fetch(`${config.apiURL}/products/${fields.id}`, {
            method: "put",
            body: JSON.stringify(fields),
            headers: {
                "Content-Type": "application/json",
            },
        });
        if (!resp.ok) {
            const data = await resp.json();
            throw new Error(data.message);
        }
    } catch (error) {
        if (error instanceof Yup.ValidationError) {
            return getYupErrors(error.inner);
        }
        return {
            message: "Something went wrong",
            errors: {
                commonError: err.message,
            },
        };
    }
    revalidatePath("/products");
    revalidatePath(`/products/${fields.id}`);
    revalidatePath("/dashboard/products");
    revalidatePath(`/dashboard/products/${fields.id}`);
    redirect("/dashboard/products");
};
export const deleteProductAction = async (id) => {
    try {
        if (!id) throw new Error("id is missing");
        const res = await fetch(`${config.apiURL}/products/${id}`, {
            method: "delete",
        });
        if (!res.ok) {
            const data = await res.json();
            throw new Error(data.message);
        }
    } catch (error) {
        return {
            message: "Something went wrong",
            errors: {
                commonError: error.message,
            },
        };
    }
    revalidatePath("/products");
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products");
};
