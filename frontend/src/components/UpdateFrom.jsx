import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import { ImCross } from "react-icons/im";
export const UpdateFrom = ({ id }) => {
    let [open, setOpen] = useState(false)
    // const [title, setTitle] = useState('')
    const [task, setTask] = useState({})
    // const [completed, setCompleted] = useState(false)
    const getTaske = async () => {
        let response = await fetch(`http://127.0.0.1:8000/api/tasks/${id}/`);
        let data = await response.json()
        setTask(data)
    }
    useEffect(() => {
        getTaske()
    }, [])
    const updateTask = () => {
        fetch(`http://127.0.0.1:8000/api/tasks/${id}/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })
    }
    return (
        <>
            <Button variant="secondary"
                onClick={() => setOpen(true)}
            >Update</Button>
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
                            <Form.Control type="text" value={task.title} placeholder="Enter title" onInput={(e) => setTask({ ...task, title: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='fs-4'>Task</Form.Label>
                            <Form.Control type="text" value={task.task} placeholder="Enter Your Task" onInput={(e) => setTask({ ...task, task: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" checked={task.completed} label="Completed" onChange={(e) => setTask({ ...task, completed: e.target.checked })} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={updateTask}>
                            Update
                        </Button>
                    </Form>
                </>
            }
        </>
    )
}
