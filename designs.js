// Select color input
// Select size input
$('#pixelCanvas').submit(function event() {
   event.preventDefault();
   height = $('#inputHeight').val();
   width = $('#inputWidth').val();
   makeGrid(height, width);
});
$('#submitButton').on('click', makeGrid);
// When size is submitted by the user, call makeGrid()

function makeGrid() {
 // Your code goes here!
 $('tr').remove();
 for (let u = 0; u < row; u++) {
     $().appendTo('<tr id=table' + i + '></tr>');
     for (let v = 0; v < column; v++) {
         $('#table' + i).append('<td></td>');
       }
   }
   // add colors to the cells
   $('td').click(function addColor(){
       color = $("#colorPicker").val();
       if ($(this).attr('style')) {
           $(this).removeAttr('style')
       } else {
           $(this).attr('style', 'background-color:' + color);
       }
   })

}
