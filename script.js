function selHobbie()
        {
            var dibujar   = ["Rosado","Azul","Naranja"];
            var cantar  = ["negro","azul","rosado"];
            var bailar = ["negro","gris","blanco"];

            if(document.getElementById("region").selectedIndex ==1)
            {
                borraelementos();
                for(var i=0; i<dibujar.length; i++)
                {
                    provincia.options[provincia.options.length] =new Option(dibujar[i],i);
                }
            }

            if(document.getElementById("region").selectedIndex ==2)
            {
                borraelementos();
                for(var i=0; i<cantar.length; i++)
                {
                    provincia.options[provincia.options.length] =new Option(cantar[i],i);
                }
            }

            if(document.getElementById("region").selectedIndex ==3)
            {
                borraelementos();
                for(var i=0; i<bailar.length; i++)
                {
                    provincia.options[provincia.options.length] =new Option(bailar[i],i);
                }
            }

        }

        function borraelementos()
        {
            var sel = document.getElementById("provincia");
            while(sel.length>1)
            {
                sel.remove(1);
            }
        }

        window.onload=function(){alert('Aqui encontraras el formulario para la compra respectiva del producto que elijas');}