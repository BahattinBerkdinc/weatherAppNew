import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import "./key-control.scss"
import { useDispatch } from 'react-redux';
import { setKey } from '../../store/key';
import { swalToast } from '../../helpers/swalToast';
import { useNavigate } from 'react-router-dom';

//icons
import { FaChevronRight } from "react-icons/fa6";
import { IoKeyOutline } from "react-icons/io5";
import Loading from '../loading/Loading';
const KeyControlForm = () => {
    const [keyEntered, setKeyEntered] = useState("")
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const currentKey = process.env.REACT_APP_API_KEY
    const navigate = useNavigate()
    const handleKey = (e) => {
        setKeyEntered(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        if (keyEntered === "") {
            swalToast("API KEY Boş Bırakılamaz", "Lütfen API KEY giriniz", "error")
            setLoading(false)
            return
        }

        if (keyEntered === currentKey) {
            dispatch(setKey(keyEntered))
            swalToast("API KEY Doğrulandı", "", "success", 3000)
            sessionStorage.setItem("key", keyEntered)
            navigate("/")
            setLoading(false)



        } else {
            setKeyEntered("")
            swalToast("Hatalı API KEY", "Lütfen tekrar deneyiniz", "error")
            setLoading(false)
        }

    }



    return (
        <div id='key-control-form'>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                        type='text'
                        placeholder='API KEY GIRINIZ'
                        value={keyEntered || ""}
                        onChange={handleKey}
                    />
                    <Button type='submit'><FaChevronRight /></Button>
                    {
                        loading ? <Loading /> : <IoKeyOutline />
                    }
                </Form.Group>
            </Form>
        </div>
    )
}

export default KeyControlForm
