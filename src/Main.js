const My_Date = 
{
    day: 0,
    month: 0,
    year: 0
};

function GetDate(value)
{
    let date = new Get_Date(value);
    
    My_Date.day = date.Get_Day();
    My_Date.month = date.Get_Month();
    My_Date.year = date.Get_Year();
}

window.addEventListener('change', (ChangerEvent) =>
{
    let element = document.getElementsByName("Opcoes")

    for (let i = 0; i < element.length; i++)
    {
        if (element.item(i).checked)
        {
            switch (element.item(i).id) {
                case "Opcao_1":
                    document.getElementById("Resposta").innerText =
                    `${My_Date.day} / ${My_Date.month} / ${My_Date.year}`;
                    break;
                case "Opcao_2":
                    document.getElementById("Resposta").innerText =
                    `${My_Date.year} / ${My_Date.month} / ${My_Date.day}`;
                    break;
                case "Opcao_3":
                    document.getElementById("Resposta").innerText =
                    `${My_Date.month} / ${My_Date.day} / ${My_Date.year}`;
                    break;
            };
        };
    };
});