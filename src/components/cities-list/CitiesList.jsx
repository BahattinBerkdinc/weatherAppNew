import React, { useState } from 'react';
import "./cities-list.scss";
import cities from "../../helpers/turkey-cities.json";
import { Link } from 'react-router-dom';
import { Col, Form, Row, Dropdown, DropdownButton } from 'react-bootstrap';
import { swalToast } from '../../helpers/swalToast';

const CitiesList = () => {
    const [searchedCity, setSearchedCity] = useState("");
    const [sortOption, setSortOption] = useState("name");


    const handleCities = (e) => {
        setSearchedCity(e.target.value);
    }

    const sortCities = (option) => {
        setSortOption(option);
    }

    const SearchedCities = cities.filter((city) => city.il_adi.toLowerCase().includes(searchedCity.toLowerCase()));

    if (sortOption === "plaka") {
        SearchedCities.sort((a, b) => a.plaka - b.plaka);
    } else if (sortOption === "name") {
        SearchedCities.sort((a, b) => a.il_adi.localeCompare(b.il_adi));
    }

    return (
        <div id='cities-list'>
            <div className='form-top'>
                <Form className='w-75'>
                    <Form.Control
                        type='text'
                        placeholder='Şehir arayın...'
                        onChange={handleCities} />
                </Form>

                <DropdownButton
                    id="dropdown-basic-button"
                    title="Sırala"
                    onSelect={(e) => sortCities(e)}
                >
                    <Dropdown.Item eventKey="plaka">Plakaya Göre</Dropdown.Item>
                    <Dropdown.Item eventKey="name">İsme Göre</Dropdown.Item>
                </DropdownButton>
            </div>

            <Row>
                {SearchedCities.length > 0 ? (
                    SearchedCities.map((city) => (
                        <Col xs={6} md={4} xl={3} key={city.plaka}>
                            <Link to={`/${city.plaka}/${city.lat}/${city.lon}`}>{city.il_adi}
                                <span className='plaka'>{city.plaka}</span>
                            </Link>
                        </Col>
                    ))
                ) : searchedCity.trim() !== "" && (
                    <div className='not-found'>Üzgünüz... Girilen bilgilerle eşleşen bir şehir bulunamadı.</div>
                )}
            </Row>
        </div>
    );
}

export default CitiesList;
