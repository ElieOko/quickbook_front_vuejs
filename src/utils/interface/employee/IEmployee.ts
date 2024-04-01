export interface IEmployee{
    SSN: String
    PrimaryAddr: {
        Id: 8
        Line1:String
        City: String
        CountrySubDivisionCode: String
        PostalCode: String
      }
    BillableTime: Boolean
    domain: String
    sparse: Boolean
    Id: String
    SyncToken: String
    GivenName: String
    FamilyName: String
    DisplayName: String
    PrintOnCheckName: String
    Active: Boolean
    V4IDPseudonym:String
    PrimaryPhone: {
        FreeFormNumber: String
      }
}