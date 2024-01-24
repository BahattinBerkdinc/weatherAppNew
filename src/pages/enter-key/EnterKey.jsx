import React from 'react'
import "./enter-key.scss"
import { Form } from 'react-bootstrap'
import KeyControlForm from '../../components/key-control-form/KeyControlForm'
const EnterKey = () => {
    return (
        <div id='enter-key'>
            <h1>Şehirlere ait hava durumunu görüntülemek için <span>API KEY</span> giriniz</h1>
            <KeyControlForm />
            <div className='blur-layer'></div>
        </div>
    )
}

export default EnterKey
