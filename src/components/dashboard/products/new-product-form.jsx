"use client";
import { createProductAction } from "@/actions/product-actions";
import CancelButton from "@/components/common/form-controls/cancel-button";
import SubmitButton from "@/components/common/form-controls/submit-button";
import React from "react";
import { useFormState } from "react-dom";
import { Form } from "react-bootstrap";
const NewProductForm = () => {
    const initialState = { message: null, errors: {} };
    // useFormstate hook u ile form ve server actin arasinda  cift yonlu bir iletisim kanali olusur
    // dispatch ile formdan server action a
    // state ile server actin dan form a
    const [state, dispatch] = useFormState(createProductAction, initialState);
    const { title, description, price, category, image } = state.errors;
    return (
        <Form action={dispatch}>
            <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" type="text" isInvalid={!!title} />
                <Form.Control.Feedback type="invalid">
                    {title}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                    name="description"
                    as="textarea"
                    rows={3}
                    isInvalid={!!description}
                />
                <Form.Control.Feedback type="invalid">
                    {description}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Price</Form.Label>
                <Form.Control name="price" type="number" isInvalid={!!price} />
                <Form.Control.Feedback type="invalid">
                    {price}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Category</Form.Label>
                <Form.Select name="category" isInvalid={!!category}>
                    <option value="">Select</option>
                    <option value="Home">Home</option>
                    <option value="Computers">Computers</option>
                    <option value="Clothing">Clothing</option>
                    <option value="Kids">Kids</option>
                    <option value="Grocery">Grocery</option>
                </Form.Select>
                <Form.Control.Feedback type="invalid">
                    {category}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control name="image" type="text" isInvalid={!!image} />
                <Form.Control.Feedback type="invalid">
                    {image}
                </Form.Control.Feedback>
            </Form.Group>
            {/* bu butonu ayrı bir component yapmayınca pending durumunu gösteremiyorum */}
            <SubmitButton title="Create" />
            <CancelButton />
        </Form>
    );
};
export default NewProductForm;