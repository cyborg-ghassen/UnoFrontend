import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Form, Dropdown} from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Link, useNavigate} from 'react-router-dom';
import Avatar from 'components/common/Avatar';
import Flex from 'components/common/Flex';
import FalconCloseButton from 'components/common/FalconCloseButton';
import "../../../pages/landing/styles.css"
import useQuery from 'hooks/useQuery';

const MediaSearchContent = ({item}) => {
    return (
        <Dropdown.Item className="px-x1 py-2" as={Link} to={item.url}>
            <Flex alignItems="center">
                {item.file && (
                    <div className="file-thumbnail">
                        <img src={item.img} alt="" className={item.imgAttrs.class}/>
                    </div>
                )}
                {item.icon && (
                    <Avatar src={item.icon.img} size="l" className={item.icon.status}/>
                )}

                <div className="ms-2">
                    <h6 className="mb-0">{item.title}</h6>
                    <p
                        className="fs--2 mb-0"
                        dangerouslySetInnerHTML={{__html: item.text || item.time}}
                    />
                </div>
            </Flex>
        </Dropdown.Item>
    );
};

const SearchBox = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    let query = useQuery();
    const [searchInputValue, setSearchInputValue] = useState(query.get("search") || '');

    const navigate = useNavigate()
    const handleSubmit = (event) => {
        if (searchInputValue === "") {
            query.delete("search")
        } else {
            query.set("search", searchInputValue)
        }
        navigate(`/products?${query.toString()}`)
    };

    return (
        <Dropdown show={dropdownOpen} className="search-box w-100">
            <Form className="position-relative"
                  onSubmit={handleSubmit}
            >
                <Form.Control
                    type="search"
                    placeholder="Recherche..."
                    aria-label="Search"
                    className="py-2 i6 rounded search-input "
                    value={searchInputValue}
                    name={"search"}
                    onChange={({target}) => setSearchInputValue(target.value)}
                    onFocus={() => setDropdownOpen(true)}
                    onBlur={() => setDropdownOpen(false)}
                />
                <FontAwesomeIcon
                    icon="search"
                    className="position-absolute text-400 search-box-icon"
                />
                {(dropdownOpen || searchInputValue) && (
                    <div className="search-box-close-btn-container">
                        <FalconCloseButton
                            size="sm"
                            noOutline
                            className="fs--2"
                            onClick={() => {
                                setSearchInputValue('');
                                setDropdownOpen(false);
                            }}
                        />
                    </div>
                )}
            </Form>
        </Dropdown>
    );
};

MediaSearchContent.propTypes = {
    item: PropTypes.shape({
        catagories: PropTypes.string,
        url: PropTypes.string.isRequired,
        icon: PropTypes.shape({
            img: PropTypes.string.isRequired,
            size: PropTypes.string,
            status: PropTypes.string
        }),
        title: PropTypes.string,
        text: PropTypes.string,
        img: PropTypes.string,
        time: PropTypes.string,
        file: PropTypes.bool,
        imgAttrs: PropTypes.shape({
            class: PropTypes.string
        })
    }).isRequired
};

SearchBox.propTypes = {
    autoCompleteItem: PropTypes.arrayOf(
        PropTypes.shape(MediaSearchContent.propTypes.item)
    )
};

export default SearchBox;
