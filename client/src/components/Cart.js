import React from 'react'
import TopHearder from './TopHearder'
import HomeNav from './HomeNav'
import Footer from './Footer'
import "../styles/Cart.css"
function Cart() {
  return (
    <div>
        <TopHearder />
        <HomeNav />
         <div className='cart-container'>
         <table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th>
    <th>Savings</th>
    <th>Price</th>
  </tr>
  <tr>
    <td className='cart-image'>
        <img src='https://s3-alpha-sig.figma.com/img/5e63/4682/db5174aff99bb9337d2dc9598a0b44e4?Expires=1697414400&Signature=ikoWbQYYxhSD9TkJno4xKub6vvOQvEPkvcoZ8A5oOcdqE6-~VgdEXAjPp-NUBZqgSUbPK4KaD45GPoR3kvrY6R24cvkmwnOo85R4PH9BSGl~ii0JsvxsUpGJiCLNL0fw~5a7eY65ByFn44zAiA6WnlPdaHDOUZ~fDpITtt5fzpdOdVw2a8sKrRPwdAWfyVrypdt36ja7jLHfdVIonR6yNVZ6HX6PFB95~YfknXjn9bN5TFv3blnseyJZleTr9lpzMlsVjqzHbH2mJ6W--KyGTTJ6iV-Fhm8nKwBd7Qgogu92DLajykQVCBtUUrIrPBT-YRRxAW9jyqDFG2UQ-C3OUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4' / >
         <span>Msi</span>
    </td>
    <td>Griffin</td>
    <td>$100</td>
    <th>home</th>
  </tr>
  <tr>
    <td>Lois</td>
    <td>Griffin</td>
    <td>$150</td>
    <th>home</th>
  </tr>
  <tr>
    <td>Joe</td>
    <td>Swanson</td>
    <td>$300</td>
    <th>home</th>
  </tr>
  <tr>
    <td>Cleveland</td>
    <td>Brown</td>
    <td>$250</td>
    <th>home</th>
  </tr>
</table>

         </div>
        <Footer />
    </div>
  )
}

export default Cart