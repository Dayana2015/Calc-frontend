
//crear everlisten 1. tener una referencia al elemento del domo alq ue queremos agregarle el eventlistener
const miBoton1 = document.getElementById("submit-1");

miBoton1.addEventListener(
    "click",
    async (event) => {

        event.preventDefault();

        console.log(event);
        const numero_1 = parseFloat(document.getElementById("num1").value) ;
        const numero_2 = parseFloat(document.getElementById("num2").value);
        //crear peticion al backend con fetch
        const respuesta= await fetch(
            `http://localhost:3000/api/sumar`,
            {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({numero_1, numero_2})
            }

        );
        const dato= await respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;

    }

);

const miBoton2 = document.getElementById("submit-2");

miBoton2.addEventListener(
    "click",
    async (event) => {

        event.preventDefault();

        console.log(event);
        const numero_1 = parseFloat(document.getElementById("num1").value) ;
        const numero_2 = parseFloat(document.getElementById("num2").value);
        //crear peticion al backend con fetch
        const respuesta= await fetch(
            `http://localhost:3000/api/restar`,
            {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({numero_1, numero_2})
            }

        );
        const dato= await respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;

    }

);
const miBoton3 = document.getElementById("submit-3");

miBoton4.addEventListener(
    "click",
    async (event) => {

        event.preventDefault();

        console.log(event);
        const numero_1 = parseFloat(document.getElementById("num1").value) ;
        const numero_2 = parseFloat(document.getElementById("num2").value);
        //crear peticion al backend con fetch
        const respuesta= await fetch(
            `http://localhost:3000/api/multiplicar`,
            {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({numero_1, numero_2})
            }

        );
        const dato= await respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;

    }

);

const miBoton4 = document.getElementById("submit-4");

miBoton2.addEventListener(
    "click",
    async (event) => {

        event.preventDefault();

        console.log(event);
        const numero_1 = parseFloat(document.getElementById("num1").value) ;
        const numero_2 = parseFloat(document.getElementById("num2").value);
        //crear peticion al backend con fetch
        const respuesta= await fetch(
            `http://localhost:3000/api/dividir`,
            {
                "method": "POST",
                "headers": {
                    "Content-Type": "application/json"
                },
                "body": JSON.stringify({numero_1, numero_2})
            }

        );
        const dato= await respuesta.json();
        const div_resultado=document.getElementById("resultado");
        div_resultado.innerHTML=dato;

    }

);