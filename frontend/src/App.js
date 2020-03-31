import React, { useState, useEffect } from 'react'

function App() {

    const [ paymentToken, setPaymentToken ] = useState('')
    let localToken = localStorage.getItem('paymentToken')

    useEffect(() => {
       
    }, [])

    function pay() {

        const scriptGn = document.createElement('script')
        scriptGn.innerHTML = "$gn={validForm:true,processed:false,done:{},ready:function(fn){$gn.done=fn;}}"

        document.head.appendChild(scriptGn)

        const scriptHead = document.createElement('script');
        scriptHead.type='text/javascript';

        const random = parseInt(Math.random()*1000000);

        scriptHead.src = `${process.env.REACT_APP_DOMAIN_GN}/${random}`;
        scriptHead.async = false;
        scriptHead.id = process.env.REACT_APP_ID_GN;

        if(!document.getElementById(`${process.env.REACT_APP_ID_GN}`)){
            document.head.appendChild(scriptHead);
        }
      
        const scriptBody = document.createElement('script');
        scriptBody.innerHTML = "$gn.ready(function(checkout) {var callback = function(error, response) {if(error) {console.error(error);} else { localStorage.setItem('paymentToken', response.data.payment_token); console.log(localStorage.getItem('paymentToken')); }};checkout.getPaymentToken({brand: 'visa',number: '4012001038443335',cvv: '123',expiration_month: '05',expiration_year: '2018'}, callback);});"

        //FAZER FETCH
        
        document.body.appendChild(scriptBody)


    }

    return(
        <div onClick={() => pay()}>Seu token é : {paymentToken}</div>
    )
}

export default App