
var arrData=[];

function genderTable() {
    var html = '';
    $('#tblData tbody').text='';
    arrData.forEach(function (data, index) {
        data.STT = index;
        html += `<tr>
                <td>${data.STT}</td>
                <td>${data.Name}</td>
                <td>${data.Address}</td>
                <td>${data.Startup}</td>
                <td>${data.Endofitem}</td>
                <td>${data.VATtax}</td>
                <td><i class="fa fa-trash" aria-hidden="true"></i> 
                    <i class="fa fa-pencil-square-o" aria-hidden="true"></i></td>
            </tr>`;
    });
    $('#tblData tbody').html(html);
}
//Event 
//Add element
$('#btnAdd').click(function(){
    var nameinfo=$('#name').val();
    var addressinfo=$('#address').val();
    var startperiod=$('#Start_up').val();
    var enditem=$('#End_of_item').val();
    var vat=$('#VAT').val();
    

    if (nameinfo == "" || addressinfo == "" || startperiod == "" || enditem == "" || vat== "") {
        alert('Fill the blank');
        return;
    }
    if (startperiod <= 0 || enditem <= 0) {
        alert('the number of start-up period or end-of-item digits must more than 0');
        return;
    }
    if(startperiod>enditem){
        alert('the end-of-item digits must more than start-up period');
        return;
    }

    var dataRow = {
        STT: 0,
        Name: nameinfo,
        Address: addressinfo,
        Startup: startperiod,
        Endofitem:enditem,
        VATtax:vat+'%',
    }
    arrData.push(dataRow);
    genderTable();
})
$('#hienthi').val(function(){
    $('#tblData tbody').show($('#hienthi').val());
})
$('.fa-trash').click(function(){
    
})
$('.fa-pencil-square-o').click(function(){
    
})