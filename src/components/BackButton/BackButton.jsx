import Button from 'react-bootstrap/Button'
import React from 'react'
import { useNavigate } from 'react-router'

const BackButton = () => {

    const navigate = useNavigate()

    const handleVolver = () =>{
        navigate(-1)
    }

    return (
        <Button className="m-3" variant="secondary" size="sm" onClick={handleVolver}> Volver </Button>
    )
}

export default BackButton
