const  hamburguesa  =  documento . querySelector ( '.header .header-nav .nav-list .hamburger' ) ;
const  mobile_menu  =  documento . querySelector ( '.header .header-nav .nav-list ul' ) ;
const  menu_item  =  documento . querySelectorAll ( '.header.header-nav.nav-list ul li a' ) ;
 encabezado  const =  documento . querySelector ( '.header.container' ) ;

hamburguesa _ addEventListener ( 'clic' ,   ( )  =>  {
    hamburguesa _ listaclases . alternar ( 'activo' ) ;
    menú_móvil . listaclases . alternar ( 'activo' ) ;
} ) ;

documento _ addEventListener ( 'desplazamiento' ,  ( )  =>  {
    var  scroll_position  =  ventana . desplazarse Y ;
    si (  posición_desplazamiento  >  100 ) {
        encabezado _ estilo _ color de fondo  =  "#000000" ;
    }
    más {
        encabezado _ estilo _ colordefondo  =  "rgba(31, 30, 30, 0.158)" ;
    }
} )
menu_item . paraCada ( elemento  =>  {
    artículo _ addEventListener ( 'clic' , ( )  =>  {
    hamburguesa _ listaclases . alternar ( 'activo' ) ;
    menú_móvil . listaclases . alternar ( 'activo' ) ;
    } )
} )
