window.onload = () =>
{
    document.getElementById("Data").addEventListener('keypress', 
    (keyEvent) => 
    {
        if (keyEvent.key !== "Enter")
        {   
            return null;
        };

        let data = new Get_Date(document.getElementById("Data").value);

        console.log(data.Get_Day())

        if ((data.Get_Day().input === null || data.Get_Day()[0] > 31) ||
            (data.Get_Month().input === null || data.Get_Month()[0] > 12) ||
            (data.Get_Year().input === null))
        {
            document.getElementById("Resposta").innerText =
            "Valor Invalido.";
            document.getElementById("Data").value = "";
            return null;
        }

        document.getElementById("Resposta").innerText = 
        `${data.Get_Day()} / ${data.Get_Month()} / ${data.Get_Year()}`;
    });
};