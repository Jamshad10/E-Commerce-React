import React from 'react';
import {
    AiFillFacebook,
    AiFillTwitterCircle,
    AiFillGoogleCircle,
    AiFillYoutube,
    AiFillLinkedin,
    AiFillAmazonCircle
} from "react-icons/ai";
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter className='text-center' color='white' bgColor='dark'>
            <MDBContainer className='p-4'>
                <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <AiFillFacebook />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <AiFillTwitterCircle />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <AiFillGoogleCircle />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <AiFillYoutube />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <AiFillLinkedin />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
                        <AiFillAmazonCircle />
                    </MDBBtn>
                </section>

                <section className='mb-4'>
                    <p>
                        While you are shopping for your home decoration and essentials on Pepperfry, dont forget the lighting. Lights play an important role in not just brightening up spaces but also contribute immensely to the look, feel and vibe of the place. Lights can have a huge impact on your mood and senses too. Bright lights can cheer you up while soft lighting can mellow down your mood and soothe your senses.
                    </p>
                </section>

                <section className=''>
                    <MDBRow>
                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Corporate</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <p className='text-white'>
                                        About Us
                                    </p>
                                </li>
                                <li>
                                    <p className='text-white'>
                                        Corporate Governance
                                    </p>
                                </li>
                                <li>
                                    <p className='text-white'>
                                        Lumina in the News
                                    </p>
                                </li>
                                <li>
                                    <p className='text-white'>
                                        Careers
                                    </p>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Useful Links</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <p className='text-white'>
                                        Explore Gift Cards
                                    </p>
                                </li>
                                <li>
                                    <p className='text-white'>
                                        Buy in Bulk
                                    </p>
                                </li>
                                <li>
                                    <p className='text-white'>
                                        Discover Our Brands
                                    </p>
                                </li>
                                <li>
                                    <p className='text-white'>
                                        Find a Studio
                                    </p>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Partner With Us</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <p className='text-white'>
                                        Sell on Pepperfry
                                    </p>
                                </li>
                                <li>
                                    <p className='text-white'>
                                        Become a Franchisee
                                    </p>
                                </li>
                                <li>
                                    <p className='text-white'>
                                        Become Our Channel Partner
                                    </p>
                                </li>
                                <li>
                                    <p className='text-white'>
                                        Become Our Pep Homie
                                    </p>
                                </li>
                            </ul>
                        </MDBCol>

                        <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
                            <h5 className='text-uppercase'>Need Help?</h5>

                            <ul className='list-unstyled mb-0'>
                                <li>
                                    <p className='text-white'>
                                        FAQs
                                    </p>
                                </li>
                                <li>
                                    <p className='text-white'>
                                        Policies
                                    </p>
                                </li>
                                <li>
                                    <p className='text-white'>
                                        Contact Us
                                    </p>
                                </li>

                            </ul>
                        </MDBCol>
                    </MDBRow>
                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
                © 2023 Copyright:
                <a className='text-white' href='https://mdbootstrap.com/'>
                    Ware_House.com
                </a>
            </div>
        </MDBFooter>
    );
}