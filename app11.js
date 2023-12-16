const countries = 
    [
        "AFA", "ALL", "DZD", "AOA", "ARS", "AMD", "AWG", "AUD", "AZN", "BSD", "BHD",
        "BDT", "BBD", "BYR", "BEF", "BZD", "BMD", "BTN", "BTC", "BOB", "BAM", "BWP",
        "BRL", "GBP", "BND", "BGN", "BIF", "KHR", "CAD", "CVE", "KYD", "XOF", "XAF",
        "XPF", "CLP", "CLF", "CNY", "COP", "KMF", "CDF", "CRC", "HRK", "CUC", "CZK",
        "DKK", "DJF", "DOP", "XCD", "EGP", "ERN", "EEK", "ETB", "EUR", "FKP", "FJD",
        "GMD", "GEL", "DEM", "GHS", "GIP", "GRD", "GTQ", "GNF", "GYD", "HTG", "HNL",
        "HKD", "HUF", "ISK", "INR", "IDR", "IRR", "IQD", "ILS", "ITL", "JMD", "JPY",
        "JOD", "KZT", "KES", "KWD", "KGS", "LAK", "LVL", "LBP", "LSL", "LRD", "LYD",
        "LTC", "LTL", "MOP", "MKD", "MGA", "MWK", "MYR", "MVR", "MRO", "MUR", "MXN",
        "MDL", "MNT", "MAD", "MZM", "MMK", "NAD", "NPR", "ANG", "TWD", "NZD", "NIO",
        "NGN", "KPW", "NOK", "OMR", "PKR", "PAB", "PGK", "PYG", "PEN", "PHP", "PLN",
        "QAR", "RON", "RUB", "RWF", "SVC", "WST", "STD", "SAR", "RSD", "SCR", "SLL",
        "SGD", "SKK", "SBD", "SOS", "ZAR", "KRW", "SSP", "XDR", "LKR", "SHP", "SDG",
        "SRD", "SZL", "SEK", "CHF", "SYP", "TJS", "TZS", "THB", "TOP", "TTD", "TND",
        "TRY", "TMT", "UGX", "UAH", "AED", "UYU", "USD", "UZS", "VUV", "VEF", "VND",
        "YER", "ZMK", "ZWL"
      ]
      



let Key='5f181334883c972712d6dd76'
let api=`https://v6.exchangerate-api.com/v6/${Key}/latest/USD`
const from =document.getElementById("fromselct");
const tops =document.getElementById("toselct");
const r =document.getElementById("result");

countries.forEach((currency)=>{
   // console.log(currency)
const option =document.createElement("option");
option.value=currency;
option.text=currency;
from.add(option);


});

countries.forEach((currency)=>{
    const option=document.createElement("option");
    option.value=currency;
    option.text=currency;
    tops.add(option);

});
from.value="USD";
tops.value="INR";

let convert=()=>{
    const amount=document.querySelector("#amount").value;
    const fromc=from.value;
    const toc=tops.value;
    if(amount.length!=0){
        fetch(api).then(resp=>resp.json()).then((data)=>{
      let fromExchange=data.conversion_rates[fromc];
      let toExchange=data.conversion_rates[toc];
      const converted=(amount/fromExchange)*toExchange;
r.innerHTML=`${amount} ${fromc} = ${converted.toFixed(2)} ${toc}`
        })

    }
    else{
        alert("Please fill in the amount!")
    }
};
document.querySelector("#convert").addEventListener("click",convert);
window.addEventListener("load",convert);
