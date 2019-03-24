$ (document).ready(function(){
                $ ('.sidenav').sidenav()
                $ ('.parallax').parallax()
                $ ('.modal').modal()
                $ ('#collection-link1').hover(function(){
                    $ ('.onclick-collection1').show() 
                    },
                    function () {
                    $(".onclick-collection1").hide();
                    });
                    $ ('#collection-link2').hover(function(){
                    $ ('.onclick-collection2').show() 
                    },
                    function () {
                    $(".onclick-collection2").hide();
                    });
                    $ ('#collection-link3').hover(function(){
                    $ ('.onclick-collection3').show() 
                    },
                    function () {
                    $(".onclick-collection3").hide();
                    });
                    $ ('.scrollspy').scrollSpy();
    

            })