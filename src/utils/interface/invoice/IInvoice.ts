import type { IBillEmail } from "../bill/IBill"
import type { ICurrencyRef } from "../currency/ICurrency"
import type { ICustomer } from "../customer/ICustomer"
import type { ICustomerRef, IDeliveryInfo, ILine, IMetaData } from "../other/IOther"


export interface IInvoice{
    InvoiceId?                       : Number
    AllowIPNPayment?                 : Boolean
    AllowOnlinePayment?              : Boolean
    AllowOnlineCreditCardPayment?    : Boolean
    AllowOnlineACHPayment?           : Boolean
    domain?                          : String
    Sparse?                          : Boolean
    SyncToken?                       : Number
    CustomField?                     : Array<any>
    TxnDate?                         : String
    FreeFormAddress?                 : Boolean
    DueDate?                         : String
    GlobalTaxCalculation?            : String
    TotalAmt?                        : Number
    PrintStatus?                     : String
    EmailStatus?                     : String
    Balance?                         : Number
    LinkedTxn?                       : Array<any>
    MetaData?                        : IMetaData
    CurrencyRef?                     : ICurrencyRef
    BillEmail?                       : IBillEmail
    DeliveryInfo?                    : IDeliveryInfo
    CustomerRef?                     : ICustomerRef
    Line?                            : Array<ILine>
    customer?                        : ICustomer
}

export interface IInvoiceRequest{
    Line:Array<ILineArray>, 
      CustomerRef: {
        value?: String
      }
}

export interface ILineArray{
    DetailType: String, 
    Amount?: Number, 
    SalesItemLineDetail: {
    ItemRef: {
        name: String, 
        value: String
        }
    Qty: number
    }
}