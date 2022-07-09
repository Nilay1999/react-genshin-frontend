import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Col, Row } from "react-bootstrap";
import "../form.css";

const Signup = () => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className="Login">
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group size="lg" controlId="username">
                    <Row>
                        <Form.Label column="lg-3" lg={3}>
                            Username
                        </Form.Label>
                        <Col>
                            <Form.Control
                                type="text"
                                autoFocus
                                {...register("Username", {
                                    required: true,
                                    maxLength: 10,
                                })}
                            />
                            <p className="text-danger">
                                {errors.Username?.type === "required" &&
                                    "Username is required"}
                            </p>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group size="lg" controlId="email">
                    <Row>
                        <Form.Label column="lg-3" lg={3}>
                            Email
                        </Form.Label>
                        <Col>
                            <Form.Control
                                {...register("Email", { required: true })}
                                autoFocus
                                type="email"
                            />
                            <p className="text-danger">
                                {errors.Email?.type === "required" &&
                                    "Email is required"}
                            </p>
                        </Col>
                    </Row>
                </Form.Group>

                <Form.Group size="lg" controlId="password">
                    <Row>
                        <Form.Label column="lg-3" lg={3}>
                            Password
                        </Form.Label>
                        <Col>
                            {" "}
                            <Form.Control
                                {...register("password", {
                                    min: 6,
                                    max: 15,
                                    required: true,
                                })}
                                autoFocus
                                type="password"
                            />
                            <p className="text-danger">
                                {errors.password?.type === "required" &&
                                    "Password is required"}
                            </p>
                        </Col>
                    </Row>
                </Form.Group>

                <Button block="true" size="lg" type="submit">
                    Sign up
                </Button>
            </Form>
        </div>
    );
};

export default Signup;
