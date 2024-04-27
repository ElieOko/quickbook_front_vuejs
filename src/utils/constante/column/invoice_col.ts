export const invoiceColumn = [
    { field: 'invoice.InvoiceId',title:"ID",editable: false,width: '85px',resizable: true},
    { field:'invoice.DocNumber',title:"Doc Number",filter:'text',editable: false,width: '115px',resizable: true}, 
    { field:'invoice.customer.FullyQualifiedName',title:"Customer",filter:'text',editable: false,width: '115px',resizable: true},                  
    { field:"invoice.Balance", title : "Balance", editable: false,filter:'text',editor: false,width: '155px',resizable: true}, 
    { field:"item.Name", title : "Item/Service", editable: false,filter:'text',editor: false,width: '155px',resizable: true},
    { field:"UnitPrice", title : "UnitPrice", editable: false,filter:'text',editor: false,width: '155px',resizable: true}, 
    { field:"Quantity", title : "Quantity", editable: false,filter:'text',editor: false,width: '155px',resizable: true}, 
    //
    { field:"invoice.TotalAmt", title : "Total amount", editable: false,filter:'text',editor: false,width: '155px',resizable: true},
    { field:"invoice.PrintStatus",title:"PrintStatus",editable: false,width: '155px',resizable: true},
    { field:"invoice.DueDate", title:"Date due",filter: "date",editable: false,width: '195px',resizable: true},
    { title:"Action",filter: "date",editable: false}
];