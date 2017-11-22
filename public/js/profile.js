// $(document).ready(function() {
//   $(document).on 'change', '#categories_select', ->
//     var id = $(this).children(":selected").attr("id");
//     alert(id);
    // $.ajax(
    //   type: 'GET'
    //   url: '/profile/get_subcategory'
    //   data: {
    //     category_id: id
    //   }
    // ).done (data) ->
    //   $('.subcategories_select').html(data)
// });


$('#categories_select').on ('change', function(){
  var id = $(this).children(":selected").attr("id");
  //alert(id);  // checking
  $.ajax({
    type: 'GET',
    url: '/profile/get_subcategory',
    data: {
      category_id: id
    }
  }).done(function(data) {
    console.log(data);
    $('.subcategories_select').html(data)
  });
});
