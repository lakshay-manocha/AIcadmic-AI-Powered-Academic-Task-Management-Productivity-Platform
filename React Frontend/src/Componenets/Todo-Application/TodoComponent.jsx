import { useNavigate, useParams } from "react-router-dom";
import FooterComponenet from "./FooterComponent";
import HeaderComponenet from "./HeaderComponent";
import { createTodoApi, retrieveTodoApi, updateTodoApi } from "./API/TodoAppService";
import { useEffect, useState } from "react";
import { useAuth } from "./Security/AuthContext";
import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function TodoComponent() {

    const { id } = useParams()

    const authContext = useAuth()

    const navigate = useNavigate()

    const username = authContext.username

    const [description, setDescription] = useState("")

    const [targetDate, setTargetDate] = useState("")

    useEffect(
        () => retrieveTodo(),
        [id]
    )

   function retrieveTodo() {
    const parsedId = parseInt(id);

    if (!isNaN(parsedId) && parsedId !== -1) {
        retrieveTodoApi(username, parsedId)
            .then(response => {
                setDescription(response.data.description);
                setTargetDate(response.data.targetDate);
            })
            .catch(error => console.log(error));
    }
}


    function onSubmit(values) {
    console.log(values)

    const parsedId = parseInt(id); // Ensure id is a number

    const todo = {
        id: parsedId,
        username: username,
        description: values.description,
        targetDate: values.targetDate,
    }

    if (parsedId === -1) {
        createTodoApi(username, todo)
            .then(response => {
                console.log(response)
                navigate('/todos')
            })
            .catch(error => {
                console.log(error)
            })
    } else {
        updateTodoApi(username, parsedId, todo)
            .then(response => {
                console.log(response)
                navigate('/todos')
            })
            .catch(error => {
                console.log(error)
            })
    }
}


    function validate(values) {
        let errors = {
            //description: 'Enter a valid Description'


        }
        if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 characters'
        }
        if (values.targetDate === null || values.targetDate === '') {
            errors.targetDate = 'Enter a Target Date'
        }
        console.log(values)
        return errors
    }


    return (
        <div className="container my-5">
            <HeaderComponenet />

            <div className="card shadow border-0">
                <div className="card-header bg-primary text-white text-center">
                    <h3 className="mb-0">Enter Todo Details</h3>
                </div>
                <div className="card-body p-4">

                    <Formik
                        initialValues={{ description, targetDate }}
                        enableReinitialize={true}
                        onSubmit={onSubmit}
                        validate={validate}
                        validateOnChange={false}
                        validateOnBlur={false}
                    >
                        {(props) => (
                            <Form>

                                <div className="mb-3">
                                    <ErrorMessage
                                        name="description"
                                        component="div"
                                        className="alert alert-warning"
                                    />
                                </div>

                                <div className="mb-3">
                                    <label htmlFor="description" className="form-label">Description</label>
                                    <Field type="text" name="description" className="form-control" />
                                </div>

                                <div className="mb-4">
                                    <label htmlFor="targetDate" className="form-label">Target Date</label>
                                    <Field type="date" name="targetDate" className="form-control" />
                                </div>

                                <div className="text-center">
                                    <button className="btn btn-success px-4 py-2" type="submit">
                                        <i className="bi bi-check-circle me-2"></i>Submit
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </div>
            </div>

            <FooterComponenet />
        </div>
    )
}