import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import { ImCross } from "react-icons/im";
import Button from 'react-bootstrap/Button';
export const FormComponent = () => {
    let [open, setOpen] = useState(false)
    const [title, setTitle] = useState('')
    const [task, setTask] = useState('')
    const [completed, setCompleted] = useState(false)
    const createTask = () => {
        fetch('http://127.0.0.1:8000/api/tasks/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "title": title,
                "task": task,
                "completed": completed
            })
        })
    }
    return (
        <>
            <Button variant="warning" className='ms-auto fs-8'
                onClick={() => {
                    setOpen(true)
                }}
            >Add Taske</Button>
            {
                open && <>
                    <div className="overlay"></div>
                    <Form className='bg-light p-4 w-50  m-auto position-absolute'>
                        <div className='d-flex justify-content-between align-items-center pb-2 border border-start-0 border-end-0 border-top-0'>
                            <h3>Task item</h3>
                            <ImCross className='close' onClick={
                                () => {
                                    setOpen(false);
                                }
                            } />
                        </div>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='fs-4'>Title</Form.Label>
                            <Form.Control type="text" placeholder="Enter title" onInput={
                                (e) => {
                                    setTitle(e.target.value)
                                }
                            } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='fs-4'>Task</Form.Label>
                            <Form.Control type="text" placeholder="Enter Your Task" onInput={
                                (e) => {
                                    setTask(e.target.value)
                                }
                            } />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Completed" onInput={
                                (e) => {
                                    setCompleted(e.target.checked)
                                }
                            } />
                        </Form.Group>
                        <Button variant="primary" type="submit"
                            onClick={createTask}
                        >
                            Submit
                        </Button>
                    </Form>
                </>
            }
        </>
    )
}
