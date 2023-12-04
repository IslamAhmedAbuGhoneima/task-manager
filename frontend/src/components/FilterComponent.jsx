import React from 'react'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { UpdateFrom } from './UpdateFrom';
export const FilterComponent = ({ complete }) => {
    let [tasks, setTasks] = useState([])
    useEffect(() => {
        getTasks()
    }, [])
    const getTasks = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/tasks/');
        let data = await response.json()
        setTasks(data)
    }
    const deleteTaske = (id) => {
        fetch(`http://127.0.0.1:8000/api/tasks/${id}/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then(__ => getTasks())
    }
    return (
        <>
            {
                tasks.map((task) => (
                    complete === 'Completed' ?
                        <div key={task.id} className='d-flex justify-content-between align-items-center'>
                            {
                                task.completed &&
                                <>
                                    <del className='mt-2 mb-2 p-2 fs-5'>{task.title}</del>
                                    <div>
                                        <Button variant="danger" className='me-2'
                                            onClick={() => {
                                                deleteTaske(task.id)
                                            }}
                                        >Delete</Button>
                                        <UpdateFrom id={task.id} />
                                    </div>
                                </>
                            }
                        </div>
                        : <div key={task.id} className='d-flex justify-content-between align-items-center'>
                            {
                                !task.completed && <>
                                    <p key={task.id} className='mt-2 mb-2 p-2 fs-5'>{task.title}</p>
                                    <div>
                                        <Button variant="danger" className='me-2'
                                            onClick={() => {
                                                deleteTaske(task.id)
                                            }}
                                        >Delete</Button>
                                        <UpdateFrom id={task.id} />
                                    </div>
                                </>
                            }
                        </div>
                ))
            }
        </>
    )
}