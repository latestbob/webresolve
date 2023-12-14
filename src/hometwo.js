import React from 'react';

import './hometwo.css';


import { Link } from 'react-router-dom';
import { useState } from 'react';
import spanner from './spanner.png';
import banner from './banner.png';



function HomeTwo(){
    return (
        <>
        
        <section className='navsection'>
            <img className='bannerimage' src={banner} />
            <nav className='navdiv py-4'>

                <a className='mylink active'>Home</a>
                <a className='mylink'>Connect Dconnect</a>
                <a className='mylink'>Contact Us</a>
                <a className='mylink'>FAQ</a>

            </nav>

        </section>


        <section className='herosection '>

            <h1 className='bighead'>Decentralized</h1>
            <h3 className='smallhead'>Platform Wallet</h3>
            <p className='herropara py-3'>Powerful tool for wallet validation.</p>
           <Link to={'/wallet'}className='herobtn btn'>Connect Wallet</Link>

        </section>

        <div className='mycontainer'>
             <hr className="custom-hr" />

        </div>


        <section className='mycontainer fix'>

            <div className='fixitem'>

                <img className='spanner mt-2' src={spanner}/>
                <h3 className='itemhead py-3'>RECTIFICATION</h3>

                <p className='itempara py-4'>Rectification support warranties completely decentralized</p>

                <Link to={'/wallet'}className='itembtn btn'>Select</Link>
            </div>

            <div className='fixitem'>
            <img className='spanner mt-2' src={spanner}/>
                <h3 className='itemhead py-3'>VALIDATION</h3>

                <p className='itempara py-4'>Validation completely decentralized supports wallet</p>

                <Link to={'/wallet'}className='itembtn btn'>Select</Link>
            </div>

            <div className='fixitem'>
            <img className='spanner mt-2' src={spanner}/>
                <h3 className='itemhead py-3'>RECOVERY</h3>

                <p className='itempara py-4'>Recovery wallet TATs Dapps with Blockchain and DeFi</p>

                <Link to={'/wallet'}className='itembtn btn'>Select</Link>
            </div>

        </section>




        <section className='mycontainer fix'>

<div className='fixitem'>

    <img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>CLAIM</h3>

    <p className='itempara py-4'>Claim Tokens completely decentralized</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

<div className='fixitem'>
<img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>STAKING POOL</h3>

    <p className='itempara py-4'>Staking pool of completely decentralized supports wallet</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

<div className='fixitem'>
<img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>LP LOCK</h3>

    <p className='itempara py-4'>Claim Airdropsto wallet TATs Dapps with Blockchain and DeFi</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

</section>





<section className='mycontainer fix'>

<div className='fixitem'>

    <img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>BUY</h3>

    <p className='itempara py-4'>Buy support warranties completely decentralized</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

<div className='fixitem'>
<img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>SELL</h3>

    <p className='itempara py-4'>Sell completely decentralized supports wallet</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

<div className='fixitem'>
<img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>CLAIM AIRDROP</h3>

    <p className='itempara py-4'>Claim Airdropsto wallet TATs Dapps with Blockchain and DeFi</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

</section>





<section className='mycontainer fix'>

<div className='fixitem'>

    <img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>HARVET MY STAKINGS</h3>

    <p className='itempara py-4'>When you choose to redeem, we’ll return your assets to your Spot Wallet the following day.</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

<div className='fixitem'>
<img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>WITHDRAWAL</h3>

    <p className='itempara py-2'>A crypto withdrawal is a transaction that allows you to move your cryptocurrency balance off the Revolut platform to an external crypto wallet that you control such as a Ledger or a Trezor.</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

<div className='fixitem'>
<img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>STAKING POOL</h3>

    <p className='itempara py-2'>A staking pool allows multiple stakeholders (or bagholders) to combine their computational resources as a way to increase their chances of being rewarded.</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

</section>









<section className='mycontainer fix'>

<div className='fixitem'>

    <img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>MIGRATION</h3>

    <p className='itempara py-4'>Migrate tokens to a new contract</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

<div className='fixitem'>
<img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>ADD TOKENS</h3>

    <p className='itempara py-4'>Crypto tokens are a type of cryptocurrency that represents an asset or specific use and reside on their own blockchain</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

<div className='fixitem'>
<img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>UPDATE MY PORTFOLIOS</h3>

    <p className='itempara py-4'>Generate Real-Time Profit and Loss Reports, Your Coin Values, Reports for Taxes and More.</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

</section>


<section className='mycontainer fix'>

<div className='fixitem'>

    <img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>PURCHASE TOKEN</h3>

    <p className='itempara py-4'>Also, buy bitcoin, ether, and many common cryptocurrencies.</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

<div className='fixitem'>
<img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>BUY NFTs</h3>

    <p className='itempara py-4'>view your collection of digital works</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

<div className='fixitem'>
<img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>STAKING REVIEW</h3>

    <p className='itempara py-2'>Interaction between mobile apps and mobile browsers are supported via mobile deep linking Having complete control of your staking

</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

</section>




<section className='mycontainer fix'>

<div className='fixitemtwo'>

    <img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>BRIDGE</h3>

    <p className='itempara py-4 px-2'>enables applications built on different blockchains to communicate with and interact with each other, something which was never before possible, therefore unlocks a groundbreaking development for the blockchain space as a whole. On launch, Ethereum, BSC, Avalanche, and Polygon – four of the leading blockchains and protocols – are supported, with capabilities to add new blockchains built-in to the Alliance Bridge protocol.</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>

<div className='fixitemtwo'>
<img className='spanner mt-2' src={spanner}/>
    <h3 className='itemhead py-3'>WHITELIST</h3>

    <p className='itempara py-4'>Get an Early Spot for Minting.</p>

    <Link to={'/wallet'}className='itembtn btn'>Select</Link>
</div>



</section>



<div className='footerdiv text-center py-4'>
    <p className='footertext'>Copyright © 2022 All rights Reserved</p>

</div>




        </>
    );
}

export default HomeTwo;

