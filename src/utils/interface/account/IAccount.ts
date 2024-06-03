export interface IAccount{
    AccountId?                       : Number
    AccountType?                     : String
    AccountSubType?                  : String
    Active?                          : Number
    Classification?                  : String
    CurrencyFId?                     : Number 
    CurrentBalance?                  : Number
    CurrentBalanceWithSubAccounts?   : Number
    Domain?                          : String
    FullyQualifiedName?              : String
    Name?                            : String
    Sparse?                          : Number
    SubAccount?                      : String
    SyncToken?                       : Number
}

export interface IAccountRequest{
    Name        : String
    AccountType : String
}