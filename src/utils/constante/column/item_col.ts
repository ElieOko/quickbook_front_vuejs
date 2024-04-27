export const itemColumn = [
    { field: 'ItemId',title:"ID",editable: false,width: '85px',resizable: true},
    { field:"Type", title:"Type",filter: "date",editable: false,width: '195px',resizable: true},
    { field:'FullyQualifiedName',title:"FullyQualifiedName",filter:'text',editable: false,width: '155px',resizable: true},                 
    { field:"UnitPrice", title : "Unit Price", editable: false,filter:'text',editor: false,width: '155px',resizable: true},
    { field:"PurchaseCost",title:"PurchaseCost",editable: true,width: '155px',resizable: true},
    { field:"QtyOnHand", title:"QtyOnHand",filter: "date",editable: false,width: '195px',resizable: true},
    { field:"TrackQtyOnHand", title:"TrackQtyOnHand",filter: "text",editable: false,width: '195px',resizable: true},
    { title:"Active",filter: "Active",editable: false,resizable: true},
];