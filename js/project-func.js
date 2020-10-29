 
 $(".img-item").click(function(){
 
           let imgSrc= $(this).attr('src'); 
          
                        $('#main-img').attr('src',imgSrc); 
                        $(this).css('backgroundColor','black');
 })      


 $(window).scroll(()=>
 {
     let windowTop=$(window).scrollTop();
    
     let About_offset=$('.About').offset().top;
      
if(windowTop>About_offset||windowTop<200)
{
    $('#main-navbar').fadeIn(300);

}else
{

    $('#main-navbar').fadeOut(300);


}

 });

$('#About_us').click(()=>{
    let  scrollTop=$(window).scrollTop();
    let about_top=$('.About').offset().top;

   $("html,body").animate({scrollTop:about_top+20},1000);
 
  })


$('#services').click(()=>{
    let  scrollTop=$(window).scrollTop();
    // let serv=$('.serv').offset().top;
    let serv_top=$('#serv').offset().top;


   $("html,body").animate({scrollTop:serv_top-50},1000);
 
  });


 $('#feature').click(()=>{
    let  scrollTop=$(window).scrollTop();
    let feature_top=$('#featur').offset().top;

   $("html,body").animate({scrollTop:feature_top-50},1000);
 
  })


$('#app').click(()=>{
 
    scrplTo=$(window).scrollTop();
    let app_top=$('#App').offset().top;


    $("html,body").animate({scrollTop:app_top-50},1000);

})

$('#Suppliers').click(()=>{
  let   scrollTop=$(window).scrollTop();

  let supplier_top=$('#Supplier-id').offset().top;
      

        $('html,body').animate({scrollTop:supplier_top-20},1000)
})