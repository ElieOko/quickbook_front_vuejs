export interface IItemRef{
    name?: String
    value?:String
}
export interface IItemAccountRef{
    name?: String
    value?:String
}

export interface IItem{
    ItemId:number,
    FullyQualifiedName?:String,
    Domain?:String,
    Name?:String,
    SyncToken?:String,
    Type?:String,
    Active?:Boolean,
    Sparse?:Boolean,
    TrackQtyOnHand?:number,
    UnitPrice?:number,
    PurchaseCost?:number,
    QtyOnHand?:number,
    Taxable?:Boolean,
    InvStartDate?:String,
}
/*

*/