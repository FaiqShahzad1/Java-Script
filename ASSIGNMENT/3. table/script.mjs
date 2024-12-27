
const table = () => {


        let number = document.querySelector("#number").value;
        let number2 = document.querySelector("#number2").value;
        let result = "";
        number = parseInt(number);
        number = parseInt(number2);


        for (let index = 1; index <= number2; index++) {


                result = `<p> ${result} ${number} x ${index} =  ${number * index}<p/>`;
        }

        document.querySelector("#result").innerHTML = result;

}

